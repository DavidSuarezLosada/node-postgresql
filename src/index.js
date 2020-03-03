const express = require('express')
const morgan = require('morgan');
const app = express();



// configuraciones
app.set('port', process.env.PORT || 3000); //En caso de que exista un puerto definido por la nube o el servicio que lo tome, de lo contrario el 3000
app.set('json spaces',2); // Para que el json se vea formateado

// moddlewares
app.use(morgan('dev')); //mostrar en consola las peticiones
app.use(express.urlencoded({extended:false})); //entender datos que llegan de formularios sencillos, textos etc
app.use(express.json()); //entender json

// routes
app.use(require('./routes/index'));

// database
//app.use(require('./database/index'));

// iniciar servidor en puerto 3000
app.listen(app.get('port'), () => { 
    console.log(`server on port ${app.get('port')}`);
});

