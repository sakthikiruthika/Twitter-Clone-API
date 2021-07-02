const express=require("express");
const app=express();

const Twitter=require("./api/help/twitter");
const twitter=new Twitter();

 app.get("/",(req,res)=>{
     res.status(200).send("REPUTATION");
 });



app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    next();
});


app.get("/tweets",(req,res)=>{
    const query=req.query.q;
    const count=req.query.count;
    const maxId=req.query.max_Id;


    twitter.get(query,count,maxId) .then((response)=>{
        res.status(200).send(response.data);
    }).catch((e)=>{
        res.status(400).send(e);
    })
}
);


// app.listen(3000,()=>{   console.log("http://localhost:3000");
// });

app.listen(process.env.PORT||3000,()=>{
    console.log("http://localhost:3000");
});