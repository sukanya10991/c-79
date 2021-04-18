pizzas["Blackpink pizza",
       "Minecraft pizza",
       "Coding pizza",
       "McDonalds Pizza",
       "Ice cream pizza",
       "Paneer Pizza",
       "Reading Pizza"];
  
function getmenu(){
    pizzas.sort();
    document.getElementById("display_menu").innerHTML = pizzas;
    console.log(pizzas);
}
function additem(){
    add=additem.value;
    pizzas.push("add");
    pizzas.sort();
    document.getElementById("display_addedmenu").innerHTML = pizzas;
    console.log(pizzas);
}