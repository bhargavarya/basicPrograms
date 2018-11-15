var mongoose = require('mongoose');
var Schema = mognoose.schema;

var restaurantSchema = new Schema({
    name: {
        type: string,
        required: true
    },
    menu_name: {
        type: string,
        default: ''
    },
    tag: {
        type: string,
        default: ''
    }

})



module.exports = mongoose.model('myRestApp', restaurantSchema);