var express = require('express');
var app = express();
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

app.use(bodyParser.urlencoded({
    'extended': 'true'
})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json
app.use(methodOverride());

app.use(function (req, res, next) {
    console.log("MY MIDDLE WARE");
    //res.send("Cant continue");
    next();
})
let menuItems = [

    {
        id: 1,
        name: 'idli',
        price: 10
    },
    {
        id: 2,
        name: 'dosa',
        price: 10
    },
    {
        id: 3,
        name: 'idli1',
        price: 20
    },
    {
        id: 4,
        name: 'idli3',
        price: 30
    },
    {
        id: 5,
        name: 'vada',
        price: 10
    },
    {
        id: 6,
        name: 'Upma',
        price: 100
    },
]

app.get('/', function (req, res) {
    res.send("Helloworld")
})

app.get('/menuitems', function (req, res) {
    res.send(menuItems);
})

// app.get('/menuitems/:id', function (req, res) {

//     let menuitemid = req.params.id;
//     let menuitem = menuItems.find(item => item.id == menuitemid);
//     if (menuitem) {
//         res.send(menuitem);
//     } else {
//         res.send("Not found");
//     }
// })


app.post("/menuitems", function (req, res) {
    let newmenuitem = req.body;
    console.log("received: " + newmenuitem);
    menuItems.push(newmenuitem);
    res.send("Added Successfully");
});


app.put("/menuitems", function (req, res) {

    let updateitem = req.body;
    console.log("updateitem: " + JSON.stringify(updateitem));

    let existingmenuitem = menuItems.find(item => item.id == updateitem.id);

    if (existingmenuitem) {
        existingmenuitem.name = updateitem.name;
        existingmenuitem.price = updateitem.price;

        res.send("Updated Successfully");
    } else {
        res.send("Item not found");
    }

});
app.delete('/menuitems/:id', function (req, res) {

    let menuitemid = req.params.id;
    menuItems = menuItems.filter(item => item.id != menuitemid);
    res.send("Deleted");
})


var server = app.listen(8082, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("vizkart app listening at http://%s:%s", host, port)

})