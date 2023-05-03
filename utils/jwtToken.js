// Create and send token and save in the cookie.
const sendToken = (user, statusCode, res) => {

    // Create Jwt token
    const token = user.getJwtToken();

    // Options for cookie
    const options = {
        expiresIn: process.env.JWT_EXPIRES_TIME,
        httpOnly: true
    };

    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        token,
        user
    });
};

module.exports = sendToken;