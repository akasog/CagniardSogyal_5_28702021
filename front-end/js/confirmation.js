let orderId = localStorage.getItem("confirmation");
console.log(orderId);

let orderPrice = localStorage.getItem("total");
console.log(orderPrice);

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


