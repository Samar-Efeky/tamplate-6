// Nav-bar start /////////////////////////////////////////
var menu=document.getElementById("menu");
var navList=document.getElementById("nav-list");
menu.addEventListener("click",function(){
    var closed=document.getElementById("closed");
    closed.style.display="block";
    menu.style.display="none";
   
    navList.style.display="block";
    closeButton ();
});
function closeButton (){
    var closed=document.getElementById("closed");
    closed.addEventListener("click",function(){
        closed.style.display="none";
        menu.style.display="block";
        
        navList.style.display="none";
    })
}
// Nav-bar end //////////////////////////////////////////////