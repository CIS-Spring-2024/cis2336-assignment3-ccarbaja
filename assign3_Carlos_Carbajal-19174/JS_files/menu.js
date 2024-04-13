
function FoodItem(name, price, quantity){
    this.name=name;
    this.price=price;
    this.quantity=quantity;
}

let foodarray = new Array();

const burgerbtn= document.querySelector("#burgerbtn");
const burgermenu = document.querySelector("#burgermenu");
const pastabtn= document.querySelector("#pastabtn");
const pastamenu = document.querySelector("#pastamenu");
const breakfastbtn= document.querySelector("#breakfastbtn");
const breakfastmenu = document.querySelector("#breakfastmenu");
const veganbtn= document.querySelector("#veganbtn");
const veganmenu = document.querySelector("#veganmenu");

const burritobtn = document.querySelector("#burritobtn");
const omelettebtn = document.querySelector("#omelettebtn");
const chickenwafflesbtn = document.querySelector("#chickenwafflesbtn");
const saladbtn = document.querySelector("#saladbtn");
const joebtn = document.querySelector("#joebtn");
const cheeseburgerbtn = document.querySelector("#cheeseburgerbtn");
const farmercharmbtn = document.querySelector("#farmercharmbtn");
const pizzabtn = document.querySelector("#pizzabtn");
const tofubtn = document.querySelector("#tofubtn");
const alfredobtn = document.querySelector("#alfredobtn");
const lasagnabtn = document.querySelector("#lasagnabtn");
const spaghettibtn = document.querySelector("#spaghettibtn");

var cheeseborderquant=0, farmercharmorderquant=0, sloppyjoeorderquant=0, chickwafforderquant=0, 
burritoorderquant=0, omeletteorderquant=0, pizzaorderquant=0, tofuorderquant=0, saladorderquant=0,
 alfredoorderquant=0, lasagnaorderquant=0, spaghettiorderquant = 0;

const burritoquantity = document.querySelector("#burritoquantity");
const omelettequantity = document.querySelector("#omelettequantity");
const chickenwafflesquantity = document.querySelector("#chickenwafflesquantity");
const saladquantity = document.querySelector("#saladquantity");
const joequantity = document.querySelector("#joequantity");
const cheeseburgerquantity = document.querySelector("#cheeseburgerquantity");
const farmercharmquantity = document.querySelector("#farmercharmquantity");
const pizzaquantity = document.querySelector("#pizzaquantity");
const tofuquantity = document.querySelector("#tofuquantity");
const alfredoquantity = document.querySelector("#alfredoquantity");
const lasagnaquantity = document.querySelector("#lasagnaquantity");
const spaghettiquantity = document.querySelector("#spaghettiquantity");

let orderTotal = 0;
let tax = 0;
let taxTotal=0;

const foodformdisplay = document.querySelector(".checkoutcontainer");

function checkQuantity(quantity, eleid){
    if(quantity==0){
        document.getElementById(eleid).remove();
    }
}

cheeseburgerbtn.addEventListener('click', () => {
    var cheeseburgerquantity = document.querySelector("#burgerquantity");
    var quantity = cheeseburgerquantity.value;
    console.log(1);
    cheeseborderquant= cheeseborderquant + Number(quantity);
    console.log(1);
    tax+=((quantity * 14.99)* .0625);
    orderTotal+=(quantity * 14.99)+ tax;
    taxTotal= "Tax: $" + tax.toFixed(2);
    newTotal = "Total: $" + orderTotal.toFixed(2);
    console.log(2);
    document.querySelector("#ordertotal").textContent=newTotal; 
    document.querySelector("#taxtotal").textContent=taxTotal;
    displayFood(cheeseborderquant, "Amazing Cheeseburger $14.99","itemsInCart1");
    console.log(3);
});

joebtn.addEventListener('click', () => {
    var joequantity = document.querySelector("#joequantity");
    var quantity = joequantity.value;
    sloppyjoeorderquant = sloppyjoeorderquant + Number(quantity);
    tax+=((quantity * 10.99)* .0625);
    orderTotal+=(quantity * 10.99)+ tax;
    taxTotal= "Tax: $" + tax.toFixed(2);
    newTotal = "Total: $" + orderTotal.toFixed(2);
    document.querySelector("#ordertotal").textContent=newTotal; 
    document.querySelector("#taxtotal").textContent=taxTotal;
    displayFood(sloppyjoeorderquant, "The Joe $10.99","itemsInCart2");
});



