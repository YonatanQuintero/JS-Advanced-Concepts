//Amazon shopping

//Implement a cart feature:
// 1. Add items to cart
// 2. Add 3% tax to item in cart
// 3. Buy Item: cart --> purchases
// 4. Empty cart

//Bonus:
// Accept refunds
// Track user history

const user = {

    name:'kim',
    active:true,
    cart:[],
    purchases:[],
    history:[]

}

const TAG = {

    ADD_ITEM: 'ADD ITEM',
    BUY_ITEM: 'BUY ITEM',
    REFUND_ITEM: 'REFUND ITEM'

}

const tax = 0.03

function createItem(name, price){

    return {name,price}

}

function createHistory(timestamp, item, tag){
    
    return {item, tag}

}

const items = [createItem('shirt',50), createItem('jeans',150), createItem('shoes',300)]

//add items
function addItemsToCart(user,item){

    item.tax = tax * item.price
    item.total = item.tax + item.price
    user.cart.push(item)
    user.history.push(new Date(), item, TAG.ADD_ITEM)

}

//buy item
function buyItem(user, emptyCart){

    user.cart.forEach(item => {

        user.purchases.push(item)
        user.history.push(new Date(), item, TAG.BUY_ITEM)

    })

    emptyCart(user)

}

//empty cart
function emptyCart(user){

    user.cart = []

}

//remove item
function removeItem(items, item) { 
    
    return items.filter(i => {return i.name != item.name })

}


//refund item
function refundItem(user, item){

    user.purchases = removeItem(user.purchases,item)
    user.history.push(new Date(), item, TAG.REFUND_ITEM)

}

//add item
addItemsToCart(user, items[0])
addItemsToCart(user, items[1])
//console.log('Add Item',user)

//buy item
buyItem(user, emptyCart)
//console.log('Buy Item',user)

//refund item
refundItem(user,items[0])
//console.log('refund item',user)

user.history.forEach(el => console.log(el))



