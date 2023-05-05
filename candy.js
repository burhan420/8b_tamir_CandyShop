const products = [
    {
      name: "Troppifrutt",
      price: 2200,
      description:"Haribo",           
      type: "gummy",
      image:
        "https://c-pi.niceshops.com/upload/image/product/large/default/44542_d7959bf8.1024x1024.jpg",
       
    },
    {
      name: "Wackerlgiester",
      price: 4300,
      description:"Haribo", 
      type: "gummy",
      image:
        "https://economycandy.com/wp-content/uploads/2021/12/9a7f826a-2627-4198-bfdc-55aceded95c5-600x600.jpeg",
    },
    {
      name: "Rainbow Worms",
      price: 1500,
      description:"Haribo",      
      type: "gummy",
      image:
        "https://target.scene7.com/is/image/Target/GUEST_f6071de2-2ea8-44c6-ad12-46bb98d10ca4?wid=488&hei=488&fmt=pjpeg",
    },
    {
      name: "Peaches",
      price: 3500,
      description:"Haribo",
      type: "gummy",
      image:
        "https://candyfunhouse.ca/cdn/shop/products/Candyfunhouse_haribo_peaches_142g-Side-jpg-1_800x.jpg?v=1626118327",
    },
    {
      name: "Watermelon",
      price: 3200,
      description:"Haribo",
      type: "gummy",
      image:
      "https://germandeli.co.uk/media/catalog/product/cache/f35643d208ec106a4ff297510cc0f524/m/e/melonen_1.png" 

    },
];

function PrintProducts() {
const productsContainer = document.getElementById("products");
let newDiv = "";

for (let i = 0; i < products.length; i++) {
  const product = products[i];

  console.log(product.name - product.price);

  const div = document.createElement("div");
  div.classList.add("product");
  div.innerHTML = `
    <img class='productImage' src="${product.image}"
    <h3 class="title">${product.name}</h3>
    <p>${product.description}</p>
    <p id="price">${product.price}</p>
    <button onclick="AddItem('${product.name}')">+</button>
    <button onclick="MinusItem('${product.name}')">-</button>
  `;

  newDiv += div.outerHTML;
}

productsContainer.innerHTML = newDiv;
}

window.onload = PrintProducts;

const userbasket = [];

function AddItem(itemName) {
const itemIndex = userbasket.findIndex((item) => item.name === itemName);

if (itemIndex !== -1) {
  userbasket[itemIndex].quantity += 1;
} else {
  userbasket.push({ name: itemName, quantity: 1 });
}

Basket();
}

function MinusItem(itemName) {
const itemIndex = userbasket.findIndex((item) => item.name === itemName);

if (itemIndex !== -1) {
  userbasket[itemIndex].quantity -= 1;

  if (userbasket[itemIndex].quantity === 0) {
    userbasket.splice(itemIndex, 1);
  }
}

Basket();
}

function Purchase() {
let total = 0;
for (let i = 0; i < userbasket.length; i++) {
  const { name, quantity } = userbasket[i];
  const product = products.find((p) => p.name === name);
  if (product) {
    total += product.price * quantity;
  }
}

document.getElementById("total").innerHTML = total;
Clear();
}

function Clear() {
userbasket = [];
}

function Basket() {
const basketDiv = document.getElementById("basket");
const basketHtml = userbasket
  .map(
    ({ name, quantity }) => `
  <h1>${name} - ${quantity}</h1>
`
  )
  .join("");
basketDiv.innerHTML = basketHtml;
}
function loginruu() {
    window.location.href = "https://burhan420-probable-disco-pvxgp779jg6crrw9-5500.preview.app.github.dev/login.html";
}
  function signluu() {
    window.location.href = "https://burhan420-probable-disco-pvxgp779jg6crrw9-5500.preview.app.github.dev/signup.html";
}
  
  