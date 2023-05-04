const express = require('express');
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/index.js');
require('dotenv').config();



//creacion app
const app = express();

// Middleware para procesar datos de la solicitud POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Midelware para permitir el acceso a la API desde cualquier origen
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


//Puerto
const port = process.env.PORT || 3000;

///////////////////////////////////
//Rutas                         //
app.use(customerRoutes);
/////////////////////////////////



//Iniciar servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
