import express from 'express'
// App configuration
const app = express().Router();

app.use('/', (req, res) => res.send('Hello World'))

