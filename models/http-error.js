class HttpError extends Error {
    constructor(message, errorCode) {
        super(message); // add a "message" property ---> Error
        this.code = errorCode; // adds a "code" property to this class
    }
}

module.exports = HttpError;