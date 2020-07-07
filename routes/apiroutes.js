var db = require("./models");
var cheerio = require("cheerio");

module.exports = function(app){
    app.post("/articles/:id", function(req, res) {
        var article = req.params.id
        var filter = {_id:article}
        var update = {saved:true}

        db.Article.findOneAndUpdate(filter, update).then(function(data){
            console.log(`this is the data ${data}`)
        })
    })
};