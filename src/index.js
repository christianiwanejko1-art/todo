import "./styles.css";
import { createHome, addCardProgress } from "./home.js";

console.log('js loaded')

document.addEventListener("DOMContentLoaded", () => {
    createHome()
    addCardProgress('Wireframing','Creating wireframes based on user research');

    const addBtn = document.querySelector('.addBtn');
    addBtn.addEventListener('click', () => {
        document.querySelectorAll(".hiddenitem").forEach(el => {
        el.classList.remove("hiddenitem");
        });

    });

    const overlay = document.querySelector('.hidden')
    const modal = document.getElementById('form');
      overlay.addEventListener("click", (e) => {
    if (!modal.contains(e.target)) {
      overlay.classList.add("hiddenitem");
    }
  });

  form.addEventListener("submit", (e) => {
  e.preventDefault();

    const title = document.querySelector('[id="title"]').value;
    const summary = document.querySelector('[id="summary"]').value;
    const choice = document.querySelector('input[name="choice"]:checked').value;

  addCardProgress(title, summary, choice)
});



});

