
const http = require('http')

const data = require("./utils/data.js")

const CHARACTER="/rick_and_morty/character/"
const URL = 'localhost'
const PORT = 3001

http.createServer( (req, res) =>{
    //acceso cualqueir origen
    res.setHeader('Access-Control-Allow-Origin', '*');

    console.log(`Server Activo en ... ${PORT}`)

    const { url } = req
    if (url.includes(CHARACTER)) {
        //                                                 rick_and_morty character 15
        //extraigo el id 
        //el la url es /ryck_and_morty/character/id split por / y tomo el elemento 3
        console.log(url)
        const character = data.find((char) => char.id ===  Number(url.split('/')[3]))
        console.log(character)
        if (!character) {
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.end("Personaje no encontrado");
        } else {
            console.log(character[0])
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(character));
        }
        return
    }
}).listen(PORT, URL); 