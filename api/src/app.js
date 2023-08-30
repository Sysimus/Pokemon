const express =  require("express");
const morgan = require("morgan");
const mainRouter = require("./routes/mainRouter")

const app = express();

app.use(morgan('dev'));

app.use(mainRouter)

app.use((req, res, next) => {
    console.log('Hola estoy pasando por el middleware');
    next();
});

app.get('/', (req, res) => {
    res.status(200).send('Llegue al endpoint');
});

module.exports = app;