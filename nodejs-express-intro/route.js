const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    // res.send(res)
    // console.log(res)
    res.sendFile(__dirname + "/index.html")
})

router.post('/', (req, res) => {
    // var num1 = Number(req.body.username)
    // var num2 = Number(req.body.n2)

    // var result = num1 + num2
    // res.send('The result of the calculation is ' + result)
    var friend = req.body.username
    var blog = req.body.storyOftheDay

    res.send(`${friend} sharing this story: ${blog}  `)
})

router.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
})

router.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
})

module.exports = router