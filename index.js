// create an express object from the express package
const express = require("express");
const bodyParser = require("body-parser");

// create an app object from the express object
const app = express();
// this allows the parsing of the html file using body parser
app.use(bodyParser.urlencoded({extended: true}));

//trimmed the code to only keep the route /bmiCalculator
// to display - Open in New Tab, add /bmiCalculator to URL

// this code is only invoked on the path /bmiCalculator
app.get("/bmiCalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

// invoked on the submit button
app.post("/bmiCalculator", function(req, res){

//converts the string input to a float number
  var weight = parseInt(req.body.weight);
  var height = parseInt(req.body.height);

// does the computation of the input variables, as numbers
  var bmi = weight / (height * weight);

//display the result in 2 decimal places
res.send("Your BMI is " + bmi.toFixed(2));

})

app.listen(3000, function() {
  console.log ("Server is running on port 3000")
});
