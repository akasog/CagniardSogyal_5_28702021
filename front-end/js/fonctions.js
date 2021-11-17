// PAGE ACCUEIL // 
//Fonction qui permet l'execution et la création des éléments de la page d'accueil // 

function createProducts(data) {
      
  let link; 
  let figure; 
  let img = new Image();
  let div; 
  let nom;
  let description;
  let price;

// Boucle FOR qui itère la récupération des éléments jusqu'à ce que ceux ci soit tous affichés // 

for (let i = 0; i < data.length; i++) {

  figure = document.createElement("figure");
  document.getElementById("list_content").appendChild(figure);
  figure.classList.add("product", "product--cardsize");

  link = document.createElement("a");
  link.setAttribute("href", "produit.html?id="+ data[i]._id);
  figure.appendChild(link);

  img = document.createElement("img");
  img.src = data[i].imageUrl;
  img.classList.add("product--imagestyle");
  link.appendChild(img);

  div = document.createElement("div");
  div.classList.add("title--price", "product--flexmain");
  link.appendChild(div);

  nom = document.createElement("h2");
  nom.textContent = data[i].name;
  div.appendChild(nom);
  nom.classList.add("product--title");
          
  price = document.createElement("p");
  price.textContent = data[i].price/100 + ("€");
  price.classList.add("product--price");
  div.appendChild(price);

  description = document.createElement("p");
  description.textContent = data[i].description;
  description.classList.add("product--description");
  link.appendChild(description);

 }
}


// PAGE PRODUIT // 
// Fonction qui crée la carte produit // 

function oneProduct(data) {
  
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

}


// PAGE PANIER // 

// Fonction qui affiche un message lorsque le panier est vide // 
function empty() {
  emptyCart = document.createElement("p");
  emptyCart.textContent = ("Votre panier est vide...")
  emptyCart.classList.add("emptycart")
  tbody.appendChild(emptyCart);
  title.textContent = ("");
}

// Fonction qui crée le contenu du panier //
function cartItems() {
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
    
    tdName = document.createElement("td");
    tr.appendChild(tdName);

    nom = document.createElement("p");
    nom.textContent = cartproduct[i].name;
    tdName.appendChild(nom);

    tdLenses = document.createElement("td");
    tr.appendChild(tdLenses);

    lense = document.createElement("p");
    lense.textContent = cartproduct[i].lenses;
    tdLenses.appendChild(lense)

    tdQuantity = document.createElement("td");
    tr.appendChild(tdQuantity);

    quantity = document.createElement("p");
    quantity.textContent = ("1");
    quantity.classList.add("quantity")
    tdQuantity.appendChild(quantity);

    tdPrice = document.createElement("td");
    tr.appendChild(tdPrice);

    price = document.createElement("p");
    price.textContent = cartproduct[i].price+("€");
    tdPrice.appendChild(price);
    total = total + cartproduct[i].price


    // Création du bouton pour supprimer un élément du panier //
    
    tdRemove = document.createElement("td");
    tdRemove.classList.add("removecontainer")
    tr.appendChild(tdRemove);

    removeBtn = document.createElement("button");
    removeBtn.classList.add("removebtn");
    removeBtn.setAttribute("id", i);
    tdRemove.appendChild(removeBtn);

    textRemove = document.createElement("p");
    textRemove.classList.add("x")
    textRemove.innerHTML = ("X")
    removeBtn.appendChild(textRemove);

    removeBtn.addEventListener("click", (e)=>{
    cartproduct.splice(e.path[1].id, 1);
    localStorage.setItem("panier", JSON.stringify(cartproduct));
    document.location.reload();

    }) 

  }       

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
        localStorage.setItem("total", total + ("€"));
      }


      // Fonction formulaire client // 