farmercharmbtn.addEventListener('click', () => {
    var farmercharmquantity = document.querySelector("#farmercharmquantity");
    var quantity = farmercharmquantity.value;
    farmercharmorderquant+=Number(quantity);
    tax+=((quantity * 13.99)* .0625);
    orderTotal+=(quantity * 13.99)+ tax;
    taxTotal= "Tax: $" + tax.toFixed(2);
    newTotal = "Total: $" + orderTotal.toFixed(2);
    document.querySelector("#ordertotal").textContent=newTotal; 
    document.querySelector("#taxtotal").textContent=taxTotal;
    displayFood(farmercharmorderquant, "Farmer Charmer $13.99","itemsInCart3");
});

pizzabtn.addEventListener('click', () => {
    var pizzaquantity = document.querySelector("#pizzaquantity");
    var quantity = pizzaquantity.value;
    pizzaorderquant+= Number(quantity);
    tax+=((quantity * 14.99)* .0625);
    orderTotal+=(quantity * 14.99)+ tax;
    taxTotal= "Tax: $" + tax.toFixed(2);
    newTotal = "Total: $" + orderTotal.toFixed(2);
    document.querySelector("#ordertotal").textContent=newTotal; 
    document.querySelector("#taxtotal").textContent=taxTotal;
    displayFood(pizzaorderquant, "Farmer Charmer $13.99","itemsInCart3");
});

tofubtn.addEventListener('click', () => {
    const tofuquantity = document.querySelector("#tofuquantity");
    quantity = tofuquantity.value;
    tax+=((quantity * 11.79)* .0625);
    orderTotal+=(quantity * 11.79)+ tax;
    taxTotal= "Tax: $" + tax.toFixed(2);
    newTotal = "Total: $" + orderTotal.toFixed(2);
    document.querySelector("#ordertotal").textContent=newTotal; 
    document.querySelector("#taxtotal").textContent=taxTotal;
    foodformdisplay.style.display="block";
});

saladbtn.addEventListener('click', () => {
    const saladquantity = document.querySelector("#saladquantity");
    quantity = saladquantity.value;
    tax+=((quantity * 9.50)* .0625);
    orderTotal+=(quantity * 9.50)+ tax;
    taxTotal= "Tax: $" + tax.toFixed(2);
    newTotal = "Total: $" + orderTotal.toFixed(2);
    document.querySelector("#ordertotal").textContent=newTotal; 
    document.querySelector("#taxtotal").textContent=taxTotal;
    foodformdisplay.style.display="block";
});

alfredobtn.addEventListener('click', () => {
    const alfredoquantity = document.querySelector("#alfredoquantity");
    quantity = alfredoquantity.value;
    tax+=((quantity * 12.99)* .0625);
    orderTotal+=(quantity * 12.99)+ tax;
    taxTotal= "Tax: $" + tax.toFixed(2);
    newTotal = "Total: $" + orderTotal.toFixed(2);
    document.querySelector("#ordertotal").textContent=newTotal; 
    document.querySelector("#taxtotal").textContent=taxTotal;
    foodformdisplay.style.display="block";
});

spaghettibtn.addEventListener('click', () => {
    const spaghettiquantity = document.querySelector("#spaghettiquantity");
    quantity = spaghettiquantity.value;
    tax+=((quantity * 12.99)* .0625);
    orderTotal+=(quantity * 12.99)+ tax;
    taxTotal= "Tax: $" + tax.toFixed(2);
    newTotal = "Total: $" + orderTotal.toFixed(2);
    document.querySelector("#ordertotal").textContent=newTotal; 
    document.querySelector("#taxtotal").textContent=taxTotal;
    foodformdisplay.style.display="block";
});

burritobtn.addEventListener('click', () => {
    const burritoquantity = document.querySelector("#burritoquantity");
    quantity = burritoquantity.value;
    tax+=((quantity * 8.99)* .0625);
    orderTotal+=(quantity * 8.99)+ tax;
    taxTotal= "Tax: $" + tax.toFixed(2);
    newTotal = "Total: $" + orderTotal.toFixed(2);
    document.querySelector("#ordertotal").textContent=newTotal; 
    document.querySelector("#taxtotal").textContent=taxTotal;
    foodformdisplay.style.display="block";
});

