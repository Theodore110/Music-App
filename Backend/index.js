const express = require("express");
const app = express();
const PORT = 5000;

//Routes
app.get("/", (req, res) =>{
    res.statu(400).send("Supposed to be a page");
})

app.get("/budget", (req, res)=> {
    res.status(400).send("Supposed t be a page");
})

//Server starting
app.listen(PORT, ()=> {
    console.log("Server running...");
})