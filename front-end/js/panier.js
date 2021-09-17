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

// erreurs 
let error1
let error2
let error3
let error4
let error5



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
        contact.id = "myform";
        contact.classList.add("form");
        contactdiv.appendChild(contact);

        //  Input utilisateur // 
        inputname = document.createElement("p");
        inputname.innerHTML = ("Nom");
        contact.appendChild(inputname);

        inputform = document.createElement("input");
        inputform.classList.add("lastname")
        inputform.setAttribute("type", "text");
        inputform.setAttribute("placeholder", "Ex : Dupont");
        contact.appendChild(inputform);

        error1 = document.createElement("p");
        error1.classList.add("erreur");
        contact.appendChild(error1);

        inputname = document.createElement("p");
        inputname.innerHTML = ("Prénom");
        contact.appendChild(inputname);

        inputform = document.createElement("input");
        inputform.classList.add("firstname")
        inputform.setAttribute("type", "text");
        inputform.setAttribute("placeholder", "Ex : Pierre");
        contact.appendChild(inputform);

        error2 = document.createElement("p");
        error2.classList.add("erreur");
        contact.appendChild(error2);

        inputname = document.createElement("p");
        inputname.innerHTML = ("Adresse");
        contact.appendChild(inputname);

        inputform = document.createElement("input");
        inputform.classList.add("address")
        inputform.setAttribute("type", "text");
        inputform.setAttribute("placeholder", "Ex : 1 place de la fraternité");
        contact.appendChild(inputform);

        error3 = document.createElement("p");
        error3.classList.add("erreur");
        contact.appendChild(error3);

        inputname = document.createElement("p");
        inputname.innerHTML = ("Ville");
        contact.appendChild(inputname);

        inputform = document.createElement("input");
        inputform.classList.add("city")
        inputform.setAttribute("type", "text");
        inputform.setAttribute("placeholder", "Ex : Apt");
        contact.appendChild(inputform);

        error4 = document.createElement("p");
        error4.classList.add("erreur");
        contact.appendChild(error4);

        inputname = document.createElement("p");
        inputname.innerHTML = ("E-mail");
        contact.appendChild(inputname);

        inputform = document.createElement("input");
        inputform.classList.add("email")
        inputform.setAttribute("type", "email");
        inputform.setAttribute("placeholder", "Ex : pierredupont@gmail.com");
        contact.appendChild(inputform);

        error5 = document.createElement("p");
        error5.classList.add("erreur");
        contact.appendChild(error5);


        // Bouton commander 
        orderbtn = document.createElement("button");
        orderbtn.innerHTML = "Commander";   
        orderbtn.classList.add("order--btn");         
        orderbtn.setAttribute("type", "submit");                               
        cart.appendChild(orderbtn);

    orderbtn.addEventListener("click",()=>{
        let nom = document.getElementsByClassName("lastname")[0].value;
        let prenom = document.getElementsByClassName("firstname")[0].value;
        let adresse = document.getElementsByClassName("address")[0].value;
        let ville = document.getElementsByClassName("city")[0].value;
        let email = document.getElementsByClassName("email")[0].value;

        console.log(/^\w\D+$/.test(nom));                                       // TRIM MDN // OU 1 MIN 1 MAJ
        console.log(/^\w\D+$/.test(prenom));
        console.log(/\w/.test(adresse))
        console.log(/^\w\D+$/.test(ville));
        console.log(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email));
        console.log(nom, prenom, adresse, ville, email,);


        let checkLastName = /^\w\D+$/.test(nom);
        let checkFirstName = /^\w\D+$/.test(prenom);
        let checkAddress = /\w/.test(adresse);
        let checkCity = /^\w\D+$/.test(ville);
        let checkMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
        
     /*   if (checkLastName) {
            console.log("check last name ok")            // IMBRIQUER LES IF 
            if (checkFirstName) {
                console.log("check first name ok ")
                if (checkAddress) {
                    console.log("check address ok") 
                    if (checkCity) {
                        console.log("check city name ok")
                        if (checkMail) {
                            console.log("check mail name ok") 
                        } else {
                            console.log("check mail pas ok")
                            error5.innerHTML = "Entrez un e-mail valide";
                        } 
                    } else {
                        console.log("check city name pas ok") 
                        error4.innerHTML = "Entrez un nom de ville valide";
                    }
                } else {
                    console.log("check address pas ok") 
                    error3.innerHTML = "Entrez une adresse postale valide";
                }
            } else {
                console.log("check first name pas ok ")
                error2.innerHTML = "Entrez un prénom valide";
            }
        }
        else {
            console.log("check last name pas ok")
            error1.innerHTML = "Entrez un nom valide";
        } */
        
         if (checkLastName && checkFirstName && checkAddress && checkCity && checkMail) {
            console.log("true");
            error5.innerHTML = ("");
        } else {
            console.log("false");
            error5.innerHTML = "Un ou plusieurs champs ne sont pas valide(s)";
        }  

        let contact = [
            lastName = nom,
            firstName = prenom,
            address = adresse,
            city = ville,
            email = email
        ];


        let cartItem = JSON.parse(localStorage.getItem("panier"));
        let products = [];

        for (let i = 0; i < cartItem.length; i++) {
            products.push(cartItem[i].productId)
        }
        products.push(contact);

        console.log(products);

        /// FETCH POST ENVOIE SERVEUR 
        fetch(router.post("http://localhost:3000/api/cameras/order"), {
            method: "POST",
            body: JSON.stringify(products),
        }
    })
}





