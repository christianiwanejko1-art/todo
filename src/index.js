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

  const form1 = document.querySelector('.form1')

  form1.addEventListener("submit", (e) => {
  e.preventDefault();

    const title = document.querySelector('[id="title"]').value;
    const summary = document.querySelector('[id="summary"]').value;
    const choice = document.querySelector('input[name="choice"]:checked').value;

  addCardProgress(title, summary, choice)
});
const form2 = document.querySelector(".form2");
const modal2 = document.querySelector(".modal2");

form2.addEventListener("submit", (e) => {
  e.preventDefault(); // 🚫 stop page reload

  // 👉 handle form data here
  // const data = new FormData(form);

  // ✅ close form
  form2.classList.add("hiddenitem2");
  modal2.classList.add("hiddenitem2");
});


});

