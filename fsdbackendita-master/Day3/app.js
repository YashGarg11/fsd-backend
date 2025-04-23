const express=require('express');
const app=express();
app.use(express.json());
const users=[];
app.get('/api',(req,res)=>{
    res.json(users);
})
app.post('/users',(req,res)=>{
    const data=req.body;
    const newid=users.length>0?users[users.length-1].id+1:1;
    data.id=newid;
    users.push(data);
    res.json({message: 'data received',data:data});
});

app.get('/users',(req,res)=>{
    res.send('welcome to backend server'); 
})



app.listen(9000,()=>{
    console.log('Server running on port 9000');  
});