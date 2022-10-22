import express from 'express'

const router = express.Router()

router.get('/', async (req, res) => {
    res.send('Welcome Home Page')
})

export default router
