// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var PORT = process.env.PORT || 3006;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes.js")(app);



// listen
app.listen(PORT, function () {
    console.log('You are listening to PORT: ', PORT);

})
