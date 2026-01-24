const content = document.getElementById('app');
const remove = document.getElementById('modal2');
let taskId
const form2 = document.getElementById('form2');
form2.addEventListener('submit', (e) => {
  console.log('SUBMITTED FORM:', e.target, 'id=', e.target.id, 'class=', e.target.className);
  e.preventDefault();
console.log('fired');
  const card = document.querySelector(`[data-id="${taskId}"]`);
  if (!card) return;

  const checkedEl = document.querySelector('input[name="choice2"]:checked');
  if (!checkedEl) return;

  const clone = card
//   clone.dataset.id = crypto.randomUUID();

  if (checkedEl.value === 'In progress') {
    document.querySelector('.tasksInprogress2').appendChild(clone);
  } else if (checkedEl.value === 'In review') {
    document.querySelector('.tasksInreview2').appendChild(clone);
  } else {
    document.querySelector('.tasksCompleted2').appendChild(clone);
  }

  remove.classList.add('hiddenitem2');
}, true);

const createHome = function () {
    content.innerHTML = ''

    const main = document.createElement('div');
    main.id = 'main';

    const navBar = document.createElement('div')
    navBar.classList.add('navBar');
    const ul = document.createElement('ul');
    ul.id = 'navUl';
    let arr = ['Dashboard','Tasks','Notes','Email','Calender','Reports','Contacts','Invite Team'];
    const logo = document.createElement('div');
    logo.id = 'logo';
    const logoH1 = document.createElement('h1');
    logoH1.textContent = 'To do List';
    logo.appendChild(logoH1);
    const navSide = document.createElement('div');
    navSide.id = 'navSide';
    const h1Mainmenu = document.createElement('h1');
    h1Mainmenu.textContent = 'Main Menu';
    for (let i=0; i < 8; i++){
        const li = document.createElement('li');
        li.textContent = arr[i]
        ul.appendChild(li);
    }

    navSide.append(h1Mainmenu, ul)
    navBar.append(logo, navSide)
    main.appendChild(navBar);

    const tasksContainer = document.createElement('div');
    tasksContainer.id = 'tasksContainer';
    const addDiv = document.createElement('div');
    addDiv.classList.add('addDiv');
    const addBtn = document.createElement('button');
    addBtn.classList.add('addBtn');
    addBtn.textContent = 'Add Task'
    addDiv.appendChild(addBtn);
    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Tasks List';
    const tasksInprogress = document.createElement('div');
    tasksInprogress.classList.add('tasksInprogress2');
    const tasksinprogressH1 = document.createElement('h1');
    tasksinprogressH1.classList.add('tasksinprogressH1');
    tasksinprogressH1.textContent = 'In Progress';
    tasksInprogress.appendChild(tasksinprogressH1);
    const tasksInProgressWrapper = document.createElement('div')
    tasksInProgressWrapper.classList.add('tasksInProgressWrapper')
    tasksInProgressWrapper.append(tasksInprogress)

    const tasksInreview = document.createElement('div');
    tasksInreview.classList.add('tasksInreview2');
    const tasksinreviewH1 = document.createElement('h1');
    tasksinreviewH1.classList.add('tasksinreviewH1');
    tasksinreviewH1.textContent = 'In Review';
    tasksInreview.appendChild(tasksinreviewH1);
    const tasksInReviewWrapper = document.createElement('div')
    tasksInReviewWrapper.classList.add('tasksInReviewWrapper')
    tasksInReviewWrapper.append(tasksInreview)

    const tasksCompleted = document.createElement('div');
    tasksCompleted.classList.add('tasksCompleted2');
    const taskscompletedH1 = document.createElement('h1');
    taskscompletedH1.classList.add('taskscompletedH1');
    taskscompletedH1.textContent = 'Completed';
    tasksCompleted.appendChild(taskscompletedH1);
    const tasksCompletedWrapper = document.createElement('div')
    tasksCompletedWrapper.classList.add('tasksCompletedWrapper')
    tasksCompletedWrapper.append(tasksCompleted)

    tasksInprogress.classList.add('taskContain');
    tasksInreview.classList.add('taskContain');
    tasksCompleted.classList.add('taskContain');

    const tasksInner = document.createElement('div');
    tasksInner.id = 'tasksInner';

    tasksInner.append(tasksInProgressWrapper, tasksInReviewWrapper, tasksCompletedWrapper)
    tasksContainer.append(tasksInner,title,addDiv)

    main.appendChild(tasksContainer)


    content.append(main);
};

let activeCard = null;


function addCardProgress(title, summary, progress, randomId) {
    const form2 = document.getElementById('form2');
    let progress1 = document.querySelector('.tasksInprogress2'); // default
    if (progress == 'In review') {
        progress1 = document.querySelector('.tasksInreview2')
    } else if (progress == 'Completed') {
        progress1 = document.querySelector('.tasksCompleted2');
    }
    const NS = "http://www.w3.org/2000/svg";

    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.classList.add("icon", "icon-close"); // 👈 add class(es)

    const path = document.createElementNS(NS, "path");
    path.setAttribute(
    "d",
    "M9,7L11,12L9,17H11L12,14.5L13,17H15L13,12L15,7H13L12,9.5L11,7H9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z"
    );

    svg.appendChild(path);

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.dataset.id = randomId;
    const cardH1 = document.createElement('h1');
    cardH1.textContent = title;
    const cardP = document.createElement('p');
    cardP.textContent = summary;

    svg.addEventListener('click', (x) => {
        x.currentTarget.parentElement.remove();
    })

    activeCard = cardDiv; // ✅ remember WHICH card
    cardDiv.append(svg, cardH1, cardP);
    cardDiv.addEventListener('click', e => {
        let current = 'tasksInprogress';
        if (e.target.closest('.icon')) return;
        const card = e.target.closest('.card');
        taskId = card.dataset.id;
        if (!card) return;
            e.stopPropagation();
            current = [...cardDiv.parentElement.classList].find(c => {
                return ['tasksInprogress2', 'tasksInreview2', 'tasksCompleted2'].includes(c)
            })
            console.log(current);
            remove.classList.remove('hiddenitem2')
            if (current == 'tasksInreview'){
                current = 'review';
            } else if (current == 'tasksCompleted'){
                current = 'completed';
            } else {
                current = 'progress';
            }


        })
    progress1.appendChild(cardDiv);







}




module.exports = { createHome, addCardProgress }