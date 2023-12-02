console.log("Cześć!");

let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");
let header = document.querySelector(".header");
let table = document.querySelector(".table")
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

button1.addEventListener("click", () => {
    header.remove();
});

button2.addEventListener("click", () => {
    body.classList.toggle("dark");
    themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
});

button3.addEventListener("click", () => {
    table.remove();
});
console.log(przycisk);
console.log(przycisk2);


