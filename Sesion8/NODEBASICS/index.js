const express = require("express");
const port = 3000;
const app = express();

app.get("/",function(req,res){console.log("api works");}); //consulta GET a raiz

app.listen(
    port,
    ()=>{
        console.log("app is running in port " + port);
    }
);
