var express = require('express');//crreate web server
var morgan = require('morgan');//output logs of server
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles={ 
    "article-one":{
    title:"Article One | Vinay Kumar",
    heading:"Article One",
    date:"Aug 6 2017",
    content:`<p>
                War is a terrible evil. It refers to an armed battle between nations. War causes big sufferings to the family members of the people who die during the war.
            </p>
             <p>
            War is a terrible evil. It refers to an armed battle between nations. War causes big sufferings to the family members of the people who die during the war.
            </p>`
    },
    "article-two":{
         title:"Article Two | Vinay Kumar",
    heading:"Article Two",
    date:"Aug 6 2017",
    content:`<p>
                War is a terrible evil. It refers to an armed battle between nations. War causes big sufferings to the family members of the people who die during the war.
            </p>
             <p>
            War is a terrible evil. It refers to an armed battle between nations. War causes big sufferings to the family members of the people who die during the war.
            </p>`
    },
    "article-three":{
         title:"Article Three | Vinay Kumar",
    heading:"Article Three",
    date:"Aug 6 2017",
    content:`<p>
                War is a terrible evil. It refers to an armed battle between nations. War causes big sufferings to the family members of the people who die during the war.
            </p>
             <p>
            War is a terrible evil. It refers to an armed battle between nations. War causes big sufferings to the family members of the people who die during the war.
            </p>`
    }
};

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmlTemplate=
    `<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" width="device-width,initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="/ui/style.css">
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <br color="red">
        <h3>${heading}</h3>
        <div>${date}</div>
        <div>
            ${content}
        </div>
        </div>
    </body>
</html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    var articleN=res.params.articleName;
    res.send(createTemplate(articles[articleN] ));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
