var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RestaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    menu_name: {
        type: String,
        default: ''
    },
    tag: {
        type: String,
        default: ''
    }
})
module.exports = mongoose.model('Restaurant', RestaurantSchema);