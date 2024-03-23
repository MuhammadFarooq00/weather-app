const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const path = require("path");
const hbs = require("hbs");
const templatepath = path.join(__dirname, "../src/template/views");
const staticpath = path.join(__dirname,"../public");
const partialspath = path.join(__dirname, "../src/template/partials");

// console.log(staticpath);
hbs.registerPartials(partialspath);
app.set("view engine", "hbs");
app.set("views",templatepath);
app.use(express.static(staticpath));

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/weather', (req, res) => {
    res.render('weather')
})

app.get('*', (req, res) => {
    res.render('404')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))