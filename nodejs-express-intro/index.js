// // without express
// const http = require('http')

// const hostname = '127.0.0.1'
// const port = 3000

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
//   });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// })

// with express
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
const port = 5000


// example of get
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/example', function(req, res) {
//   // res.sendFile("index.html")
//   console.log(__dirname)
//   res.sendFile(__dirname + "/index.html")
// })

// app.post('/example', function(req, res){
//   var username = req.body.username
//   var story =req.body.story

//   var newStory = username + " shared this story: " + story
//   res.send(newStory)
// })

// example of use route
app.use('/bloglist', require('./route'))

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
