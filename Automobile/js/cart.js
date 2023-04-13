const cartAmountElem = document.querySelector('.cartAmount')
const cartElem = document.querySelector('.cartElem')
const labelElem=document.querySelector('.label')

function getLocalStorage() {
  return localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : []
}

let cartBasket = getLocalStorage()

document.addEventListener('readystatechange', (event) => {
    if (event.target.readyState==='complete') {
        calculation();
        retrieveCartItems();
        totalBill();
    }
})

const calculation = () => {
  const items = cartBasket.map((number) => number.item)
  const add = items.reduce((x, y) => x + y, 0)
  cartAmountElem.innerHTML = add
}


const retrieveCartItems = () => {
    
    if (cartBasket.length !=0) {
        const items = cartBasket.map((car) => {
        console.log(cartBasket);
        const { id, item } = car
        const search = CarData.find((car) => car.id === id)
       // console.log(search);
        const { name, price, properties, img } = search
        return `
        <div class="carts">
            <div class="carts-img">
                <img src=${img}>
            </div>
            <div class="carts-info">

                <div class="name">
                    <h3>${name}</h3>
                    <i class='bx bxs-trash' onclick='deleteCart(${id})'></i>
                </div>

                <div class="price">
                    <p class="term">price</p>
                    <p class="amount">$ ${price}</p>
                </div>


                <ul class="properties">
                   <li><span>Drivetrain </span> ${properties[0]}</li>
                            <li><span>Engine </span> ${properties[1]}</li>
                            <li><span>Horsepower </span> ${properties[2]}</li>
                            <li><span>Transmission </span> ${properties[3]}</li>
                </ul>
                <div class="btn-qty-cart">
                    <div class="btn-qty">
                        <h5>quantity</h5>
                        <div class="buttons">
                            <i class='bx bx-minus' onclick='decrement(${id})'></i>
                            <div class="quantity" id='${id}'>${item}</div>
                            <i class='bx bx-plus' onclick='increment(${id})'></i>
                        </div>
                        <div class="total">
                            <h4>$ 
                            ${Math.round(price*item)}
                            </h4>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        `
        
    }).join('')
    cartElem.innerHTML = items
    totalBill()
} else {
    cartElem.innerHTML=''
    labelElem.innerHTML = `
        <h2>Cart is Empty</h2>
    <a href="index.html">
        <button type="button" class="btn">Back to Home</button>
        `
}
}




const increment = (id) => {
    let selectedItem = id
    const data = cartBasket.find((item) => item.id === selectedItem.id)
    if (!data) {
        cartBasket.push({
            id: selectedItem.id,
            item:1,
        })
    } else {
data.item+=1
    }
    const element = document.getElementById(selectedItem.id)
    element.innerText = data.item
    calculation()
    totalBill()
    retrieveCartItems()
    setLocalStorage()
}

const decrement = (id) => {
     let selectedItem = id
    const data = cartBasket.find((item) => item.id === selectedItem.id)
    if (data===undefined) {
        return
    }else if (data.item===0) {
        return
    } else {
        data.item-=1
    }
    const element = document.getElementById(selectedItem.id)
    element.innerText = data.item
    cartBasket = cartBasket.filter((car) => car.item !== 0)
    calculation()
    totalBill()
    retrieveCartItems()
    setLocalStorage()
}

const deleteCart = (id) => {
    let selectedItem = id
    cartBasket = cartBasket.filter((item) => item.id !== selectedItem.id)
    calculation()
    totalBill()
    retrieveCartItems()
    setLocalStorage()
}

function totalBill () {
    if (cartBasket.length !==0) {
        const amount = cartBasket.map((carPrice) => {
            const { id, item } = carPrice
            const search = CarData.find((car) => car.id === id)
            const {price}=search
            return item*price
        }).reduce((x, y) => x + y, 0)
        
        labelElem.innerHTML = `
        <h2>Total Bill : $ ${amount.toFixed(2)}</h2>
    <div class="total-bill-btn">
        <button class="checkout">Checkout</button>
        <button class="removeAll" onclick='Clear()'>Clear Cart</button>
    </div>
        `
    } else return
}


function setLocalStorage() {
  return localStorage.setItem('data',JSON.stringify(cartBasket))
}

const Clear = () => {
    cartBasket=[]
    retrieveCartItems()
    calculation()
    setLocalStorage()
}
