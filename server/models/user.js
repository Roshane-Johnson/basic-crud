const mongoose = require('mongoose')
const Schema = mongoose.Schema

const requiredMessage = ' is a required field!'

const UserSchema = new Schema(
	{
		firstName: {
			type: String,
			min: 3,
			max: 50,
			required: [true, 'First Name' + requiredMessage],
		},
		lastName: {
			min: 3,
			max: 60,
			type: String,
			required: [true, 'Last Name' + requiredMessage],
		},
		email: {
			type: String,
			unique: 'This email is already being used',
			required: [true, 'Email' + requiredMessage],
			validate: {
				validator: (value) =>
					/^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
						value
					),
				message: 'This is not a valid email',
			},
		},
		age: {
			type: Number,
			required: [true, 'Age' + requiredMessage],
		},
		isActive: {
			type: Boolean,
			default: true,
		},
		jobPosition: {
			type: String,
			enum: ['Intern', 'Senior', 'Executive', 'CEO', 'Founder'],
			default: 'Intern',
			required: [true, 'Job Position' + requiredMessage],
		},
	},
	{
		timestamps: true,
		collection: 'users',
	}
)

module.exports = mongoose.model('User', UserSchema)
