const products=[
    {
        id:1,name:"asuschromebook",image:"laptop0.jpg",price:30000
    },
    {
        id:2,name:"primebook",image:"laptop3.jpg",price:35000
    },
    {
        id:3,name:"asusvivobook",image:"laptop4.jpg",price:40000
    },
    {
        id:4,name:"primebook",image:"laptop3.jpg",price:33000
    },
    {
        id:5,name:"asusvivobook",image:"laptop4.jpg",price:31000
    },
     {
        id:6,name:"purse",image:"purse.jpg",price:300
    },
    {
        id:7,name:"purse",image:"purse0.jpg",price:350
    },
    {
        id:8,name:"purse",image:"purse1.jpg",price:400
    },
    {
        id:9,name:"saree",image:"sreelela.jpg",price:2000
    },
    {
        id:10,name:"saree",image:"pooja.jpg",price:3000
    },
    {
        id:11,name:"shirt",image:"shirt0.jpg",price:1000
    },
    
    {
        id:12,name:"men shirt",image:"shirt1.jpg",price:1200
    },
    
    {
        id:13,name:"men shirt",image:"shirt2.jpg",price:3000
    },
    
    {
        id:14,name:"men shirt",image:"shirt3.jpg",price:1300
    },
    
    {
        id:15,name:"men shirt",image:"shirt0.jpg",price:2000
    },
    {
        id:16,name:"dress",image:"dress0.jpg",price:1000
    },
    {
        id:17,name:"dress",image:"dress1.jpg",price:3000
    },
    {
        id:18,name:"dress",image:"dress2.jpg",price:1000
    },
    {
        id:19,name:"saree",image:"dress3.jpg",price:700
    },
    {
        id:20,name:"saree",image:"dress4.jpg",price:300
    },
    {
        id:21,name:"saree",image:"pooja.jpg",price:3000
    },
    {
        id:22,name:"saree",image:"sreelela.jpg",price:2500
    },
    {
        id:23,name:"bluetooth",image:"airpod4.jpg",price:2000
    },
    {
        id:24,name:"samsunggalaxymobille",image:"galaxy0.jpg",price:30000
    },
    {
        id:25,name:"iphonemobile",image:"iphone.jpg",price:90000
    },

];

// LocalStorage Helpers
function getCart() {
return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
localStorage.setItem("cart", JSON.stringify(cart));
}


// Display Products
function displayProducts(list = products) {

const container = document.getElementById("products");
if(!container) return;

container.innerHTML = "";

list.forEach(p => {

container.innerHTML += `
<div class="product">
<img src="${p.image}" alt="${p.name}" width:"200" height="200" style="border-radius:10px;border:solid 2px orange;">
<h4>${p.name}</h4>
<p>₹${p.price}</p>
<button onclick="addToCart(${p.id})">Add to Cart</button>
</div>
`;

});

}


// Search Products
function searchProducts() {

const keyword =
document.getElementById("searchinput").value.toLowerCase();
data=document.getElementById("dropdown").value.toLowerCase();
const filteredProducts = products.filter(p =>
p.name.toLowerCase().includes(keyword)
);

displayProducts(filteredProducts);

}


// Add To Cart
function addToCart(id) {

let cart = getCart();

let product = products.find(p => p.id === id);

let item = cart.find(i => i.id === id);
if(item){
item.qty++;
}
else{
cart.push({...product, qty:1});
}

saveCart(cart);

alert("Added to Cart");

}


// Display Cart
function displayCart(){

const cartItems = document.getElementById("cartItems");
const totalEl = document.getElementById("total");

if(!cartItems) return;

let cart = getCart();

let total = 0;

cartItems.innerHTML = "";

cart.forEach(item => {

total += item.price * item.qty;

cartItems.innerHTML += `
<div class="cart-item">
<h4>${item.name}</h4>
<p>₹${item.price} × ${item.qty}</p>
</div>
`;

});

totalEl.innerText = total;

}
//product details
function showProducts(id){

const product = products.find(p => p.id === id);

localStorage.setItem("selectedProduct", JSON.stringify(product));

window.location.href = "productdetails.html";

}


// Checkout Calculation
function checkout(){

const cart = getCart();

const subtotal = cart.reduce(
(sum,item)=>sum + item.price * item.qty ,0
);

const tax = subtotal * 0.15;

const shipping = subtotal > 5000 ? 0 : 100;

const grandTotal = subtotal + tax + shipping;

document.getElementById("subtotal").innerText = subtotal;
document.getElementById("tax").innerText = tax.toFixed(2);
document.getElementById("shipping").innerText = shipping;
document.getElementById("grandTotal").innerText = grandTotal.toFixed(2);
document.getElementById("grandTotal").style.color="red";

}


// Place Order
function placeOrder(){

alert("Order placed successfully!");

localStorage.removeItem("cart");

window.location.href = "index.html";

}