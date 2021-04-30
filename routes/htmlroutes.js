// Only dependency we need here is for path
const path = require("path");
const router = require('express').Router();


router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});
    // notes routing info

    // If no matching route is found default to home
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;