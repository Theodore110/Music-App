const express = require("express");
const morgan = require("morgan"); //http request logging
const cors = require("cors"); // CORS middleware to allow cross-origin requests
const app = express();
const PORT = 5000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

//middlewares and static files
app.use(express.static("../music-app"));

//Routes
app.get("/", (req, res) =>{
    res.status(200).sendFile(__dirname + '/../index.html');
});

app.get("/budget", (req, res)=> {
    res.status(200).sendFile(__dirname + '/../budget.html');
});

app.get("/role", (req, res) => {
    res.status(200).sendFile(__dirname + '/../role.html');
});

app.get("/dashboard", (req, res) => {
    res.status(200).sendFile(__dirname + '/../user_dashboard.html');
});

app.all("*", (req, res)=> {
    res.status(404).send("Page not found");
});

//Server starting
app.listen(PORT, ()=> {
    console.log("Server running...");
})