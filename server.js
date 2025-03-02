const express = require('express');
const app = express();



app.get('/listen',(req,res)=>{
    const data = req.query.name
    res.send(`Hello  ${data}`);
})

app.listen(3000,()=>{
    console.log("Running successfully on the server");
})



