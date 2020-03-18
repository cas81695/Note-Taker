var express = require("express");

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.urlencoded({ extended: true}));

app.use(express.json());

app.use(express.static("public"));

require("./Develop/routes/apiRoutes")(app);

require("./Develop/routes/htmlRoutes")(app);

app.listen(app.get('port'), function() {
    console.log('App listening on port', app.get('port'));
});
