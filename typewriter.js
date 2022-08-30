"use strict";

document.addEventListener("DOMContentLoaded", init);

let typewritten;
let savedText;
let textLenght;
let ite = 0;

function init() {
  typewritten = document.querySelector(".typewritten");
  savedText = typewritten.textContent;
  textLenght = savedText.length;
  typewritten.textContent = "";
  loop();
}

function loop() {
  console.log(textLenght);

  if (textLenght > ite) {
    typewritten.textContent += savedText.charAt(ite);
    ite++;

    setTimeout(loop, 500);
  }
}
