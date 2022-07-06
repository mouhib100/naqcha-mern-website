//always like this
const express = require('express');
const app = express();
const authRouter = require("./routes/auth.router")
const userRouter = require("./routes/users.router")
const postRouter = require('./routes/posts.router');
const cors = require('cors')

const multer = require("multer")

//connect to the database
const connect = require('./config/connectDb')
require('dotenv').config();
//multer

const storage = multer.diskStorage({
    destination: (req, file, cb) => {  
        cb(null, "images")//cb:callback function takes care of our errors
    },filename:(req,file,cb) =>{ //we are going to send this filenmae to our react application
        cb(null,"logo.jpeg")
    } 
       
})

//how i'm gonna upolad this file

const upload = multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{//.single because we are gonna upload on file, our key is file in postman

    res.status(200).json("file has been uploaded");
});



//routes
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use('/api/posts', postRouter);

const PORT = process.env.PORT || 5000;
connect();


app.listen(PORT, (error) => {
    if (error) throw console.error(error)
    console.log('listen to port ' + PORT)
})
