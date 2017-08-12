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
var butt=document.getElementById("counter");
butt.onclick=function(){
    var request=new XMLhttpRequest();
    request.open('GET',"coolvinaykumar2929.imad.hasura-app.io/counter",true);
    request.onreadyStatechange=function(){
        if(request.readyState===XMLhttpRequest.DONE){
            if(request.status===200){
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    };
    request.send(null);
};