

const burgerbtn= document.querySelector("#burgerbtn");
const burgermenu = document.querySelector("#burgermenu");
const pastabtn= document.querySelector("#pastabtn");
const pastamenu = document.querySelector("#pastamenu");
const breakfastbtn= document.querySelector("#breakfastbtn");
const breakfastmenu = document.querySelector("#breakfastmenu");
const veganbtn= document.querySelector("#veganbtn");
const veganmenu = document.querySelector("#veganmenu");

const orderbtn = document.querySelector(".orderbtn");

orderbtn.addEventListener('click', () => {
    alert("Successfully added to order!");

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