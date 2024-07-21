import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv" 
import logger from "morgan"
import authRoutes from "./app/routes/authRoutes.js"
import userRoutes from "./app/routes/service.js"
import createError from "http-errors";

dotenv.config();

const port = process.env.PORT;
const connectionURL =  process.env.MONGODB_URI;
const app = express();

//middleware
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/auth/test", (req, res)=>{
            console.log("api on live")
} )
//apis
app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.json({ message: err.message});
  });
// mongoose.connect(connectionURL).then(()=>{
//     console.log("DB connected")
//     app.listen(port, ()=>{
//         console.log("Server running on port " + port)
//     })
// }).catch((err)=>{
//     console.log("Error connecting DB \n\n", err.message);
// })