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
var button=document.getElementById("counter");
var counter=0;
button.onClick=function(){
    counter=counter+1;
    var span=document.getElementById("count");
    span.innerHTL=counter.toString();
};