// Constantes permettant de générer un nom d'url avec l'ID produit concerné // 

let params = (new URL(document.location)).searchParams;
let id = params.get('id'); 

// Fetch qui permet la récupération d'un élément ciblé via son ID 

fetch ("http://localhost:3000/api/cameras/"+ id)
.then(response => response.json())
.then(data => {
    
    let div
    let btnContainer 
    let btn 
    let selectPrice
    let select
    let option

// Création du contenu HTML de la page produit //     

nom = document.createElement("h1"); //MODIFIER H2!!
nom.textContent = data.name;
document.getElementById("product_content").appendChild(nom);
nom.classList.add("product--name");

div = document.createElement("div");
document.getElementById("product_content").appendChild(div);
div.classList.add("product--container");

img = document.createElement("img");
img.src = data.imageUrl;
img.classList.add("product--imagestyle");
div.appendChild(img);

description = document.createElement("p");
description.textContent = data.description;
description.classList.add("product--description");
div.appendChild(description);

selectPrice = document.createElement("div");
document.getElementById("product_content").appendChild(selectPrice);
selectPrice.classList.add("product--selectprice");

select = document.createElement("select");
select.classList.add("product--lenses"); 
selectPrice.appendChild(select);

for (let i = 0; i < data.lenses.length; i++) {
    
    option = document.createElement("option");
    option.textContent = data.lenses[i];                     //Boucle qui permet de récuperer les différents types de lentilles disponible
    option.setAttribute("value", data.lenses[i]);
    select.appendChild(option);
}

price = document.createElement("p");
price.textContent = data.price/100 + ("€");
price.classList.add("product--price");
selectPrice.appendChild(price);

    
btnContainer = document.createElement("div");
document.getElementById("product_content").appendChild(btnContainer)
btnContainer.classList.add("btncontainer");

btn = document.createElement("button");
btn.innerHTML = "Ajouter au panier";
btnContainer.appendChild(btn);
btn.classList.add("container--addcartbtn");

//LOCAL STORAGE//

btn.addEventListener("click", ()=>{

    let tableau;
    let productstorage  = {
    name : data.name,
    price : data.price/100,                                 
    img : data.imageUrl,
    lenses : select.value,
    productId :  data._id          // Ajout ID produit 
    }

    if (localStorage.getItem("panier")===null) {
        tableau = [];
    }
    else {
        tableau = JSON.parse(localStorage.getItem("panier"))
    }

    tableau.push(productstorage);

    localStorage.setItem("panier", JSON.stringify(tableau));

    }) 
})
.catch(error => alert(error));

    
