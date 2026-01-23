import "./styles.css";
import { createHome, addCardProgress } from "./home.js";

console.log('js loaded')

let states = {
  progress: [],
  review: [],
  complete: []
}

document.addEventListener("DOMContentLoaded", () => {
    createHome()
    // addCardProgress('Wireframing','Creating wireframes based on user research');

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
  const form2 = document.getElementById('form2')

  form1.addEventListener("submit", (e) => {
  e.preventDefault();

    const title = document.querySelector('[id="title"]').value;
    const summary = document.querySelector('[id="summary"]').value;
    const choice = document.querySelector('input[name="choice"]:checked').value;
    let type;
    console.log(choice)
    if (choice === 'In progress'){
      type = 'progress';
    } else if (choice === 'In review'){
      type = 'review';
    } else {
      type = 'complete';
    }
    const randomId = crypto.randomUUID();
    states[type].push({'type': type, 'id':randomId})

    console.log(states)
  addCardProgress(title, summary, choice, randomId)
  const progresscol = document.querySelector('.tasksInprogress2');
  const reviewcol = document.querySelector('.tasksInreview2');
  const completecol = document.querySelector('.tasksCompleted2');


  
  
});





});

