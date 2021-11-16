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



// Confirmation de commande // 
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
  