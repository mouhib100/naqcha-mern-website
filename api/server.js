//always like this
const express = require ('express');
const app = express();
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")


//connect to the database
const connect = require('./config/connectDb')
require ('dotenv').config();

app.use(express.json());
app.use("/api/auth",authRoute); 
app.use("/api/users",userRoute); 

const PORT = process.env.PORT || 5000;
connect();


app.listen ( PORT,(error) => {
if (error) throw console.error (error)
console.log('listen to port '+PORT)
})
