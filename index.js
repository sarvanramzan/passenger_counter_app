import {increment, save} from "./functions.js";

const incrementBtn = document.getElementById("increment-btn");
const saveBtn = document.getElementById("save-btn");

incrementBtn.addEventListener("click", function() {
    increment();
})

saveBtn.addEventListener("click", function() {
    save();
})