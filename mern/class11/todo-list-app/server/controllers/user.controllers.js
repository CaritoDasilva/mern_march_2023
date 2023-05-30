const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.register = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.json({ user: newUser });

    } catch (error) {
        res.status(500).json({
            msg: "Error al crear usuario",
            error
        })
    }   
}

module.exports.login = async (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email })
        .then(user => {
            if (user === null) {
                return res.status(400).json({ msg: "Email no registrado" });
            } else {
                bcrypt.compare(password, user.password)
                    .then(isValid => {
                        if (isValid) {
                            const userToken = jwt.sign({
                                id: user._id
                            }, process.env.SECRET_KEY);

                            res
                                .cookie("usertoken", userToken, process.env.SECRET_KEY, {
                                    httpOnly: true
                                })
                                .json({ msg: "success!" })
                        } else {
                            res.status(403).json({ msg: "Contraseña incorrecta" })
                        }
                    })
            }
        }).catch(err => res.json({
            msg: "Error al iniciar sesión",
            err
        }));
}

module.exports.logout = async (req, res) => {
    try {
        await User.findOne({ email: req.body.email });
        res.clearCookie('usertoken')
        .json({ msg: 'Chau vuelve pronto' });

    } catch (error) {
        res.status(403).json({
            msg: "Error al cerrar sesión",
            error
        })
    }
}
