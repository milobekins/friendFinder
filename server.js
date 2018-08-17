var express = require("express");
/* var multer = require("multer"); */
var bodyParser = require("body-parser");


var app = express();
var port = 80;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


/* app.use('/', express.static(__dirname + '/public')); 
 */
/* const multerConfig = {
    
    storage: multer.diskStorage({
     //Setup where the user's file will go
     destination: function(req, file, next){
       next(null, './public/photo-storage');
       },   
        
        //Then give the file a unique name
        filename: function(req, file, next){
            console.log(file);
            const ext = file.mimetype.split('/')[1];
            next(null, file.fieldname + '-' + Date.now() + '.'+ext);
          }
        }),   
        
        //A means of ensuring only images are uploaded. 
        fileFilter: function(req, file, next){
              if(!file){
                next();
              }
            const image = file.mimetype.startsWith('image/');
            if(image){
              console.log('photo uploaded');
              next(null, true);
            }else{
              console.log("file not supported");
              
              //TODO:  A better message response to user on failure.
              return next();
            }
        }
      };
 */
/* app.post('/upload',multer(multerConfig).single('photo'),function(req,res){
   res.send('Complete!');
}); */


require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);



app.listen(port,function(){
    console.log(`Server listening on port ${port}`);
});