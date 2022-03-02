"use strict";
let screen = document.querySelector(".box");
const clear = document.querySelector(".btn-clear");
const del = document.querySelector(".btn-delete");
const equal = document.querySelector(".btn-equal");
const btn = document.querySelectorAll(".btn");

btn.forEach(btn => {
  btn.addEventListener("click", function (e) {
    const value = e.target.dataset.num;
    // console.log(value);
    screen.value += value;
  });
});
clear.addEventListener("click", function () {
  // console.log('working');
  screen.value = "";
});
del.addEventListener("click", function () {
  // console.log('working');
  screen.value = screen.value.slice(0, -1);
});
equal.addEventListener("click", function () {
  console.log(eval(screen.value));

  // const ans = eval(screen.value);
  // screen.value = ans;
});
