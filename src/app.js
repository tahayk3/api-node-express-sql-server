import express from 'express'
import productRoutes from './routes/products.routes.js'

//creando servidor
const app = express()

//rutas
app.use(productRoutes)

export default app