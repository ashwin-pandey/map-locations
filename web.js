var options = {};
var jade = require('jade');

app.get('/site.js', function(req, res){
    res.send("var GOOGLE_MAP_API_KEY='"+process.env.GOOGLE_MAP_API_KEY+"'");
});