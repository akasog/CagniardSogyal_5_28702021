// Utilisation du JSON.parse pour traduire la chaine de caractère JSON en variable javascript manipulable // 

let cartproduct = JSON.parse(localStorage.getItem("panier"));

// structure panier // 
let emptyCart
let title
let table
let tbody
let tr 
let td
let th
let lense
let linkOrderBtn
let orderBtn


// éléments panier //  
let tdName
let tdLenses
let tdQuantity
let tdPrice
let quantity

// Supression élément panier //
let tdRemove
let removeBtn
let textRemove

// Formulaire coordonées client // 
let contactDiv
let contactTitle
let contact
let inputForm
let inputName

// erreurs 
let error


title = document.createElement("h2");
title.textContent = ("Votre panier");
document.getElementById("cart").appendChild(title)

table = document.createElement("table");
document.getElementById("cart").appendChild(table);
table.classList.add("cart--table");

tbody = document.createElement("tbody");
tbody.classList.add("cart--table--tbody");
table.appendChild(tbody);

//Affiche un message lorsque le panier est vide

    if ((cartproduct===null)||(cartproduct.length==0)) {

        //fonction qui affiche un message lorsque le panier est vide//                                   
        empty(); 
    }
    else {

    // Fonction qui affiche le tableaux ainsi que les éléments présents dans le panier

        cartItems(); 

    // Fonction qui crée le formulaire coordonées client // 
        
        orderContact()

    // Fonction qui crée le bouton commander 

        cartBtn();

    orderBtn.addEventListener("click",()=>{
        
        regEx();
  
    }) 
}






