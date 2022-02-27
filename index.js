const express = require('express')
const app = express()
const port  = 3000

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(port, ()=>{console.log(`Server is running on port ${port} ...`)})

// const express = require('express')
// const app = express()


// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)