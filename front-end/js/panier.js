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
        emptyCart = document.createElement("p");
        emptyCart.textContent = ("Votre panier est vide...")
        emptyCart.classList.add("emptycart")
        tbody.appendChild(emptyCart);
        title.textContent = ("");
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

        // Formulaire coordonées client // 
        
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


        // Bouton commander 

        linkOrderBtn = document.createElement("a");
        linkOrderBtn.classList.add("linkbtn");
        cart.appendChild(linkOrderBtn);


        orderBtn = document.createElement("button");
        orderBtn.innerHTML = "Commander";   
        orderBtn.classList.add("order--btn");         
        orderBtn.setAttribute("type", "submit");                               
        linkOrderBtn.appendChild(orderBtn);

    orderBtn.addEventListener("click",()=>{
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
  
    }) 
}






