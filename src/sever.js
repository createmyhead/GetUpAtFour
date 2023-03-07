import express from 'express';
import configViewEngine from './config/viewEngine'
import initWebRoutes from './routes/web'
import testConnect from './config/connectDB'
import cacthErr from './config/cacthErrors'
import InitUserPage from './routes/User.router'



// import connectMongo from './config/mongoDB/connectDBMongo'

require('dotenv').config();


const app = express()
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


configViewEngine(app);
initWebRoutes(app);
InitUserPage(app);
testConnect();


// connectMongo();

cacthErr(app)


app.listen(port)