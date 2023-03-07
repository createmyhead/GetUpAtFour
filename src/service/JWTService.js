var jwt = require('jsonwebtoken');

const SignInAccessToken = async (userID) => {
    return new Promise((resolve, reject) => {
        try {
            const payload = {
                userID
            };
            const secret = "KEY SECRECT";
            const options = {
                expiresIn: '1h'
            }
            jwt.sign(payload, secret, options, (err, token) => {
                if (err) reject(err)
                resolve(token)
            })

        } catch (e) { reject(e) }
    })
}

export default SignInAccessToken