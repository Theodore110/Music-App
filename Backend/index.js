const express = require("express");
const app = express();
const PORT = 5000;

//middlewares and static files
app.use(express.static("./music-app"));

//Routes
app.get("/", (req, res) =>{
    res.status(200).sendFile(__dirname + "./music-app/index.html");
})

app.get("/budget", (req, res)=> {
    res.status(400).send("Supposed t be a page");
})

app.get("/role", (req, res) => {
    res.status(400).send("Supposed to be a page");
})

app.all("*", (res, req)=> {
    res.status(404).send("Page not found");
});

//Server starting
app.listen(PORT, ()=> {
    console.log("Server running...");
})