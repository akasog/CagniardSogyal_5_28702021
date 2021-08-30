let params = (new URL(document.location)).searchParams;
let id = params.get('id'); 
console.log(id)

fetch ("http://localhost:3000/api/cameras/"+ id)
.then(response => response.json())
.then(data => {
    
    let div
    let btncontainer 
    let btn 
    let selectprice
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

selectprice = document.createElement("div");
document.getElementById("product_content").appendChild(selectprice);
selectprice.classList.add("product--selectprice");

select = document.createElement("select");
select.classList.add("product--lenses"); 
selectprice.appendChild(select);

for (let i = 0; i < data.lenses.length; i++) {
    
    option = document.createElement("option");
    option.textContent = data.lenses[i];                     //Boucle qui permet de récuperer les différents types de lentilles disponible
    option.setAttribute("value", data.lenses[i]);
    select.appendChild(option);
}

price = document.createElement("p");
price.textContent = data.price/100 + ("€");
price.classList.add("product--price");
selectprice.appendChild(price);

    
btncontainer = document.createElement("div");
document.getElementById("product_content").appendChild(btncontainer)
btncontainer.classList.add("btncontainer");

btn = document.createElement("button");
btn.innerHTML = "Ajouter au panier";
btncontainer.appendChild(btn);
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
    

        console.log(localStorage);
        console.log(tableau.length);

    }) 
        
console.log(data);
})
.catch(error => alert(error));

    
