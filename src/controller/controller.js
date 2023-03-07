import db from '../models/index';
import makeNewUser from '../service/Register';
import UserLogin from '../service/Login';
import getDataUser from '../service/getdatauser';
import axios from 'axios';
require("@babel/register");


// trang chủ
const homePage = async (req, res) => {
    return res.render('home.ejs');
};
// register
const userPageRegister = async (req, res) => {
    return res.render('userRegister.ejs')
}
const CreateNewUser = async (req, res) => {
    await makeNewUser(req.body);
    return res.send(" created ID");

}
// login
const userPageLogin = async (req, res) => {
    return res.render('userPageLogin.ejs')
}
const userLogin = async (req, res) => {
    await UserLogin(req, res);

    return res.send('login ok')
}
// log out
const userPageLogout = async (req, res) => {
    return res.render('userPageLogout.ejs')
}
// User page
const UserPage = async (req, res) => {
    await getDataUser(req, res);
    const newusserData = await axios.get('http://localhost:3001/login/userpage/tan');
    console.log(newusserData)

    return res.render('userID_Page.ejs')
}
export default {
    homePage,
    userPageRegister,
    userPageLogin,
    userPageLogout,
    CreateNewUser,
    userLogin,
    UserPage,

}

