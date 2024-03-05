// define the variables
const openShopping = document.querySelector(".shopping"),
      closeShopping = document.querySelector(".closeShopping"),
      body = document.querySelector("body"),
      list= document.querySelector(".list"),
      listCart = document.querySelector(".listCart"),
      total = document.querySelector(".total"),
      quantity = document.querySelector(".quantity")

//add Event listeners to closeShopping and openshopping
openShopping.addEventListener("click", () => {
    body.classList.add("active");
})


closeShopping.addEventListener("click", () => {
    body.classList.remove("active")
})

//create and animate the product information and images
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
        images: "6.PNG",
        price: 15000
    }
]

//create empty array called "listCarts"
let listCarts = [];

//create function called initApp and loop elemnts of the products
const initApp = () => {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
            <img src = "img/${value.image}">
            <div class = "title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick = "addToCart(${key})">Add To Cart</button>
        `;

        //add to list via appendChild
        list.appendChild(newDiv)
    })
}

//call the function initApp
initApp()

//create function called add to cart
const addToCart = key => {
    if (listCarts[key] === undefined) {
        listCarts[key] = { ...products[key], quantity: 1 };
    } else {
        listCarts[key].quantity += 1;
    }

    reloadCart();
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
            <div><img src="img/${value.image}"></div>
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



const changeQuantity = (key, quantity) => {
    if(quantity == 0) {
        delete listCarts[key]
    }
    else {
        listCarts[key].quantity = quantity;
        listCarts[key].price = quantity * products[key].price
    }
    reloadCart()
}