import "./styles.css";
import { createHome, addCardProgress } from "./home.js";

console.log('js loaded')

document.addEventListener("DOMContentLoaded", () => {
    createHome()
    addCardProgress('random','card');
    const addBtn = document.querySelector('.addBtn');
    addBtn.addEventListener('click', () => {
        console.log('btn clicked');
    })
});

