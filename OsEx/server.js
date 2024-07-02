
var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

function getServerData() {
    return 'Hello from the server!';
}

app.get('/get-data', function(req, res) {
    res.send(getServerData());
});

app.listen(3000, function() {
    console.log('Server listening on port 3000');
});

app.use(express.static(path.join(__dirname, 'public')));