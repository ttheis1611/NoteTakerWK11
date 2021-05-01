const express = require("express");
const app = express();
// Sets an initial port.
const apiRoutes = require("./routes/apiroutes");
const htmlRoutes = require("./routes/htmlroutes");

const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//ROUTES

//API 
app.use("/api", apiRoutes);
// HTML
app.use("/", htmlRoutes); 

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});