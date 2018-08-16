var friendsData = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.send(friendsData);
      });
    app.post("/api/friends", function(req, res) {
        res.send(friendsData);
        friendsData.push(req.body);
    });
    app.post("/api/clear", function() {
        friendsData.empty();
      });
}