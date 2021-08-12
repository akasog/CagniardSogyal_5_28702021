let params = (new URL(document.location)).searchParams;
let id = params.get('id'); 
console.log(id)

fetch ("http://localhost:3000/api/cameras/"+ id)
.then(response => response.json())
.then(data => {
    
    let div
    let btncontainer 
    let btn 

    nom = document.createElement("h1");
    nom.textContent = data.name;
    document.getElementById("product_content").appendChild(nom);
    nom.classList.add("product--name")

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

    price = document.createElement("p");
    price.textContent = data.price/100;
    price.classList.add("product--price")
    div.appendChild(price);

    btncontainer = document.createElement("div");
    document.getElementById("product_content").appendChild(btncontainer)
    btncontainer.classList.add("btncontainer");

    btn = document.createElement("button");
    btn.innerHTML = "Ajouter au panier";
    btncontainer.appendChild(btn);
    btn.classList.add("container--addcartbtn");


    



console.log(data);
})
//.catch(error => alert(error))

    
