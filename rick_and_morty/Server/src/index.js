
const http = require('http')

const data = require("./util/data.js")

const URL = 'localhost'
const PORT = 3001

http.createServer(function (req, res) {
    //acceso cualqueir origen
    console.log(`Server Activo en ${PORT}`)

    res.setHeader('Access-Control-Allow-Origin', '*');


    const { url } = req
    if (url.includes("/rick_and_morty/character/")) {
        //
        //extraigo el id 
        const urlId = Number(url.split('/')[3])
        const character = data.filter((char) => char.id === urlId)
        if (character.length===0) {
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.end("Personaje no encontrado");
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(character[0]));
        }
        return
    }
}).listen(PORT, URL); 