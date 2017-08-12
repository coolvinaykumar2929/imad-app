/*
console.log('Loaded!');
var element=document.getElementById("main-txt");
element.innerHTML="New Value";

var img=document.getElementById("draga");
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+"px";
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
};
*/
var button=document.getElementById('counter');
button.onclick=function(){
    var request=new XMLhttpRequest();
    
    request.onreadyStatechange=function(){
        if(request.readyState===XMLhttpRequest.DONE){
            if(request.status===200){
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
            else{
                span.innerHTML="-1";
            }
        }
    };
    request.open('GET','http://coolvinaykumar2929.imad.hasura-app.io/counter',true);
    request.send(null);
};


var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    
    var names=['name1','name2','name3','name4'];
    var list='';
    for(var i=0;i<names.length;i++){
        list=list+'<li>'+names[i]+'</li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
};

var names[];
app.get('/submit-name/:name',function(req,res){
   var name=req.params.name;
   names.push(name);
   //JSON
   res.send(JSON.stringify(names));
});







