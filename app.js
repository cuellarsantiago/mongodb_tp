const express = require("express");

const app = express();

const routerLibros = require("./routes/rutas")

const errorHandler = require("./middleware/errorHandler")

app.use(express.json());

app.use("/libros",routerLibros)

app.use(errorHandler)


app.listen(3000,()=>{

    console.log("servidor initializado en el puerto 3000")

})

