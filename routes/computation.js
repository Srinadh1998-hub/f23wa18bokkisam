var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function (req, res, next) {
    fake_url = "https://fake.com/path" + req.url
    const url = new URL(fake_url)
    const search_params = url.searchParams
    if (req.method === 'GET') {
        val = search_params.get("x")
        if(val === null)
        {
            val=Math.round(Math.random()*12);
        }     
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Math.abs() applied to ' + val + ' is ' + Math.abs(val));
        res.write('<br>Math.acos() applied to ' + val + ' is ' + Math.acos(val))
        res.write('<br>Math.sin() applied to ' + val + ' is ' + Math.sin(val))
        res.end()
    }

});

module.exports = router;