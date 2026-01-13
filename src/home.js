const content = document.getElementById('app');

const createHome = function () {
    content.innerHTML = ''

    const main = document.createElement('div');
    main.id = 'main';

    
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    ul.id = 'navUl';
    let arr = ['Dashboard','Tasks','Notes','Email','Calender','Reports','Contacts','Invite Team'];
    const logo = document.createElement('div');
    logo.id = 'logo';
    const logoH1 = document.createElement('h1');
    logoH1.textContent = 'Logo';
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
    const team = document.createElement('div');
    team.id = 'workspace';
    const teamLogo = document.createElement('div');
    const teamTitle = document.createElement('h1');
    teamTitle.textContent = 'Perception';
    const teamWorkspace = document.createElement('p');
    teamWorkspace.textContent = 'Workspace';
    team.append(teamLogo,teamTitle,teamWorkspace);
    navSide.append(h1Mainmenu, ul)
    nav.append(logo,navSide,team);
    main.appendChild(nav);

    const tasksContainer = document.createElement('div');
    tasksContainer.id = 'tasksContainer';
    const tasksInprogress = document.createElement('div');
    tasksInprogress.classList.add('tasksInprogress');
    const tasksInProgressWrapper = document.createElement('div')
    tasksInProgressWrapper.classList.add('tasksInProgressWrapper')
    tasksInProgressWrapper.append(tasksInprogress)

    const tasksInreview = document.createElement('div');
    tasksInreview.classList.add('tasksInreview');
    const tasksInReviewWrapper = document.createElement('div')
    tasksInReviewWrapper.classList.add('tasksInReviewWrapper')
    tasksInReviewWrapper.append(tasksInreview)

    const tasksCompleted = document.createElement('div');
    tasksCompleted.classList.add('tasksCompleted');
    const tasksCompletedWrapper = document.createElement('div')
    tasksCompletedWrapper.classList.add('tasksCompletedWrapper')
    tasksCompletedWrapper.append(tasksCompleted)

    tasksInprogress.classList.add('taskContain');
    tasksInreview.classList.add('taskContain');
    tasksCompleted.classList.add('taskContain');

    const tasksInner = document.createElement('div');
    tasksInner.id = 'tasksInner';

    tasksInner.append(tasksInProgressWrapper, tasksInReviewWrapper, tasksCompletedWrapper)
    tasksContainer.appendChild(tasksInner)

    main.appendChild(tasksContainer)


    content.append(main);
};



function addCardProgress(title, summary) {
    const progress = document.querySelector('.tasksInprogress'); // or .tasksInprogress
    const cardDiv = document.createElement('div');

    const cardH1 = document.createElement('h1');
    cardH1.textContent = title;

    const cardP = document.createElement('p');
    cardP.textContent = summary;

    cardDiv.append(cardH1, cardP);
    progress.append(cardDiv);
}



module.exports = { createHome, addCardProgress }