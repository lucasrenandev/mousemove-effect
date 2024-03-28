"use strict";

const section = document.querySelector(".section");
const cursor = document.querySelector(".cursor");

for(let i = 0; i < 150; i++) {
    const container = document.querySelector(".container");
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
}

section.addEventListener("mousemove", (event) => {
    const pageX = event.clientX;
    const pageY = event.clientY;

    cursor.style.left = (pageX - 250) + "px";
    cursor.style.top = (pageY - 250) + "px";
});