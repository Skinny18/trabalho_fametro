const express = require('express')
const cors = require('cors')
const app = express()

//import Routes
const DenunciaRoutes = require('./routes/DenunciaRoutes')
const UserRoutes = require('./routes/UserRoutes')

//Config Json response
app.use(express.json())

//Solve cors
app.use(cors({
     credentials: true,
     origin:'http://localhost:3000'
}))

//Routes
app.use('/', DenunciaRoutes)
app.use('/user', UserRoutes)

app.listen(5000, () => {
    console.log('Servidor rodando')
})