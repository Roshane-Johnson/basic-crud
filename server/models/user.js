const mongoose = require('mongoose')
const Schema = mongoose.Schema

const requiredMessage = ' is a required field!'

const UserSchema = new Schema(
	{
		firstName: {
			type: String,
			required: 'First Name' + requiredMessage,
		},
		lastName: {
			type: String,
			required: 'Last Name' + requiredMessage,
		},
		email: {
			type: String,
			unique: 'This email is already being used',
			required: [true, 'Email' + requiredMessage],
		},
		age: {
			type: Number,
			required: [true, 'Age' + requiredMessage],
		},
		isEmployed: {
			type: Boolean,
			default: false,
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
