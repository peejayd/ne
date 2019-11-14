const express = require("express");
const path = require("path");
// initializng express
const app = express();

//PORT to run server on
const PORT = 5000;
//middleware
app.use("/asserts", express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "view"))
// setting template engine to pug
app.set("view engine", "pug")

// route
app.get("/", function(req,res){
    //return res.send("<h1>Hello World</h1>");
    return res.sendFile(path.resolve(__dirname,"index.html"));
});
app.get("/person/:name", function(req, res){
  return res.render("person",{name: req.params.name});
});
//app.get("/person/:name", function (req, res){
 // console.log(req.params);
 // console.log(req.query);
 // return res.send(`<h1>Hi, ${req.params.name}</h1>`);
//})
// make the server go live
app.listen(PORT, function() {
  console.log(`server running on port${PORT}`);
});