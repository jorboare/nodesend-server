const express = require('express')
const conectarDB = require('./config/db')

//Crear servidor
const app = express()

//Conectar base de datos
conectarDB()

//puerto de la app
const port = process.env.PORT || 4000;

//Arrancar la app

app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})

