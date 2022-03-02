const req = require("express/lib/request");
const res = require("express/lib/response");
const AppError = require('./../appError');

exports.getAllUsers = async(req, res, next) => {
    try {
        const users = await User.find();
    res.status(200).json({
        status: 'success',
        results: user.length,
        data: {
            users
        }
    });
    } catch (error) {
    next(error);
    }
    // res.status(500).json({
    //     status: 'error',
    //     message: 'Undefined route'
    // });
};

exports.checkID = (req, res, next, val) => {
    if (req.params.id * 1 > 50) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    next();
};

exports.getUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'Undefined route'
    });
};

exports.createUser = async(req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
             user: newUser
            }
        })
        } catch (error) {
            next(error);
        };
    // res.status(500).json({
    //     status: 'error',
    //     message: 'Undefined route'
    // });
};


exports.updateUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'Undefined route'
    });
};

exports.deleteUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'Undefined route'
    });
};  