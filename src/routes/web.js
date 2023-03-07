import express from 'express';
import controller from '../controller/controller'

const router = express.Router();

const initWebRoutes = (app) => {
    router.get('/', controller.homePage);
    return app.use("/", router);
}

export default initWebRoutes;