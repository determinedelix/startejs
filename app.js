const express = require("express")
const { fstat } = require("fs")
const app = express()
const path = require('path')
const fs  = require('fs')

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


//////////////////////
// app.get('/user/:id/:page',(req,res)=>{
//     console.log(req.params);
//     res.send(req.params.id)
// })
////////////////////////
app.get('/user/:id/',(req,res)=>{
    // console.log(req.params);
    // res.send(req.params.id)
    fs.readFile(path.join(__dirname,"public/users.json"),'utf8',(err,data)=>{
        if(err) return res.status(404).send("something went wrong")
    //elemani ro find mikonim ke id oon barabar req.params.id
    data = JSON.parse(data)
    // console.log(req.params);
    // console.log(data);

    user = data.find(x => x.id ==req.params.id)
    // agar user naabod
    if(!user) return res.status(404).send("user not found")

    console.log(user);

    res.render('pages/home',data)
})
})



app.listen(5005)
