var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/codemobiles_com',{useNewUrlParser: true})

mongoose.connection.on('connected',function() {
   console.log('opend');
});
mongoose.connection.on ('error',function (err) {
    console.log('error :' , + err);
});
mongoose.connection.on('disconnected',function(){
    console.log('disconnected');
});

process.on('SIGINT',function(){
    mongoose.connection.close(function(){
            console.log('defult')
            process.exit(0);
    });
});