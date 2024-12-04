const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
    tid:{
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    desc:{
        type: String,
    },
    date: {
        type: Date,
        default: Date.now, // Automatically set to the current date/time
    },
});

module.exports = mongoose.model('Link', linkSchema);
