function clearShopCart() {
    localStorage.removeItem("varukorg");
    location.reload();
}

const shopCartContent = document.getElementById("shopcart");
let sum = 0;
for ( let item of itemsInCart) {
    const p = document.createElement("p");
    p.innerText = "1 x " + item.productname + ", $" + item.price;
    shopCartContent.appendChild(p);
    let price = item.price;
    sum += price;
}
if (itemsInCart.length < 1) {
    let p = document.createElement("p");
    p.innerText = "Your cart is empty!";
    shopCartContent.appendChild(p);
}

document.getElementById("totalprice").innerText = "Total sum: $" + sum;
document.getElementById("itemsnumber").innerText = "You have " + itemsInCart.length + " items in your cart";