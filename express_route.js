/*jshint esversion: 6 */


const port = 3000
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

//app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');


app.set('view engine', 'jade');

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/form',function(req,res){
    res.sendFile(path.join(__dirname+'/forming.html'));
    //__dirname : It will resolve to your project folder.
  });

  // Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({
    limit : '50mb', ///////// LIMIT for URL ENCODE (image data)
    extended : true
  }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.post('/form', function (req, res) {
    res.send('Got a POST request');    
    // console.log(req.body);
    // console.log(req.body.value);
    for(var myKey in req.body.value) {
        console.log("key:"+myKey+", value:"+req.body.value[myKey]);
     }
   // console.log(req.body.value['name']);
   // console.log(req.body.value('email'));
   // console.log(req.body.value('topics'));
});

app.put('/form1', function (req, res) {
    res.send('Got a PUT request at /user');
  });

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
});

  
router.get("/about", (req, res) => {
    //res.render("about", { title: "Hey", message: "Hello there!" });
    res.send("<html><body>Jopa</body></html>");
    // res.
  });

// router.get('/about',function(req,res){
//   res.sendFile(path.join(__dirname+'/about.html'));
// });

router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/sitemap.html'));
});

//add the router
app.use('/', router);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

console.log('Running at Port 3000');