import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
const secret = process.env.JWT_KEY

export const AuthMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        //console.log(token)
        if(token){
            const decoded = jwt.verify(token, secret)
            //console.log(decoded)
            req.body._id = decoded?.id
            req.body._type = decoded?.type
        }
        next()
    } catch (error) {
        //console.log(error)
        res.status(401).json({message: 'Authorization failed.'})
    }
}

export const IsAirlineUser = async(req, res, next) => {
    try {
        if (req.body._type === 'airline')
            next()
        else
            res.status(403).json({message: 'User do not have airline privileges.'})
    } catch(err) {
        //console.log(err)
        res.status(403).json({message: 'User do not have airline privileges.'})
    }
}

export const IsAirportUser = async(req, res, next) => {
    try {
        if (req.body._type == 'airport')
            next()
        else
            res.status(403).json({message: 'User do not have airport privileges.'})
    } catch(err) {
        //console.log(err)
        res.status(403).json({message: 'User do not have airport privileges.'})
    }
}