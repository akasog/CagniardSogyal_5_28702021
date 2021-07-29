fetch('http://localhost:3000/api/cameras')
  .then(response => response.json())
  .then(data =>{
    
  let img = new Image();
  let nom;
  let description;
  let price; 


    for (let i = 0; i < data.length; i++) {
       console.log(data[i].name);
       /*document.getElementById("list_content").innerHTML = document.getElementById("list_content").innerHTML + data[i].name */
       /*document.getElementById("list_content").innerHTML += data[i].name */

       img = document.createElement("img");
       img.src = data[i].imageUrl;
       document.getElementById("product").appendChild(img)

       nom = document.createElement("h2");
       nom.textContent = data[i].name;
       document.getElementById("product").appendChild(nom)
       
       description = document.createElement("p");
       description.textContent = data[i].description;
       document.getElementById("product").appendChild(description)

       price = document.createElement("p");
       price.textContent = data[i].price;
       document.getElementById("product").appendChild(price)
    }

  console.log(data)
  })
  .catch(error => alert(error))


/*
product ()

async function product() {
    const articles = await getArticles()
    for (article of articles) {
        displayArticle(articles)
    }
}

function getArticles() {
    return fetch("http://localhost:3000/api/cameras")
        .then(function(httpBodyResponse) {
            return httpBodyResponse.json() 
    })
    .then(function(articles) {
        return articles
    })
    .catch(function(error) {
        alert(error)
    })
}

function displayArticle() {
    document.getElementById("product").innerHTML += `
    <figure id="product">
      <a href="#" class="card mt-5 card-size">
        <img id="product__img" src="" class="card-img-top image-style" alt="...">
        <figcaption class="card-body">
          <div class="flex-main">
            <h2 id="product__title" class="card-title text-dark"></h2>
            <p id="product__price" class="price"></p>
          </div>
          <p id="product__description" class="card-text description"></p>
        </figcaption>
      </a> 
    </figure>`
}







/*

const getAllProducts = () => {
    fetch('http://localhost:3000/api/cameras')
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
}

getAllProducts() */