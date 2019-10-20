const express = require('express');
const app = express();

//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/get1', (req, res) => {
  const {
    id
  } = req.query;
  res.send({
    id,
    name: 'xxx',
    price: 12
  });
});

app.post('/post1', (req, res) => {
  const {
    id
  } = req.body;
  res.send({
    id,
    name: 'yyy',
    price: 23
  });
});

app.get('/products1', (rea, res) => {

  setTimeout(() => {
    res.send([{
        id: 1,
        name: 'product1.1'
      },
      {
        id: 2,
        name: 'product1.2'
      },
      {
        id: 3,
        name: 'product1.3'
      },
    ]);
  }, 1000 + Math.random() * 2000);

});

app.get('/products2', (rea, res) => {

  setTimeout(() => {
    res.send([{
        id: 1,
        name: 'product2.1'
      },
      {
        id: 2,
        name: 'product2.2'
      },
      {
        id: 3,
        name: 'product2.3'
      }
    ]);
  }, 1000 + Math.random() * 2000);

});

app.listen(4000, () => {
  console.log('sever app start ono port 4000');
});