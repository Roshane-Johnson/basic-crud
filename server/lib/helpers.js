require('dotenv/config')

/**
 *
 * @param {import('mongoose').MongoServerError} error
 */
function ExpressErrorHandler(error) {}

/**
 *
 * @param {import("express").Request} req Express app request parameter
 * @param {import("express").Response} res Express app response parameter
 * @param {Array} data Data to return as json to the endpoint
 * @param {String} message Message to return as json to the endpoint. Default: "success"
 * @param {Number} status HTTP Status Code to return to endpoint. Default: 200
 * @returns
 */
function SuccessResponse(req, res, data = [], message = 'success', status = 200) {
	return res.status(status).json({ success: true, status, message, data })
}

/**
 *
 * @param {import("express").Request} req Express app request parameter
 * @param {import("express").Response} res Express app response parameter
 * @param {String} message Message to return as json to the endpoint. Default: "error"
 * @param {Number} status HTTP Status Code to return to endpoint. Default: 500
 * @returns
 */
function ErrorResponse(req, res, message = 'error', status = 500) {
	return res.status(status).json({ success: false, status, message })
}

/**
 * Logs information if the application is in development mode
 * @param {any} message Information to output
 */
function DevLog(message = '') {
	const isProduction = process.env.NODE_ENV == 'production'

	if (isProduction === false) {
		console.log(message.toString())
	}
}

module.exports = { SuccessResponse, ErrorResponse, DevLog }
