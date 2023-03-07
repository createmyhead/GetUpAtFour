import bcrypt from 'bcryptjs';
import db from '../models/index';
import express from 'express';
const salt = bcrypt.genSaltSync(10);
const createError = require('http-errors');
//import SignInAccessToken from '../service/JWTService'


const UserLogin = async (req, res,) => {
    const inforid = req.body.userIDInput;
    const inforPass = req.body.passwordInput;
    return new Promise(async (resolve, reject) => {
        try {

            const ifID = await db.User.findOne({ where: { userID: inforid } });

            if (!ifID) {
                console.log(" ID không tồn tại");
                res.send("ID không tồn tại")
            };
            if (ifID) {
                const checkpass = bcrypt.compareSync(inforPass, ifID.password);
                if (checkpass === true) {
                    const userIDforparam = ifID.userID;
                    console.log(userIDforparam);
                    return res.redirect(`/login/userpage/${userIDforparam}`);
                } else { return res.send("sai password") };
            }
        } catch (e) { reject(e) };
    });
};

export default UserLogin;