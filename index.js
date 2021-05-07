let express = require('express');
let app = express();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

io.on("connection", socket => {

    socket.on('disconnect', () => {
        console.log('X desconectou: ' + socket.id)
    })

    socket.on('msg', data => {
        console.log(data);

        io.emit('showmsg', data)
    })

})


app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index')
})


http.listen(8090, () => {
    console.log('App rodando')
})