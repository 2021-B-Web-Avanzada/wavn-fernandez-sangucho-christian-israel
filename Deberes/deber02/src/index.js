const express = require('express');
const app = express();
const morgan = require('morgan');
//settings
app.set('port',process.env.PORT ||3000);
app.set('json spaces', 2);

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
app.use('/api/aereolineas',require('./routes/aereolinea.js'));
app.use('/api/aereopuertos',require('./routes/aereopuerto.js'));

//starting the server
app.listen(app.get('port'),()=> {
    console.log(`Server on port ${3000}`);

});