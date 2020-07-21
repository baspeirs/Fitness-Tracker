const path = require("path");
const db = require("../models");

module.exports = function(app) {
    // ===== THIS ONE IS TO CONTINUE WORKOUT =====
// app.get("/stats", (req, res) => {
//     res.sendFile(path.join(__dirname, "./public/stats.html"))
// });

// ===== THIS ONE IS FOR NEW WORKOUT =====
app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
});
};