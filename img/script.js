// define the variables
const openShopping = document.querySelector(".shopping"),
      closeShopping = document.querySelector(".closeShopping"),
      body = document.querySelector("body"),
      list= document.querySelector(".list"),
      listCart = document.querySelector(".listCart"),
      total = document.querySelector(".total"),
      quantity = document.querySelector(".quantity")

// add Event listeners to closeShopping openShopping
openShopping.addEventListener("click", () => {
    body.classList.add("active");
})

closeShopping.addEventListener("click", () => {
    body.classList.remove("active")
})

// create animate the product information and images
let products = [
    {
        id: 1,
        name: "PRODUCT 1",
        images: "1.PNG",
        price: 15000
    },
    {
        id: 2,
        name: "PRODUCT 2",
        images: "2.PNG",
        price: 19000
    },
    {
        id: 3,
        name: "PRODUCT 3",
        images: "3.PNG",
        price: 15000
    },
    {
        id: 4,
        name: "PRODUCT 4",
        images: "4.PNG",
        price: 15000
    },
    {
        id: 5,
        name: "PRODUCT 5",
        images: "5.PNG",
        price: 15000
    },
    {
        id: 6,
        name: "PRODUCT 6",
        images: "1.PNG",
        price: 15000
    }
];

// create empty array called listCarts
let listCarts = [];

// create function called initApp and loop elements of the products 
const initApp = () => {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
           <img src ="img/${value.images}">
           <div class="title">${value.name}</div>
           <div class="price">${value.price.toLocaleString()}</div>
           <button onclick="addToCart(${key})"Add To Cart</button>
        `
        // add to list via appendChild
        list.appendChild(newDiv)
    });
};

// call the function initApp
initApp()

