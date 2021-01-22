const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers', (Req,res)=>{
    res.send([
        {
            'id':1,
            'image':'https://placeimg.com/64/64/1',
            'name':'yoonseok',
            'birthday':'970130',
            'gender':'male',
            'job':'student'
          },
          {
            'id':2,
            'image':'https://placeimg.com/64/64/2',
            'name':'someone1',
            'birthday':'111111',
            'gender':'male',
            'job':'student'
          },
          {
            'id':3,
            'image':'https://placeimg.com/64/64/3',
            'name':'asdfds3',
            'birthday':'222222',
            'gender':'female',
            'job':'student'
          }
    ]);
})

app.listen(port, ()=>console.log(`listening on port ${port}`));