const User = require("../models/user")
const { jwt, encrypt } = require("../helpers")
const createuser = async(body) => {
    const { first_name, last_name, password, email } = body;

    try {
        // const { error } = createUserValidation(body);
        // if (error) return res.status(400).send(error.details[0].message);

        const result = await User.findOne({ email });
        if (result) {
            return {
                status: false,
                message: "user already exists"
            };
        }

        const user = new User({
            first_name,
            last_name,
            password: password ? encrypt.hashPassword(password) : undefined,
            email,
        });

        if (user) {
            const token = jwt.generateToken({
                id: user.id,
                first_name,
                last_name
            });

            user.save();

            const response = {
                user,
                token,
            };

            return {
                status: true,
                message: "User created",
                data: response
            };
        }
        return {
            status: false,
            message: "An error occurred trying to add a new user",
            error: error.message
        };
    } catch (error) {
        return {
            status: false,
            message: "An error occurred trying to add a new user",
            error: error.message
        };
    }
}

const signin = async(body) => {
    const { email, password } = body;
    try {
        //const { error } = signinUserValidation(req.body);
        //if (error) return res.status(400).send(error.details[0].message);

        const checkEmail = await User.findOne({ email });
        if (!checkEmail) {
            return {
                status: false,
                message: "User Not Exist"
            };
        }
        const verifyPassword = encrypt.comparePassword(checkEmail["password"], password)

        if (!verifyPassword) {
            return {
                status: false,
                message: "Authorization failed"
            };
        }

        const token = jwt.generateToken({
            userId: checkEmail["id"],
            first_name: checkEmail["first_name"],
            last_name: checkEmail["last_name"],
        });

        const data = {
            userId: checkEmail["id"],
            name: checkEmail["first_name"] + " " +
                checkEmail["last_name"],
            email: checkEmail["email"],
            token,
        };
        return {
            status: true,
            message: "Logged in succesfully",
            data
        };
    } catch (error) {
        return {
            status: false,
            message: "An error occurred trying to add a new user",
            error: error.message
        };
    }
}

module.exports = {
    createuser,
    signin
}