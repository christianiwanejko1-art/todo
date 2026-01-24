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
    // states[type].push({'type': type, 'id':randomId})
  addCardProgress(title, summary, choice, randomId)
  

});


const el = document.getElementById('mobileNavContainer');
const bg = document.getElementById('mobileNav');
const svg1 = document.getElementById('svgBurger');

svg1.addEventListener('click',()=>{
  if (bg.classList.contains('hidden1')){
    bg.classList.remove('hidden1');
  } else {
    bg.classList.add('hidden1');
  }
})
function handleResize() {
  if (window.innerWidth < 768) {
    svg1.classList.remove('hidden1')
    el.classList.remove('hidden1');

  } else {
    svg1.classList.add('hidden1')
    el.classList.add('hidden1');
  }
}

window.addEventListener('resize', handleResize)

const parent = document.querySelector('.mobileNavContainer');

molbileNav.querySelectorAll('*').forEach(child => {
  child.classList.add('hidden1');    // add
  // child.classList.remove('active'); // remove
});





});

