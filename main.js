pizzas["Blackpink pizza",
       "Minecraft pizza",
       "Coding pizza",
       "McDonalds Pizza",
       "Ice cream pizza",
       "Paneer Pizza",
       "Reading Pizza"];
  
function getmenu(){
    var hh;
    var pizzas_length=pizzas.length;
    var hh="<ol class='i_an'>";
    pizzas.sort();
    for (var o=0;o<pizzas_length;o++){
        hh=hh+"</li>"+pizzas[o]+"</li>"
    }
    hh=hh+"</ol>"
    document.getElementById("display_menu").innerHTML= hh;
    

}
function additem(){
    var strawberry;
    add=document.getElementById("additem").value;
    pizzas.push("add");
    strawberry="<section class='cards'>";
    for(var d=0;d<pizzas_length;d++){
        strawberry=strawberry+"<div class='card'>"+"<img src='pizzaImg.png'/>"+pizzas[d]+"</div>"
    }
    strawberry=strawberry+"</section>"
    pizzas.sort();
    document.getElementById("display_addedmenu").innerHTML = strawberry;
    
}