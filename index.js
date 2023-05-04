const express = require('express');
const app = express();
const PORT = 3000;

app.get('/demo', function (req, res) {
    console.log("/demo request called");
    res.send('Welcome to GitHub Actions Cache Management Project');
});

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

module.exports = app;
