var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
    name: String,
    price: String,
    location: String,
    qty_stock: Number,
    image: String,
}, {
    timestamps: true
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;