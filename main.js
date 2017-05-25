const express = require('express')
var caesar = require('./caesar_secret');
const app = express()

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


/*
  POST: secret: string
*/
app.post('/give_me_a_secret', function(req, res) {
    let secret = req.body.secret;
    let key = caesar.getKeyToSecret(secret);
    console.log(secret);
    res.send(JSON.stringify({key: key}));
});

/*
  STATIC FILES
*/
app.use("/",express.static('static'));

app.listen(8552, function () {
  console.log('Example app listening on port 8552!')
})
