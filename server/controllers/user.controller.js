const User = require('../models/user')
const { SuccessResponse, ErrorResponse } = require('../lib/helpers')

/**
 * Display a listing of the resource.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
exports.index = async (req, res, next) => {
	let users
	try {
		users = await User.find({})
		return SuccessResponse(req, res, users)
	} catch (error) {
		return ErrorResponse(req, res, error)
	}
}

/**
 * Create a new resource in storage.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
exports.create = async (req, res, next) => {
	let createdResource

	try {
		createdResource = await User.create(req.body)
		SuccessResponse(req, res, createdResource)
	} catch (error) {
		ErrorResponse(req, res, error?.message ?? error)
	}
}

/**
 * Display the specified resource.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
exports.read = async (req, res, next) => {
	const id = req.params.id
	let user

	try {
		user = await User.find({ _id: id })
		SuccessResponse(req, res, user)
	} catch (error) {
		ErrorResponse(req, res, error)
	}
}

/**
 * Update the specified resource in storage.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
exports.update = async (req, res, next) => {
	const id = req.params.id
	let user

	try {
		user = await User.findByIdAndUpdate(id, req.body, { new: true })
		SuccessResponse(req, res, user)
	} catch (error) {
		ErrorResponse(req, res, error)
	}
}

/**
 * Remove the specified resource from storage.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
exports.destroy = async (req, res, next) => {
	const id = req.params.id
	let user

	try {
		user = await User.findOne({ _id: id })
		if (user) {
			let isDeleted

			try {
				isDeleted = await User.deleteOne({ _id: id })
				SuccessResponse(req, res, user, 'user deleted')
			} catch (error) {
				ErrorResponse(req, res, error)
			}
		} else {
			SuccessResponse(req, res, null, 'User not found!', 404)
		}
	} catch (error) {
		ErrorResponse(req, res, error)
	}
}
