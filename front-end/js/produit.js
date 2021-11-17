// Constantes permettant de générer un nom d'url avec l'ID produit concerné // 

let params = (new URL(document.location)).searchParams;
let id = params.get('id'); 

// Fetch qui permet la récupération d'un élément ciblé via son ID 

fetch ("http://localhost:3000/api/cameras/"+ id)
.then(response => response.json())
.then(data => {
    

    // Appel de la fonction qui crée la carte produit // 
    oneProduct(data);

})
.catch(error => alert(error));

    
