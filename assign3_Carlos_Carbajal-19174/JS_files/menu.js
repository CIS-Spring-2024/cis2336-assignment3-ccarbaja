

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

/*const burritoquantity = document.querySelector("#burritoquantity");*/
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
let tax = .0625;
let taxTotal=0;
burritobtn.addEventListener('click', () => {
    const burritoquantity = document.querySelector("#burritoquantity");
    quantity = burritoquantity.value;
    orderTotal+=(quantity * 8.99)+((quantity * 8.99)* tax);
    taxTotal= "Tax: $" + ((quantity * 8.99)* tax);
    newTotal = "Total: $" + orderTotal.toFixed(2);
    document.querySelector("#ordertotal").textContent=newTotal; 
    document.querySelector("#taxtotal").textContent=taxTotal;

});

omelettebtn.addEventListener('click', () => {
    const omelettequantity = document.querySelector("#omelettequantity");
    quantity = omelettequantity.value;
    orderTotal+=(quantity * 10.99)+((quantity * 10.99)* tax);
    newTotal = "Total: $" + orderTotal.toFixed(2);
    taxTotal= "Tax: $" + ((quantity * 10.99)* tax);
    document.querySelector("#ordertotal").textContent=newTotal;
    document.querySelector("#taxtotal").textContent=taxTotal; 

});

chickenwafflesbtn.addEventListener('click', () => {
    const chickenwafflesquantity = document.querySelector("#chickenwafflesquantity");
    quantity = chickenwafflesquantity.value;
    orderTotal+=(quantity * 13.99)+((quantity * 13.99)* tax);
    newTotal = "Total: $" + orderTotal.toFixed(2);
    taxTotal= "Tax: $" + ((quantity * 13.99)* tax);
    document.querySelector("#ordertotal").textContent=newTotal;
    document.querySelector("#taxtotal").textContent=taxTotal; 

});

veganbtn.addEventListener('click', () => {

    if (veganmenu.style.display === "none") {
        veganmenu.style.display = "grid";
        burgermenu.style.display ="none";
        breakfastmenu.style.display ="none";
        pastamenu.style.display ="none";
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
    }
    else {
        burgermenu.style.display = "none";
    }
});


document.addEventListener('DOMContentLoaded',()=>{
    console.log("content loaded");
    veganmenu.style.display ="none";
    burgermenu.style.display ="none";
    breakfastmenu.style.display ="none";
    pastamenu.style.display ="none";
});