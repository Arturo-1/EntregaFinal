import dotenv from 'dotenv'

dotenv.config()

export default {
    api:{
        tiemposession: Number(process.env.TIEMPO_EXPIRACION || 600000),
		apisecret: process.env.API_SECRET || 'coderhouse'
    },
	database:{
        //dbUrl: process.env.DB_URL || 'mongodb://localhost:27017/coderhouse'
        dbUrl: process.env.DB_URL || 'mongodb+srv://arturo:arturo10@cluster0.soepf.mongodb.net/?retryWrites=true&w=majority'
    }
}
