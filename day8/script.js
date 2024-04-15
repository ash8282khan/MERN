const express = require('express')
const app = express()

app.get('/products',  (req, res)=> {
    console.log('request received')
  res.send('<h1>Welcome GET </h1>');
})
// app.post('/product',  (req, res)=> {
//   res.send('this is home page ');
// })
// app.patch('/about',  (req, res)=> {
//   res.send('this is home page ');
// })
// app.delete('/home',  (req, res)=> {
//   res.send('this is home page ');
// })

app.listen(1400)