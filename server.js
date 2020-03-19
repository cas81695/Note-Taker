const express = require("express");

const path = require("path");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true}));

app.use(express.json());

app.use(express.static(path.join(__dirname, "Develop/public")));

require("./Develop/routes/apiRoutes")(app);

require("./Develop/routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("SERVER IS LISTENING: " + PORT);
  });