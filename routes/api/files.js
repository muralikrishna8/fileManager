var router = require("express").Router();
var path = require("path");
var fs = require("fs");
router.get('/', function(req, res, next) {
    var homedir = (process.platform === 'win32') ? process.env.HOMEPATH : process.env.HOME;
    var filePath = path.join(homedir, req.query.path || "");
    var readFiles = fs.readdir(filePath, function(err, files) {
        if (err) {
            console.log(err);
            res.sendStatus(403);
        }
        files = files.map(function(file){
            var stats =  fs.statSync(path.join(filePath, file));
            return {"name" : file, "isDir" : stats.isDirectory()};
        });

        res.json(files);
    })
});

module.exports = router;