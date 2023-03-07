import db from '../models/index';
import express from 'express';
import axios from 'axios';

const getDataUser = async (req, res) => {
    const getparam = req.params.userID;
    return new Promise(async (resolve, reject) => {
        try {
            const dataparam = await db.User.findOne({ where: { userID: getparam } });
            const newData = {
                fullName: dataparam.fullName,
                email: dataparam.email,
                phonenumber: dataparam.phonenumber
            };
            // const DataArray = JSON.stringify(Object.values(newData));
            return res.render('userID_Page.ejs', {
                data: [
                    JSON.stringify(newData.fullName),
                    JSON.stringify(newData.email),
                    JSON.stringify(newData.phonenumber)
                ]
            });
        } catch (e) { reject(e) }
        resolve()

    })
}


export default getDataUser;