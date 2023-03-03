//Clase 24/02

/*
    Crear una rama -> git checkout -b 'l05'
    Crear un nuevo paquete -> npm 
    Inicializar en una carpeta npm init 0.0.0 https...
*/

var cool = require("cool-ascii-faces");
var express = require("express");
//var port = 12345;
var port = process.env.PORT || 12345;
var app = express();

app.get("/faces", (request,response) => {
    response.send(cool());
    console.log("New request");
});

app.listen(port,() =>{
    console.log(`Server ready in port ${port}`);
});

// console.log(cool()); COMENTADO

/*
    Si borramos node_modules con rm -rf node_modules
    Tenemos que volver a instalar con npm install
    Y después npm start
*/

//gcloud init

/*
    Los cambios que he realizado para Google Cloud son, crear un archivo llamado
    app.yaml en el que ponga runtime: nodejs18, 18 porque es la versión de node que tenemos.
    Y no podemos usar cualquier puerto, google nos dice el puerto con una variable ENTORN.
    Se accede con un objeto predefinido llamado process que tiene una propiedad llamada env
    que tiene todas las variables de entorno.

*/