exports.welcome = (req, res) => {
	res.status(200).json({
		message: 'Hello, World!',
		version: 'v1.0',
		author: 'Roshane-Johnson',
	})
}
