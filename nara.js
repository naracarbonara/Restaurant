var button=document.getElementById("dropwn")
var buttonLoc=document.getElementById("droploc")
var buttonEve=document.getElementById("dropeve")
var contents=document.getElementsByClassName("dropdown-content")

button.onclick=function(){
    
    //  button.innerHTML="<a>MENUS <i class='fa fa-angle-up' aria-hidden='true'></i></a>"
     
    if(contents[0].style.display=="block"){
        contents[0].style.display="none"
   
    }else
    {
    contents[0].style.display="block"}
    
     }

     buttonEve.onclick=function(){
    
        //  button.innerHTML="<a>MENUS <i class='fa fa-angle-up' aria-hidden='true'></i></a>"
         
        if(contents[1].style.display=="block"){
            contents[1].style.display="none"
        }else
        {
        contents[1].style.display="block"}
         
    }

buttonLoc.onclick=function(){
    
    //  button.innerHTML="<a>MENUS <i class='fa fa-angle-up' aria-hidden='true'></i></a>"
     
    if(contents[2].style.display=="block"){
        contents[2].style.display="none"
    }else
    {
    contents[2].style.display="block"}
     
}








let m=document.getElementById("popup")
function add(e){
    
    let add=e.target;
    //let cart=document.getElementById("popup")
    let title=add.parentElement.parentElement.innerText;
    var mainCart=document.getElementById("menu").firstElementChild.firstElementChild
    var mainCartText=document.getElementById("menu").firstElementChild.firstElementChild.innerText;
    mainCartText=Number(mainCartText)+1;
    console.log(mainCartText);
    mainCart.innerText=mainCartText;
    var heading=document.createElement("h6")
    heading.innerText=title;
    m.appendChild(heading);
   
    
}

var mainIcon=document.getElementById("mainCartIcon");
    mainIcon.onclick=function(){
        //let cart=document.getElementById("popup");
        m.style.display="block";
    
    }

    

m.firstElementChild.firstElementChild.onclick=function(){
    m.style.display="none";
  
}


function clearCart(){
    var mainCart=document.getElementById("menu").firstElementChild.firstElementChild
    var mainCartText=document.getElementById("menu").firstElementChild.firstElementChild.innerText;
    mainCartText=0;
    mainCart.innerText=mainCartText;

    
    m.style.display="none";
    m.innerHTML="<a> <i class='fa fa-times' aria-hidden='true'></i></a><span id='res' onclick='clearCart()'>Order!</span>"
}



