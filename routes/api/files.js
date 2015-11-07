var router = require("express").Router();
var fs = require("fs");
router.get('/', function(req, res, next) {
    var readFiles = fs.readdir(process.env.HOME, function(err, files) {
        if (err) {
            console.log(err);
            res.sendStatus(403);
        }
        res.json(files);
    })
});

module.exports = router;