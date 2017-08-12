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