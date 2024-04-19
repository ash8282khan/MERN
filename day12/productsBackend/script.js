const express = require("express");
const productRouter = require('./routes/productsRoutes.js')
const userRouter = require('./routes/usersRoutes.js')
const reviewRouter = require('./routes/reviewsRoutes.js')
const mongoose = require('mongoose');
const app = express();
const loadData = require('./configs/db_data.js')
const test = require('./models/productsModel.js')

app.use(express.json())

app.use('/api/products',productRouter);
app.use('/api/users',userRouter);
app.use('/api/reviews',reviewRouter);

const url = "mongodb+srv://$USERNAME$:$PASSWORD$@cluster0.vpogxyd.mongodb.net/$DBNAME$?retryWrites=true&w=majority&appName=Cluster0"

const databaseUser="ash8282khan";
const databasePassword="qwerty123";
const databaseName="productBackend";

let dblink = url.replace("$USERNAME$", databaseUser)
 dblink = dblink.replace("$PASSWORD$", databasePassword)
 dblink = dblink.replace("$DBNAME$", databaseName)

 mongoose.connect(dblink)
    .then(()=>{
        console.log("-----------database connected-----------")
        // loadData()
    }
   
);

    app.listen(3000,
    ()=>console.log("---------------app started--------------"));


// app.listen(1400);