function orderContact() {

  contactTitle = document.createElement("h2");
  contactTitle.innerHTML = ("Vos coordonnées : ");
  document.getElementById("cart").appendChild(contactTitle);

  contactDiv = document.createElement("div");
  contactDiv.classList.add("contactdiv");
  document.getElementById("cart").appendChild(contactDiv);

  contact = document.createElement("form");
  contact.id = "myform";
  contact.classList.add("form");
  contactDiv.appendChild(contact);

  //  Input utilisateur // 
  inputName = document.createElement("p");
  inputName.innerHTML = ("Nom");
  contact.appendChild(inputName);

  inputForm = document.createElement("input");
  inputForm.classList.add("lastname")
  inputForm.setAttribute("type", "text");
  inputForm.setAttribute("placeholder", "Ex : Dupont");
  contact.appendChild(inputForm);

  inputName = document.createElement("p");
  inputName.innerHTML = ("Prénom");
  contact.appendChild(inputName);

  inputForm = document.createElement("input");
  inputForm.classList.add("firstname")
  inputForm.setAttribute("type", "text");
  inputForm.setAttribute("placeholder", "Ex : Pierre");
  contact.appendChild(inputForm);

  inputName = document.createElement("p");
  inputName.innerHTML = ("Adresse");
  contact.appendChild(inputName);

  inputForm = document.createElement("input");
  inputForm.classList.add("address")
  inputForm.setAttribute("type", "text");
  inputForm.setAttribute("placeholder", "Ex : 1 place de la fraternité");
  contact.appendChild(inputForm);

  inputName = document.createElement("p");
  inputName.innerHTML = ("Ville");
  contact.appendChild(inputName);

  inputForm = document.createElement("input");
  inputForm.classList.add("city")
  inputForm.setAttribute("type", "text");
  inputForm.setAttribute("placeholder", "Ex : Apt");
  contact.appendChild(inputForm);

  inputName = document.createElement("p");
  inputName.innerHTML = ("E-mail");
  contact.appendChild(inputName);

  inputForm = document.createElement("input");
  inputForm.classList.add("email")
  inputForm.setAttribute("type", "email");
  inputForm.setAttribute("placeholder", "Ex : pierredupont@gmail.com");
  contact.appendChild(inputForm);

  error = document.createElement("p");
  error.classList.add("erreur");
  contact.appendChild(error);
}

// Fonction bouton commander //

function cartBtn() {

  linkOrderBtn = document.createElement("a");
  linkOrderBtn.classList.add("linkbtn");
  cart.appendChild(linkOrderBtn);


  orderBtn = document.createElement("button");
  orderBtn.innerHTML = "Commander";   
  orderBtn.classList.add("order--btn");         
  orderBtn.setAttribute("type", "submit");                               
  linkOrderBtn.appendChild(orderBtn);

}




// Fonction ReGex qui test les champs de saisis et envoie les données au serveur // 

function regEx() {

        let nom = document.getElementsByClassName("lastname")[0].value;
        let prenom = document.getElementsByClassName("firstname")[0].value;
        let adresse = document.getElementsByClassName("address")[0].value;
        let ville = document.getElementsByClassName("city")[0].value;
        let email = document.getElementsByClassName("email")[0].value;

//RegEx visant à vérifier le contenu saisis dans le champs de saisis du formulaire//

        let checkLastName = /^\w\D+$/.test(nom);
        let checkFirstName = /^\w\D+$/.test(prenom);
        let checkAddress = /\w/.test(adresse);
        let checkCity = /^\w\D+$/.test(ville);
        let checkMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
        
        
         if (checkLastName && checkFirstName && checkAddress && checkCity && checkMail) {
            error.innerHTML = ("");

        let contact = new Object();
        contact.firstName = prenom;
        contact.lastName = nom;
        contact.address = adresse;
        contact.city = ville;
        contact.email = email;


        let cartItem = JSON.parse(localStorage.getItem("panier"));
        let products = [];

        for (let i = 0; i < cartItem.length; i++) {
            products.push(cartItem[i].productId)
        }

        let order = {
            contact, 
            products,
        }

        /// FETCH POST ENVOIE SERVEUR 

       fetch("http://localhost:3000/api/cameras/order", {
            method: "POST",
            body: JSON.stringify(order),
            headers: {"Content-Type": "Application/Json"}
        })
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("confirmation", data.orderId);
            localStorage.removeItem("panier");
            document.location.href = "confirmation.html";
        });  


        } else {
            error.innerHTML = "Un ou plusieurs champs ne sont pas valide(s)";
        }  
}





// PAGE CONFIRMATION // 
// Fonction qui créé la page de confirmation de commande // 

function confirmOrder() {

  let orderId = localStorage.getItem("confirmation");
  
  let orderPrice = localStorage.getItem("total");
  
  let title
  let confirmContainer
  let confirmText
  
  title = document.createElement("h2");
  title.textContent = ("Merci pour votre commande!");
  document.getElementById("confirm_order").appendChild(title);
  
  confirmContainer = document.createElement("div");
  confirmContainer.id = ("confirm__container");
  document.getElementById("confirm_order").appendChild(confirmContainer);
  
  confirmText = document.createElement("p");
  confirmText.classList.add("confirmtext")
  confirmText.textContent = ("Nous vous confirmons l'enregistrement de votre commande " + "« " + orderId + " »" + " d'un montant de " + orderPrice + "." + " En vous souhaitant une bonne réception de celle-ci. À bientôt sur Orinocam!");
  document.getElementById("confirm__container").appendChild(confirmText);
  
   
  }
  