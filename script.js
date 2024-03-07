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
        name: "IPHONE 15 125GB-YELLOW",
        images: "1.png",
        price: 15000
    },
    {
        id: 2,
        name: "IPHONE 15 256GB-PINK",
        images: "2.png",
        price: 19000
    },
    {
        id: 3,
        name: "IPHONE 15 125GB-BLACK",
        images: "3.png",
        price: 15000
    },
    {
        id: 4,
        name: "IPHONE 15 125GB-GREEN",
        images: "4.png",
        price: 15000
    },
    {
        id: 5,
        name: "IPHONE 15 256GB-BLUE",
        images: "5.png",
        price: 15000
    },
    {
        id: 6,
        name: "AirPods",
        images: "6.png",
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
           <button onclick = "addToCart(${key})">Add To Cart</button>
        `
        // add to list via appendChild
        list.appendChild(newDiv)
    });
};

// call the function initApp
initApp()

// create function called add to cart
const addToCart = key => {
    if(listCarts[key] == null) {
        listCarts[key] = JSON.parse(JSON.stringify(products[key]));
       
        listCarts[key].quantity = 1;
       
    }

    reloadCart()
}


const reloadCart = () => {
    listCart.innerHTML = "";
    let count = 0;
    let totalPrice = 0;

    for (let key in listCarts) {
        let value = listCarts[key];
        totalPrice += value.price;
        count += value.quantity;

        let newDiv = document.createElement("li");
        newDiv.innerHTML = `
            <div><img src="img/${value.images}"></div>
            <div class="cartTitle">${value.name}</div>
            <div class="cartPrice">${value.price.toLocaleString()}</div>

            <div>
                <button style="background-color: #354649;" class="cartButton" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                <div class="count">${value.quantity}</div>
                <button style="background-color: #354649;" class="cartButton" onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
            </div>
        `;
        listCart.appendChild(newDiv);
    }

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
