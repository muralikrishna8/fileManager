var router = require("express").Router();
var fs = require("fs");
router.get('/', function(req, res, next) {
    var path = req.query.path || '';
    var readFiles = fs.readdir(process.env.HOME + "/" + path, function(err, files) {
        if (err) {
            console.log(err);
            res.sendStatus(403);
        }
        res.json(files);
    })
});

module.exports = router;