// const http =  require("http")

// const server = http.createServer((req,res)=>{
//     // res.setHeader('Content-Type','text/html')
//     // res.write("<h1>Hola node.js http</h1>")
// // user = {
// //     use:"Josue",
// //     email:"josue.salazar@epn.edu.ec"
// // }
// res.end()
// })
// server.listen(3000)
// console.log("Servidor OK");
const  express = require("express")
const{engine} = require("Express-handlebars")

const app = express()
app.engine('.hbs',engine({
    extname: '.hbs'
}))
app.set('view engine',".hbs")
app.set('views','./src/views')

app.get('/', (req, res) => {
    res.render('home');
});










// app.get("/isAlive",(req,res)=>{
//     res.sendStatus(200).send("Servido OK")
// }) 


// app.get('/',(req,res)=>{
//     res.sendFile ('./descarga.jpg',{
//         root:__dirname
//     })
// })
// console.log(__dirname);
// app.post('/',(req,res)=>{
//     res.send("enviar datos al servidor")
// })
// app.put('/',(req,res)=>{
//     res.send("actualizar toda la infromación")
// })
// app.patch('/',(req,res)=>{
//     res.send("actualizar solo una porción de la infromación")
// })
// app.delete('/',(req,res)=>{
//     res.send("Eliminar algún recurso del servidor")
// })
// // Manejo de una ruta que no sea encontrada
// app.use((req,res)=>{
//     res.status(404).send("Página no encontrada - 404")
// })
app.listen(3000)
console.log('Servidor ejecutandose en el puerto 3000');