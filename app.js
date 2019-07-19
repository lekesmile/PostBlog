const express = require ('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const _ = require('lodash');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'));
app.set('view engine', 'ejs');

const posts = [];   //post array


const hommi = 'Home ipsum dolor sit amet consectetur, adipisicing elit. Nihil magnam nam optio vero minus veniam mollitia ab beatae sunt molestias dicta reiciendis, animi eum vel! Quia, explicabo accusamus. Veritatis ipsa facere rerum dolore mollitia, soluta provident fugit doloribus vel ratione obcaecati culpa. Quis dignissimos autem expedita est neque omnis, consectetur alias molestias ab iusto iste. Ex id maiores ut laborum modi? Excepturi accusantium dolore impedit sequi ullam optio omnis dolor. Commodi repellendus, dolorem vitae dolorum, nihil molestiae dicta quasi mollitia eum hic explicabo quis dolor. Consectetur, totam odio? Aut at nostrum maxime accusamus commodi expedita qui autem obcaecati dolores eaque.';
const abooo = 'About ipsum dolor sit amet consectetur, adipisicing elit. Nihil magnam nam optio vero minus veniam mollitia ab beatae sunt molestias dicta reiciendis, animi eum vel! Quia, explicabo accusamus. Veritatis ipsa facere rerum dolore mollitia, soluta provident fugit doloribus vel ratione obcaecati culpa. Quis dignissimos autem expedita est neque omnis, consectetur alias molestias ab iusto iste. Ex id maiores ut laborum modi? Excepturi accusantium dolore impedit sequi ullam optio omnis dolor. Commodi repellendus, dolorem vitae dolorum, nihil molestiae dicta quasi mollitia eum hic explicabo quis dolor. Consectetur, totam odio? Aut at nostrum maxime accusamus commodi expedita qui autem obcaecati dolores eaque.';
const abooo2 = 'More about us. This tutorial is for beginners who wanted to start with Node.js. We will be creating a simple website with Node.js and the Express framework and will be using EJS view engine to manage our HTML code.Veritatis ipsa facere rerum dolore mollitia, soluta provident fugit doloribus vel ratione obcaecati culpa.';
const connn = 'Contact ipsum dolor sit amet consectetur, adipisicing elit. Nihil magnam nam optio vero minus veniam mollitia ab beatae sunt molestias dicta reiciendis, animi eum vel! Quia, explicabo accusamus. Veritatis ipsa facere rerum dolore mollitia, soluta provident fugit doloribus vel ratione obcaecati culpa. Quis dignissimos autem expedita est neque omnis, consectetur alias molestias ab iusto iste. Ex id maiores ut laborum modi? Excepturi accusantium dolore impedit sequi ullam optio omnis dolor. Commodi repellendus, dolorem vitae dolorum, nihil molestiae dicta quasi mollitia eum hic explicabo quis dolor. Consectetur, totam odio? Aut at nostrum maxime accusamus commodi expedita qui autem obcaecati dolores eaque.';

// Home route

app.get('/', (req, res) =>{
    res.render('home', { hommi: hommi, posts: posts });
});



// About route

app.get('/about', (req, res) => {
    res.render('about', {abooo:abooo, abooo2:abooo2});
});


// Contact route

app.get('/contact', (req, res) => {
    res.render('contact', {connn:connn});
});

// Compose route
 app.get('/compose', (req, res) =>{
    res.render('compose');
 });

//compose post route
 app.post('/compose', (req,res)=>{
  const post = {
      title: req.body.postTitle,
      text: req.body.postTest
  };
  console.log(post);
  posts.push(post);
  res.redirect('/');
 });

 app.get('/post/:postName', (req, res)=>{
     const request = _.lowerCase(req.params.postName);

     posts.forEach((post) =>{
         const storeTitle = _.lowerCase(post.title);
        if (request === storeTitle) {
            res.render('post', {
                title: post.title,
                content:post.text
            });
        } 
     });
 });

const port = process.env.PORT || 3000;
app.listen(port, (req, res) =>{
    console.log(`server is running on ${port}`);
})
