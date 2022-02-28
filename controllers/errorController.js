const AppError = require("../appError");

const handleCastErrorDB = error => {
    console.log('we got');
    const message = `Invalid ${error.path}: ${error.value}`
    return new AppError(message, 400);
};

const handleDuplicateFieldsDB = error => {
    const value = error.errormsg.match(/(["'])(\\?.)*?\1/)[0];
    const message = `Duplicate field value: ${value}. Please use a different value!`;
    return new AppError(message, 400);
};

const sendErrorDev = (error, res) => {
    res.status(error.statusCode).json({
        status: error.status,
        error: error,
        message: error.message,
        stack: error.stack
    });
};

const sendErrorProd = (error, res) => {
    if (error.isOperational) {
    res.status(error.statusCode).json({
        status: error.status,
        message: error.message
    });
    } else {
        console.error('ERROR', error);
        res.status(500).json({
            status: 'error',
            message: 'Something went wrong!'
        })
    }
}
const handleValidationErrorDB = error => {
    const errors = Object.values(error.errors).map(el => el.message);

    const message = `Invalid input data. ${errors.join('. ')}`;
    return new AppError(message, 400);
}

module.exports = ((error, req, res, next) => {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || 'error';

    if (process.env.NODE_ENV === 'development') {
       sendErrorDev(error, res);
    } else if (process.env.NODE_ENV === 'production') {
        if (error.name === 'CastError') error = handleCastErrorDB(error);
        if (error.code === 11000) error = handleDuplicateFieldsDB(error);
        if (error.name === 'ValidationError')   error = handleValidationErrorDB(error);
       sendErrorProd(error, res);
    }
});