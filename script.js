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
        "id": 1,
        "name": "IPHONE 15 125GB-YELLOW",
        "image":"1.png",
        "price": 15000
    },
    {
        "id": 2,
        "name": "IPHONE 15 256GB-PINK",
        "image":"2.png",
        "price": 19000
    },
    {
        "id": 3,
        "name": "IPHONE 15 125GB-BLACK",
        "image":"3.png",
        "price": 15000
    },
    {
        "id": 4,
        "name": "IPHONE 15 125GB-GREEN",
        "image":"4.png",
        "price": 15000
    },
    {
        "id": 5,
        "name": "IPHONE 15 256GB-BLUE",
        "image":"5.png",
        "price": 19000
    },
    {
        "id": 6,
        "name": "AirPods",
        "image":"6.png",
        "price": 7000
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
    if(listCarts[key] == null) {
        listCarts[key] = JSON.parse(JSON.stringify(products[key]));
       
        listCarts[key].quantity = 1;
       
    }

    reloadCart()
}

const reloadCart = () => {
    listCart.innerHTML = "";
    let count = 0;
    let totalPrice= 0;

    listCarts.forEach((value, key) => {
        totalPrice = totalPrice + value.price
        count = count + value.quantity;

        if(value != null) {
            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
                <div><img src = "img/${value.image}"></div>
                <div class = "cartTitle">${value.name}</div>
                <div class = "cartPrice">${value.price.toLocaleString()}</div>

                <div>
                    <button style = "background-color: #354649;" class = "cartButton" onclick = "changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class = "count">${value.quantity}</div>
                    <button style = "background-color: #354649;" class = "cartButton" onclick = "changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `
            listCart.appendChild(newDiv)
        }

        total.innerText = totalPrice.toLocaleString();
        quantity.innerText = count;
    })
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