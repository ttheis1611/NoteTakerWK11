// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require();
const htmlRoutes = require();
// Sets an initial port.

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//ROUTES

//API 
app.use ('/api', apiRoutes);
// HTML
app.use('/', htmlRoutes); 

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, () => {
    console.log(`App listening on PORT" ${PORT}`);
});