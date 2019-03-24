const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()


app.set('view engine','hbs')
app.set('views',path.join(__dirname,'../views'))
hbs.registerPartials(path.join(__dirname,'../views/partials'))
app.use(express.static('public'))


app.get('',(req, res)=>{
    res.render('home.hbs',{
        title:'Home'
    })
})

app.get('/about',(req, res)=>{
    res.render('about.hbs',{
        title:'About'
    })
})

app.get('/help',(req, res)=>{
    res.render('help.hbs',{
        title:'Help'
    })
})

const weatherControl = require('./controllers/weathercontrol')
app.get('/weather',weatherControl)

//404 page
app.get('*',(req,res)=>{
    res.render('404.hbs',{
        title:'404 Page'
    })
})

const port = process.env.PORT || 4000
app.listen(port,()=>{
    console.log(`Listening on ${port}`)
})