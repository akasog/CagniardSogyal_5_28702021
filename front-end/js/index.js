// // Fetch qui permet la récupération des élément présents dans l'API //   //

fetch('http://localhost:3000/api/cameras')
  .then(response => response.json())
  .then(data =>{
      
//Fonction qui permet l'execution et la création des éléments de la page d'accueil // 

  createElement(data);
   
})
.catch(error => alert(error))

