const path = require('path');
const os = require('os');
const hbs = require("hbs");
const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     const date = new Date();
//     const hour = date.getHours();
//     const minutes = date.getMinutes();
//     const seconds = date.getSeconds();
//     const data = `${hour}:${minutes}:${seconds} ${req.method} ${req.url} ${req.get('user-agent')}`;
//     fs.appendFile('./server.txt', data + '\n', err => {
//         if(err) throw err;
//         console.log('saved');
//     })
//     next();
// });

const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.get('', (req, res) => {
    res.render('index', {
        user: os.userInfo().username,
    })
});

app.listen(3000);