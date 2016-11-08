 import express from 'express'
 import cors from 'cors';

 const app=express();
app.use(cors());
 app.get('/task2A', (req,res)=>{
   const sum= (+req.query.a||0) + (+req.query.b||0);
   res.send(sum.toString());
 });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
