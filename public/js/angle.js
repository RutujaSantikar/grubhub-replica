"use strict";
const dropDownBtn = document.getElementById("show-content-1");
dropDownBtn.addEventListener("click", function () {
    console.log("clickedd");

  document.getElementById("show-content-2").classList.toggle("show");
});
