var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.use(bodyParser.urlencoded( {extended:true } ) );
app.use(bodyParser.json());


var posts = [
    { title: "myfirst post", content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo qui eaque sed praesentium voluptas consectetur. Beatae at voluptate laboriosam rerum expedita? Modi voluptates sed optio accusantium obcaecati perferendis soluta quisquam deleniti quia sint facere aperiam eum consequuntur tempore, qui quaerat architecto a magnam sapiente facilis consectetur labore neque, suscipit corrupti"},
    { title: "my 2 post", content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo qui eaque sed praesentium voluptas consectetur. Beatae at voluptate laboriosam rerum expedita? Modi voluptates sed optio accusantium obcaecati perferendis soluta quisquam deleniti quia sint facere aperiam eum consequuntur tempore, qui quaerat architecto a magnam sapiente facilis consectetur labore neque, suscipit corrupti"},
    { title: "my 3 post", content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo qui eaque sed praesentium voluptas consectetur. Beatae at voluptate laboriosam rerum expedita? Modi voluptates sed optio accusantium obcaecati perferendis soluta quisquam deleniti quia sint facere aperiam eum consequuntur tempore, qui quaerat architecto a magnam sapiente facilis consectetur labore neque, suscipit corrupti"}
];



app.get ( "/", function ( req, res) {  
       res.render('index.ejs', { posts: posts }  );
} );

app.get ("/post/:id", function(req, res ) {
     var id = req.params.id;
     res.render('post.ejs', {post: posts[id-1]});

} );

app.get ( "/write", function(req, res )  {
     res.render ( 'write.ejs' );

});

app.post ('/write', function(req, res) {
      var title= req.body.title,
      content = req.body.content

      posts.push( {title:title,content:content} );
      
      res.redirect('/');
});


app.listen(3000, function(){
    console.log('Work on 3000 port idiot');
});