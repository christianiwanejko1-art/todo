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
    tasksInprogress.classList.add('tasksInprogress');
    const tasksinprogressH1 = document.createElement('h1');
    tasksinprogressH1.classList.add('tasksinprogressH1');
    tasksinprogressH1.textContent = 'In Progress';
    tasksInprogress.appendChild(tasksinprogressH1);
    const tasksInProgressWrapper = document.createElement('div')
    tasksInProgressWrapper.classList.add('tasksInProgressWrapper')
    tasksInProgressWrapper.append(tasksInprogress)

    const tasksInreview = document.createElement('div');
    tasksInreview.classList.add('tasksInreview');
    const tasksinreviewH1 = document.createElement('h1');
    tasksinreviewH1.classList.add('tasksinreviewH1');
    tasksinreviewH1.textContent = 'In Review';
    tasksInreview.appendChild(tasksinreviewH1);
    const tasksInReviewWrapper = document.createElement('div')
    tasksInReviewWrapper.classList.add('tasksInReviewWrapper')
    tasksInReviewWrapper.append(tasksInreview)

    const tasksCompleted = document.createElement('div');
    tasksCompleted.classList.add('tasksCompleted');
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



function addCardProgress(title, summary) {
    const progress = document.querySelector('.tasksInprogress'); // or .tasksInprogress
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const cardH1 = document.createElement('h1');
    cardH1.textContent = title;

    const cardP = document.createElement('p');
    cardP.textContent = summary;

    cardDiv.append(cardH1, cardP);
    progress.append(cardDiv);
}



module.exports = { createHome, addCardProgress }