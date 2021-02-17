// const express = require("express")
// const app = express()
// const path = require('path')
// const fs = require('fs')
// const { json } = require("express")




// //to use ejs .agar dastor render gerefi
// //view ha ro az inja read kon. agar dastor render gerfti
// app.set('views', path.join(__dirname, 'views'))
// //to stay what is my template engine
// app.set('view engine', 'ejs')
// //now we can send ejs pages to client


// // app.get('/',(req,res)=>{
// //     res.sendFile(path.join(__dirname,"views/index.html"))
// // })

// // use ejs

// app.get('/ejs', (req, res) => {
//     fs.readFile(path.join(__dirname,'public/data.json'),"utf8", function(err,data){

//         if(err) return res.status(400).send("something went wrong")

//     // res.render('index.ejs', { firstname: "dosh", lastname: "nosh", skills:['js','html','css','js','html','css','js','html','css'] })
//     res.render('index.ejs',JSON.parse(data))
//     })
// })




// app.listen(5005)
