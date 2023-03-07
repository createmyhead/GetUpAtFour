import bcrypt from 'bcryptjs';
import db from '../models/index';
import express from 'express';

const salt = bcrypt.genSaltSync(10);
const createError = require('http-errors');
const router = express.Router();

const makeNewUser = async (data) => {
    const passwordinput = await data.password;
    return new Promise(async (resolve, rejeck) => {
        try {
            const hashedPW = await bcrypt.hashSync(passwordinput, salt);
            await db.User.create({
                fullName: data.fullName,
                userID: data.userID,
                email: data.email,
                password: hashedPW,
                phonenumber: data.PhoneNumBer,
            });
            resolve();
        } catch (e) { rejeck(e); }
    })
};

export default makeNewUser;

