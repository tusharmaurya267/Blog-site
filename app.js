const express = require("express");

const app = express();

// listen request
app.listen(3000);

// use ejs
app.set('view engine' , 'ejs');

// static middleware
app.use(express.static('public'));

// blogs route
app.get('/' , (req,res) => {
    res.render('index' , {title : 'Home' })
});
app.get('/about',(req,res) => {
    res.render('about' , {title : 'About us'})
});
app.get('/blogs/create' ,(req,res) =>{
    res.render('create' , {title : 'create a new Blog'})
});
app.use('/404',(res,req) => {
    res.render('404', {title : '404'})
})