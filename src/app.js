const express = require('express')
const usersRouter = require('./users/users.router')

const app = express()

app.use(express.json())

app.get('/',(req,res) => {
    res.status(200).json({
        message: 'Server Ok'
    })
})

app.use('/api/v1',usersRouter)

app.listen(9001, () => {
    console.log('Server started at: http://localhost:9001')
})


module.exports = app
