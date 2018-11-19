var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var Restaurant = require('./restaurantSchema');

app.use(bodyParser.urlencoded({
    'extended': 'true'
}));
app.use(bodyParser.json());
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));
app.use(methodOverride());

app.use(function (req, res, next) {
    console.log(Date.now());
    next();
})

app.get('/restaurant', function (req, res) {
    Restaurant.find({}).exec((err, result) => {
        if (err) {
            console.log('err');
            res.status(500).send('problem retrieving:' + err);
        }
        res.status(200).send(result);
    })
})

app.get('/restaurants/:name', function (req, res) {
    let restaurantsName = req.params.name;

    Restaurant.find({
            name: restaurantsName
        })
        .exec((err, items) => {
            if (err) {
                console.log(err)
                res.status(500).send('problem retrieving:' + err);
            }
            res.status(200).send(items);
        })
})

app.get('/restaurant/:tag', function (req, res) {
    let restaurantTag = req.params.tag;

    Restaurant.find({
            tag: restaurantTag
        })
        .exec((err, item) => {
            if (err) {
                console.log(err)
                res.status(500).send("problem retrieving")
            }
            res.status(200).send(item);
        })
})

app.get('/restaurants', function (req, res) {

    let name = req.query.name;
    let tag = req.query.tag;

    let queryParams = [];

    if (name) {
        queryParams.push({
            name: name
        });
    }

    if (tag) {
        queryParams.push({
            tag: tag
        });
    }
    Restaurant.find({
        $or: queryParams
    }, (err, result) => {
        res.status(200).send(result);
    })
})


app.put('/restaurants/:name', (req, res) => {
    let updateRestaurant = req.body;
    let name = req.params.name;

    Restaurant.findOne({
            name: name
        })
        .exec((err, restaurant) => {
            Object.assign(restaurant, updateRestaurant);
            restaurant.save((err, item) => {
                if (err) {
                    console.log('problem updating' + err);
                    res.status(500).send(err);
                }
                res.status(200).send(item);
            });
        });
});

app.get('/restaurants', (req, res) => {
    let name = req.params.name;
    let tag = req.params.tag;

    let queryparams = [];

    if (name) {
        queryparams.push({
            name: name
        });
    }
    if (tag) {
        queryparams.push({
            tag: tag
        });
    }
    Restaurant.find({
        $or: queryparams
    }, (err, rest) => {
        if (err) {
            res.status(200).send(err)
        }
        res.status(500).send(rest)
    });

})

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myRestApp');
var db = mongoose.connection;

db.on('error', function (err) {
    console.log('ERROR');
})

db.once('open', function () {
    console.log('DB is through the wormhole');
})

var server = app.listen(8082, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Worm hole to the webserver is now open at http://%s:%s', host, port);
})