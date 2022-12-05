import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {db, User} from "../Models/index.js";

export const signUpUser = async (req, res) => {
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(req.body.password, salt)
    req.body.password = hashedPass

    const {email} = req.body
    const data = {...req.body, accountStatus: "active"}

    const t = await db.sequelize.transaction()
    try {
        const oldUser = await User.findOne({ where: {email}})

        if(oldUser)
            return res.status(400).json({message: 'Username is already taken.'})

        const user = await User.create(data, {transaction: t})

        const token = jwt.sign({
            email: user.email, id: user.id, type: user.type
        }, process.env.JWT_KEY, {expiresIn: '1hr'})

        await t.commit()
        const {password, ...response} = user.dataValues
        res.status(200).json({user: response, token})
    } catch (err) {
        //console.log(err)
        await t.rollback()
        res.status(500).json({message: 'Failed to sign up user.'})
    }
}

export const loginUser = async (req, res) => {

    const {email, password, role} = req.body

    try {
        const user = await User.findOne({where: {email}})

        if(user) {
            if(user.type != role)
                return res.status(400).json({message: "User does role does not match."})
            const validity = await bcrypt.compare(password, user.password)

            if(!validity) {
                res.status(400).json({message: 'Wrong password!'})
            } else {
                const token = jwt.sign({
                    email: user.email, id: user.id, type: user.type
                }, process.env.JWT_KEY, {expiresIn: '1hr'})
                const {password, ...response} = user.dataValues
                res.status(200).json({user: response, token})
            }
        } else {
            res.status(400).json({message: 'User does not exist.'})
        }

    } catch(err) {
        res.status(500).json({message: 'Failed to login.'})
    }


}
