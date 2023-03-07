import express from 'express';
import controller from '../controller/controller';


const router = express.Router();

const InitUserPage = (app) => {
    router.get('/register', controller.userPageRegister);
    router.post('/register/post', controller.CreateNewUser)
    router.get('/login', controller.userPageLogin);
    router.post('/login/post', controller.userLogin);
    router.get('/logout', controller.userPageLogout);
    router.get('/login/userpage/:userID', controller.UserPage)


    return app.use("/", router);
}
export default InitUserPage;
