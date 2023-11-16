const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
    
    name: String,
    description: String,
    date: Date,
});

mongoose.connect('mongodb+srv://obaldia21:Josueda2#@cluster0.jpqirhu.mongodb.net/TicketsDB?retryWrites=true&w=majority')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...'));


//module.exports =  mongoose.model('Entry', entrySchema);
