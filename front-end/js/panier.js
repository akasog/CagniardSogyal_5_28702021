let cartproduct = JSON.parse(localStorage.getItem("panier"));
console.log(cartproduct);

// structure panier // 
let emptycart
let title
let table
let tbody
let tr 
let td
let th
let lense
let orderbtn


// éléments panier // 
let tdname
let tdlenses
let tdquantity
let tdprice
let quantity

// Supression élément panier //
let tdremove
let removebtn
let textremove

// Formulaire coordonées client // 
let contactdiv
let contacttitle
let contact
let inputform
let inputname


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

    if (cartproduct===null) {                                   
        
        emptycart = document.createElement("p");
        emptycart.textContent = ("Votre panier est vide...")
        emptycart.classList.add("emptycart")
        tbody.appendChild(emptycart);
    }
    else {

        // Affiche les le tableaux ainsi que les éléments présents dans le panier

        tr = document.createElement("tr");
        tbody.appendChild(tr);

        td = document.createElement("td");
        td.innerHTML = "Nom";
        td.classList.add("headtable")
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerHTML = "Lentille";
        td.classList.add("headtable")
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerHTML = "Quantité";
        td.classList.add("headtable")
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerHTML = "Prix";
        td.classList.add("headtable")
        tr.appendChild(td);

    let total = 0
    
    //Boucle qui ajoute un élément supplémentaire au panier

    for (let i = 0; i < cartproduct.length; i++) {               
    
    tr = document.createElement("tr");
    tr.classList.add("itemRecap");
    tbody.appendChild(tr);
    
    tdname = document.createElement("td");
    tr.appendChild(tdname);

    nom = document.createElement("p");
    nom.textContent = cartproduct[i].name;
    tdname.appendChild(nom);

    tdlenses = document.createElement("td");
    tr.appendChild(tdlenses);

    lense = document.createElement("p");
    lense.textContent = cartproduct[i].lenses;
    tdlenses.appendChild(lense)

    tdquantity = document.createElement("td");
    tr.appendChild(tdquantity);

    quantity = document.createElement("p");
    quantity.textContent = ("1");
    quantity.classList.add("quantity")
    tdquantity.appendChild(quantity);

    tdprice = document.createElement("td");
    tr.appendChild(tdprice);

    price = document.createElement("p");
    price.textContent = cartproduct[i].price+("€");
    tdprice.appendChild(price);
    total = total + cartproduct[i].price

    
    // Création du bouton pour supprimer un élément du panier //
    
    tdremove = document.createElement("td");
    tdremove.classList.add("removecontainer")
    tr.appendChild(tdremove);

    removebtn = document.createElement("button");
    removebtn.classList.add("removebtn");
    removebtn.setAttribute("id", i);
    tdremove.appendChild(removebtn);

    textremove = document.createElement("p");
    textremove.classList.add("x")
    textremove.innerHTML = ("X")
    removebtn.appendChild(textremove);

    removebtn.addEventListener("click", (e)=>{
    cartproduct.splice(e.path[1].id, 1);
    localStorage.setItem("panier", JSON.stringify(cartproduct));
    document.location.reload();

    console.log(e);
    console.log(e.path[1].id);
    }) 

}

console.log(total);

// BAS DU TABLEAU RECAP PANIER // 

tr = document.createElement("tr");
tr.classList.add("totalPrice")
tbody.appendChild(tr);

td = document.createElement("td");
td.innerHTML = ("Total");
td.classList.add("containertotal");
tr.appendChild(td);

td = document.createElement("td");
td.classList.add("emptytd");
tr.appendChild(td);

td = document.createElement("td");
td.classList.add("emptytd");
tr.appendChild(td);

td = document.createElement("td");
td.innerHTML = total + ("€");
td.classList.add("calcul");
tr.appendChild(td);

// Formulaire coordonées client // 
contacttitle = document.createElement("h2");
contacttitle.innerHTML = ("Vos coordonnées : ");
document.getElementById("cart").appendChild(contacttitle);

contactdiv = document.createElement("div");
contactdiv.classList.add("contactdiv");
document.getElementById("cart").appendChild(contactdiv);

contact = document.createElement("form");
contact.classList.add("form");
contactdiv.appendChild(contact);

//  Input utilisateur // 
inputname = document.createElement("p");
inputname.innerHTML = ("Nom");
contact.appendChild(inputname);

inputform = document.createElement("input");
inputform.classList.add("lastname")
inputform.setAttribute("type", "text");
contact.appendChild(inputform);

inputname = document.createElement("p");
inputname.innerHTML = ("Prénom");
contact.appendChild(inputname);

inputform = document.createElement("input");
inputform.classList.add("firstname")
inputform.setAttribute("type", "text");
contact.appendChild(inputform);

inputname = document.createElement("p");
inputname.innerHTML = ("Adresse");
contact.appendChild(inputname);

inputform = document.createElement("input");
inputform.classList.add("adress")
inputform.setAttribute("type", "text");
contact.appendChild(inputform);

inputname = document.createElement("p");
inputname.innerHTML = ("Ville");
contact.appendChild(inputname);

inputform = document.createElement("input");
inputform.classList.add("city")
inputform.setAttribute("type", "text");
contact.appendChild(inputform);

inputname = document.createElement("p");
inputname.innerHTML = ("E-mail");
contact.appendChild(inputname);

inputform = document.createElement("input");
inputform.classList.add("email")
inputform.setAttribute("type", "email");
contact.appendChild(inputform);

// Bouton commander 
orderbtn = document.createElement("button");
        orderbtn.innerHTML = "Commander";                                           
        cart.appendChild(orderbtn);
        orderbtn.classList.add("order--btn");


}





