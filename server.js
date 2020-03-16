// 1. Dependencies
var express = require("express");

var app = express();

var PORT = process.env.PORT || 4500;

app.use(express.urlencoded({ extended: true}));

app.use(express.json());

app.use(express.static("public"));

require("./Develop/routes/apiRoutes")(app);

require("./Develop/routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
