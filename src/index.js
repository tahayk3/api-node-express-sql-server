import app from './app.js'

import {getConnection} from './database/connection.js'

getConnection()

app.listen(4000)
console.log("Servidor iniciado")