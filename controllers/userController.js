const req = require("express/lib/request");
const res = require("express/lib/response");

exports.getAllUsers = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'Undefined route'
    });
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

exports.createUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'Undefined route'
    });
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