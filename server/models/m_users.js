var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    phone: String,
    // itemId: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Item'
    // }
}, {
    timestamps: true
});

var User = mongoose.model('User', userSchema);

module.exports = User;