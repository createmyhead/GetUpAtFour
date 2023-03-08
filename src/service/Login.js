import bcrypt from 'bcryptjs';
import db from '../models/index';
import express from 'express';
const createError = require('http-errors');
const app = express()
import SignAccessToken from '../service/JWTService';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const UserLogin = async (req, res, next) => {
    const { userID, password } = req.body;
    return new Promise(async (resolve, reject) => {
        try {
            if (!userID || !password) {
                next(createError(400, 'input full infor please !'));
                next();
            }
            const IDExist = await db.User.findOne({ where: { userID: userID } });
            if (!IDExist) {
                next(createError(400, 'userID is not exist'));
                next();
            }
            const checkpass = bcrypt.compareSync(password, IDExist.password);
            if (checkpass === false) {
                next(createError(400, 'sai password'));
                next();
            }
            const accessToken = await SignAccessToken(IDExist.userID)
            const userIDforparam = await IDExist.userID;
            return res.json({
                accessToken
            })
            // res.redirect(`/login/userpage/${userIDforparam}`);
        }
        catch (e) { reject(e) };
    });
};

export default UserLogin;