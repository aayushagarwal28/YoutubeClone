import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch'

const app= express();
app.use(cors())

app.get("/search", async(req,res) =>{
    const { q ='' }= req.query;
    const response = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${q}`);
    const responseData= await response.json();

    res.send(responseData);

})

app.listen(8000,()=> console.log("backend listening to port 8000"));