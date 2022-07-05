//always like this
const express = require ('express');
const app = express();
const authRouter = require("./routes/auth.router")
const userRouter = require("./routes/users.router")
const postRouter = require('./routes/posts.router');


//connect to the database
const connect = require('./config/connectDb')
require ('dotenv').config();

app.use(express.json());
app.use("/api/auth",authRouter); 
app.use("/api/users",userRouter); 
app.use('/api/posts',postRouter);

const PORT = process.env.PORT || 5000;
connect();


app.listen ( PORT,(error) => {
if (error) throw console.error (error)
console.log('listen to port '+PORT)
})
