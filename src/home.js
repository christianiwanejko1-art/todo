const content = document.getElementById('app');

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



function addCardProgress(title, summary, progress) {
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
    const cardH1 = document.createElement('h1');
    cardH1.textContent = title;

    const cardP = document.createElement('p');
    cardP.textContent = summary;

    svg.addEventListener('click', (x) => {
        x.currentTarget.parentElement.remove();
    })

    cardDiv.append(svg, cardH1, cardP);
    progress1.appendChild(cardDiv);

    cardDiv.addEventListener('click', e => {
        let current = 'tasksInprogress';
        if (e.target.closest('.icon')) return;
            e.stopPropagation();
            current = [...cardDiv.parentElement.classList].find(c => {
                return ['tasksInprogress2', 'tasksInreview2', 'tasksCompleted2'].includes(c)
            })
        const remove = document.getElementById('modal2');
        remove.classList.remove('hiddenitem2')
        if (current == 'tasksInreview'){
            current = 'In review';
        } else if (current == 'tasksCompleted'){
            current = 'Completed';
        } else {
            current = 'In progress';
        }
        form2.addEventListener('submit', () => {
            if (form2.querySelector('input[name="choice"]:checked')?.value === 'In review') {
                cardDiv.classList.add('tasksInreview');
                const clone = cardDiv.cloneNode(true);
                const tasksReview = document.querySelector('.tasksInreview2')
                cardDiv.classList.remove('tasksInprogress');
                cardDiv.classList.remove('tasksCompleted');
                cardDiv.remove()
                let svg1 = clone.querySelector('svg')
                svg1.addEventListener('click',(x)=>{
                    x.currentTarget.parentElement.remove();
                })
                tasksReview.appendChild(clone);
                remove.classList.add('hiddenitem2')

            } else if (form2.querySelector('input[name="choice"]:checked')?.value === 'Completed') {
                cardDiv.classList.add('tasksCompleted');
                const clone = cardDiv.cloneNode(true);
                const tasksComplete = document.querySelector('.tasksCompleted2')
                cardDiv.classList.remove('tasksInprogress');
                cardDiv.classList.remove('tasksInreview');
                cardDiv.remove()
                let svg1 = clone.querySelector('svg')
                svg1.addEventListener('click',(x)=>{
                    x.currentTarget.parentElement.remove();
                })
                tasksComplete.appendChild(clone);
                remove.classList.add('hiddenitem2')
            } else {
                cardDiv.classList.add('tasksInprogress');
                const clone = cardDiv.cloneNode(true);
                const tasksInprogress = document.querySelector('.tasksInprogress2')
                cardDiv.classList.remove('tasksCompleted');
                cardDiv.classList.remove('tasksInreview');
                cardDiv.remove()
                let svg1 = clone.querySelector('svg')
                svg1.addEventListener('click',(x)=>{
                    x.currentTarget.parentElement.remove();
                })
                tasksInprogress.appendChild(clone);
                remove.classList.add('hiddenitem2')

            }
        })
    })





}




module.exports = { createHome, addCardProgress }