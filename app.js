const path = require('path');
const express = require('express');
const app = express();

//  para ver un Jason con los datos que se envían a una página
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

// informo que la carpeta public va a ser estatica (público)
//app.use(express.static('public'));
publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath));

// Levantando el servidor para que escuche en el puerto 3000
// app.listen(3000, ()=>{
//     console.log('Servidor funcionando en puerto 3000');
// });
app.listen(process.env.PORT || 3000, function(){
    console.log('Servidor funcionando en puerto 3000');
})

// enviado una pagina HTML con la ruta de Root. (http://localhost:3000)
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

//  para ver un Jason con los datos que se envían por post a la pagina root (bodyParser)
 app.post("/", function(req, res){
     res.send(req.body);  // el body tiene todas las variables que le mandamos

    });