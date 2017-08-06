console.log('Loaded!');
var element=document.getElementById("main-txt");
element.innerHTML="New Value";

var img=document.getElementById("draga");
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+30;
    img.style.marginLeft=marginLeft+"px";
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
};