const express = require("express")
const app = express()
const path = require('path')


//to use ejs .agar dastor render gerefi
//view ha ro az inja read kon. agar dastor render gerfti
app.set('views', path.join(__dirname, 'views'))
//to stay what is my template engine
app.set('view engine', 'ejs')
//now we can send ejs pages to client


// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,"views/index.html"))
// })

// use ejs
app.get('/ejs', (req, res) => {
    res.render('index.ejs', { firstname: "dosh", lastname: "nosh", skills:['js','html','css','js','html','css','js','html','css'] })

})

app.get('/home',(req,res)=>{
    res.render('pages/home',{
    user:{
        firstname:"jodi",
        lastname:"mir",
    }
})
})
app.get('/about',(req,res)=>{
    res.render('pages/about',{
        user:{
            firstname:"jodi",
            lastname:"mir"
        }
})
})


app.listen(5005)
