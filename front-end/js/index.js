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
