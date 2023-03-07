const Joi = require('joi');

const UserValidateRegister = data => {
    const Userinput = Joi.object({
        fullName: Joi.string().required(),
        email: Joi.string().required(),
        userID: Joi.string().required(),
        password: Joi.string().required(),
        phonenumber: Joi.number().integer().less(10).required()
    });
    return Userinput.validate(data);
} 
const UserValidateLogin = data => {
    const UserLoginInput = Joi.object({
        userID: Joi.string().required(),
        password: Joi.string().required(),
    });
    return UserLoginInput.validate(data)
 }
 
export default {
    UserValidateRegister,
    UserValidateLogin
};