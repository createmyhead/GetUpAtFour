import bcrypt from 'bcryptjs';
import db from '../models/index';
import express from 'express';


const salt = bcrypt.genSaltSync(10);
const createError = require('http-errors');
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const makeNewUser = async (req, res, next) => {
    const { fullName, userID, email, password, phonenumber } = req.body;

    return new Promise(async (resolve, rejeck) => {
        try {
            if (!fullName || !userID || !password || !email || !phonenumber) {
                next(createError(400, 'input full information please !'));
                next();
            }
            const existEmail = await db.User.findOne({ where: { email: email } });
            const existPhone = await db.User.findOne({ where: { phonenumber: phonenumber } });
            if (existEmail) {
                console.log('lỗi trung email');
                next(createError(409, 'email is exist'));
                next();
            }
            if (existPhone) {
                console.log('lỗi trung password');
                next(createError(409, 'phonenumber is exist'));
                next();
            }
            const hashedPW = bcrypt.hashSync(password, salt);
            const createNewUser = await db.User.create({
                fullName: fullName,
                userID: userID,
                email: email,
                password: hashedPW,
                phonenumber: phonenumber,
            });
            return res.json({
                status: 'ok',
                element: createNewUser,
            });
        } catch (error) { next(error) }
    })
};

export default makeNewUser;

