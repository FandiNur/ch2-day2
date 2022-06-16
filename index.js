const { request, response } = require('express');
const express = require('express');

const app = express()
const port = 8000

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})



// set view engine
app.set('view engine', 'hbs') 

//directory(penyimpanan berupah css/img)
app.use('/assets', express.static(__dirname + '/assets')) 

// navbar
app.get('/', (request, response) => {
  response.render('index'); 
})
app.get('/contact', (request, response) =>{
  response.render("contact"); 
})
app.get('/project', (request, response) =>{
  response.render("project"); 

})
app.get('/blog-detail', (request, response) =>{
  response.render("blog-detail",{
    blog :{
      name: 'Ichsan Emrald Alamsyah',
      time : '12 Jul 2021 22:30 WIB',
      title :'Pasar Coding di Indonesia Dinilai Masih Menjanjikan',
      content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, assumenda, odit laboriosam quam officia sed mollitia iste nisi deserunt earum error sunt obcaecati repudiandae voluptatibus cum saepe inventore fugiat nulla.'

    }
  }); 

})
app.get('/tes', (request, response) =>{
  response.send("Hello user!"); 
})

