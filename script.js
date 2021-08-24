// // array för att hålla alla varor i butiken
// let shopItems = [
//     {title: "Catnip Fish", price: 7, category: "toys", imageurl: "img/toy02.jpg"},
//     {title: "Little Mouse", price: 5, category: "toys", imageurl: "img/toy03.png"},
//     {title: "Yarn Ball", price: 4, category: "toys", imageurl: "img/toy04.jpg"},
//     {title: "Claws Out Scratching Post", price: 49, category: "toys", imageurl: "img/toy05.png"}
// ];
// let allproducts = document.querySelector("#allproducts");
// for (let product of shopItems) {
//     let productDiv = document.createElement("div");
//     productDiv.classList.add(product.category, "card", "smallcard");
//     let title = document.createElement("h2");
//     title.innerText = product.title;
//     let price = document.createElement("p");
//     price.innerText = "$" + product.price;
//     let img = document.createElement("img");
//     img.src = product.imageurl;
//     productDiv.appendChild(title);
//     productDiv.appendChild(img);
//     productDiv.appendChild(price);
//     allproducts.appendChild(productDiv);
    
// }


let itemsInCart = [];
// finns en varukorg i localstorage? isåfall läs av antal
let varukorg = localStorage.getItem("varukorg");
if (varukorg != null) {
    itemsInCart = JSON.parse(varukorg);
}
// om inte, skapa varukorg
else {
    // setitem för att sätta ett värde
    localStorage.setItem("varukorg", "[]");
}
// köp en vara med ett visst namn och pris
// placera den i varukorgen och uppdatera sidan
function addToCart(productname, price) {
    itemsInCart.push(
        {productname, price}
    )
    update();
    localStorage.setItem("varukorg", JSON.stringify(itemsInCart));
}
// uppdatera antalet, alltså arrayens längd, till span där antal
// varor står för varukorg 
function update() {
    let span = document.querySelector("span");
    span.innerText = itemsInCart.length;
}
// uppdatera alltid antal varor i korgen
update();