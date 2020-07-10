var util = require("util");
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
    app.get("/", function(req, res){
        res.render("index");
    });

    app.post("/upload", urlencodedParser, function(req, res){
        console.log('file info: ',req.files.image);

        //split the url into an array and then get the last chunk and render it out in the send req.
        var pathArray = req.files.image.path.split( '/' );
        console.log(pathArray);

        res.send(util.format(' Task Complete \n uploaded %s (%d Kb) to %s as %s'
            , req.files.image.name
            , req.files.image.size / 1024 | 0
            , req.files.image.path
            , req.body.title
            , req.files.image
            , '<img src="uploads/' + pathArray[(pathArray.length - 1)] + '">')
        )
        
        //res.render("uploaded", {data: req.body});

    });
};