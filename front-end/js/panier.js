let cartproduct = JSON.parse(localStorage.getItem("panier"));
console.log(cartproduct);

let emptycart
let title
let table
let tbody
let tr 
let td
let th
let lense


title = document.createElement("h2");
title.textContent = ("Votre panier");
document.getElementById("cart").appendChild(title)

table = document.createElement("table");
document.getElementById("cart").appendChild(table);
table.classList.add("cart--table");

tbody = document.createElement("tbody");
tbody.classList.add("cart--table--tbody");
table.appendChild(tbody);

    if (cartproduct===null) {
        tr = 0;
        emptycart = document.createElement("p");
        emptycart.textContent = ("Votre panier est vide...")
        emptycart.classList.add("emptycart")
        tbody.appendChild(emptycart);
    }
    else {
    for (let i = 0; i < cartproduct.length; i++) {
    
    tr = document.createElement("tr");
    tbody.appendChild(tr);
    
    th = document.createElement("th");
    tr.appendChild(th);

    img = document.createElement("img");
    img.src = cartproduct[i].img;
    img.classList.add("cart--img");
    th.appendChild(img);

    td = document.createElement("td");
    tr.appendChild(td);

    nom = document.createElement("h3");
    nom.textContent = cartproduct[i].name;
    td.appendChild(nom);

    lense = document.createElement("p");
    lense.textContent = cartproduct[i].lenses;
    td.appendChild(lense)
    
    price = document.createElement("p");
    price.textContent = cartproduct[i].price;
    price.classList.add("cart--price");
    td.appendChild(price);


    }}




