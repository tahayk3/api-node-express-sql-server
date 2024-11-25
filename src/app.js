import express from 'express'
import productRoutes from './routes/products.routes.js'

//creando servidor
const app = express()

//manipular json
app.use(express.json())

//rutas
app.use(productRoutes)

export default app