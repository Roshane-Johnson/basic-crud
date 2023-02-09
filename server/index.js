require('dotenv/config')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 3000
const NAME = process.env.NAME || 'basic_crud'
const isProduction = process.env.NODE_ENV == 'production'

/* Middlewares */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors([isProduction ? process.env.FRONTEND_URL : '*']))

/* Routers */
const indexRouter = require('./routes/index.routes')
const userRouter = require('./routes/user.routes')

app.use('/', indexRouter)
app.use('/users', userRouter)

/* Start Express App */
mongoose.set('strictQuery', true)
mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		app.listen(PORT, async () => {
			console.log(`${NAME} is running at http://localhost:${PORT}`)
		})
	})
	.catch((err) => {
		console.log('[!] Failed to connect MongoDB')
		!isProduction ? console.log(err) : undefined
	})
