fetch('http://localhost:3000/api/cameras')
  .then(response => response.json())
  .then(data =>{
      
      let figure; 
      let img = new Image();
      let div; 
      let nom;
      let description;
      let price;


        for (let i = 0; i < data.length; i++) {
        console.log(data[i].name);
        /*document.getElementById("list_content").innerHTML = document.getElementById("list_content").innerHTML + data[i].name */
        /*document.getElementById("list_content").innerHTML += data[i].name */
          
          figure = document.createElement("figure");
          document.getElementById("list_content").appendChild(figure);
          figure.classList.add("product", "product--cardsize");

          img = document.createElement("img");
          img.src = data[i].imageUrl;
          document.getElementsByClassName("product")[i].appendChild(img);
          img.classList.add("product--imagestyle");

          div = document.createElement("div");
          document.getElementsByClassName("product")[i].appendChild(div);
          div.classList.add("title--price", "product--flexmain");

          nom = document.createElement("h2");
          nom.textContent = data[i].name;
          document.getElementsByClassName("title--price")[i].appendChild(nom);
          
          description = document.createElement("p");
          description.textContent = data[i].description;
          document.getElementsByClassName("product")[i].appendChild(description);
          description.classList.add("product--description");

          price = document.createElement("p");
          price.textContent = data[i].price/100;
          document.getElementsByClassName("title--price")[i].appendChild(price);
          price.classList.add("product--price");
    }

  console.log(data)
  })
  .catch(error => alert(error))