omelettebtn.addEventListener('click', () => {
    const omelettequantity = document.querySelector("#omelettequantity");
    quantity = omelettequantity.value;
    tax+=((quantity * 8.99)* .0625);
    orderTotal+=(quantity * 8.99)+ tax;
    taxTotal= "Tax: $" + tax.toFixed(2);
    newTotal = "Total: $" + orderTotal.toFixed(2);
    document.querySelector("#ordertotal").textContent=newTotal;
    document.querySelector("#taxtotal").textContent=taxTotal; 
    foodformdisplay.style.display="block";
});

chickenwafflesbtn.addEventListener('click', () => {
    const chickenwafflesquantity = document.querySelector("#chickenwafflesquantity");
    quantity = chickenwafflesquantity.value;
    tax+=((quantity * 8.99)* .0625);
    orderTotal+=(quantity * 8.99)+ tax;
    taxTotal= "Tax: $" + tax.toFixed(2);
    newTotal = "Total: $" + orderTotal.toFixed(2);
    document.querySelector("#ordertotal").textContent=newTotal;
    document.querySelector("#taxtotal").textContent=taxTotal; 
    foodformdisplay.style.display="block";
});

veganbtn.addEventListener('click', () => {

    if (veganmenu.style.display === "none") {
        veganmenu.style.display = "grid";
        burgermenu.style.display ="none";
        breakfastmenu.style.display ="none";
        pastamenu.style.display ="none";
        document.getElementById("burgerbtn").style.textDecoration="none";
        document.getElementById("veganbtn").style.textDecoration="underline";
        document.getElementById("pastabtn").style.textDecoration="none";
        document.getElementById("breakfastbtn").style.textDecoration="none";
    }
    else {
        veganmenu.style.display = "none";
    }
});

pastabtn.addEventListener('click', () => {

    if (pastamenu.style.display === "none") {
        pastamenu.style.display = "grid";
        burgermenu.style.display ="none";
        breakfastmenu.style.display ="none";
        veganmenu.style.display ="none";
        document.getElementById("burgerbtn").style.textDecoration="none";
        document.getElementById("veganbtn").style.textDecoration="none";
        document.getElementById("pastabtn").style.textDecoration="underline";
        document.getElementById("breakfastbtn").style.textDecoration="none";
    }
    else {
        pastamenu.style.display = "none";
    }
});

breakfastbtn.addEventListener('click', () => {

    if (breakfastmenu.style.display === "none") {
        veganmenu.style.display = "none";
        burgermenu.style.display ="none";
        breakfastmenu.style.display ="grid";
        pastamenu.style.display ="none";
        document.getElementById("breakfastbtn").style.textDecoration="underline";
        document.getElementById("burgerbtn").style.textDecoration="none";
        document.getElementById("veganbtn").style.textDecoration="none";
        document.getElementById("pastabtn").style.textDecoration="none";
    }
    else {
        breakfastmenu.style.display = "none";
    }
});

burgerbtn.addEventListener('click', () => {

    if (burgermenu.style.display === "none") {
        burgermenu.style.display = "grid";
        veganmenu.style.display ="none";
        breakfastmenu.style.display ="none";
        pastamenu.style.display ="none";
        document.getElementById("veganbtn").style.textDecoration="none";
        document.getElementById("pastabtn").style.textDecoration="none";
        document.getElementById("breakfastbtn").style.textDecoration="none";
        document.getElementById("burgerbtn").style.textDecoration="underline";
    }
    else {
        burgermenu.style.display = "grid";
    }
});


function displayFood(foodquantity, foodstring, itemsCart) {
        var outputString = "(" + foodquantity + ") " + foodstring;
        document.getElementById(itemsCart).innerHTML = outputString;
        document.getElementById(itemsCart).style.display="block";
        foodformdisplay.style.display="block";
}


document.addEventListener('DOMContentLoaded',()=>{
    console.log("content loaded");
    veganmenu.style.display ="none";
    burgermenu.style.display ="grid";
    breakfastmenu.style.display ="none";
    pastamenu.style.display ="none";
    document.getElementById("burgerbtn").style.textDecoration="underline";
    document.getElementById("veganbtn").style.textDecoration="none";
    document.getElementById("pastabtn").style.textDecoration="none";
    document.getElementById("breakfastbtn").style.textDecoration="none";
});