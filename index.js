const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json);
app.use(require('./routes/Book.route'));
app.use(require('./routes/Genry.route'));
app.use(require('./routes/Comment.route'));

(async function(){
    try{
        await mongoose.connect(
            "mongodb+srv://lechiev2015:token95@cluster0.qpdtotg.mongodb.net/marketBook"  
        )
        app.listen(4000);
        console.log('сервер запущен');
    }
    catch (error){
        console.log(error)
    }

})()