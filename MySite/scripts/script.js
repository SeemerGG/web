function launchButton() {
    let coll = document.getElementsByClassName('collapsibleButton');
    for(let i = 0; i < coll.length; i++) {
        coll[i].addEventListener('click', function () {
                this.classList.toggle('active');
                let content = this.nextElementSibling;
                if(content.style.maxHeight) {
                    content.style.maxHeight = null;
                }
                else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            }
        )
    }
}
//Task 1
function launchDataTime() {
    const currentDate = new Date();
    const option = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    const days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];

    let dd = currentDate.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = currentDate.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = currentDate.getFullYear();
    if (yy < 10) yy = '0' + yy;

    let weekDay = days[currentDate.getDay()];

    const finalDate = yy + '.' + dd + '.' + mm;
    const finalTime = currentDate.toLocaleTimeString('Ru-ru', option);
    document.getElementById('dataTime').innerHTML = weekDay + ' '  + finalDate + ' ' + finalTime;
}

//Task 3
function createArrChildElem() {
    let mainChildren = document.getElementById('main1').childNodes;
    return Array.prototype.slice.call(mainChildren);
}

//Task 4
function createSquares(count, containerId){
    let parentContainer = document.getElementById(containerId);
    for(let i = 0; i < count; i++){
        let square = document.createElement('div');
        square.style.height = '100px';
        square.style.width = '100px';
        square.style.background = 'lightblue'
        square.style.justifySelf = 'center';
        parentContainer.append(square);
    }
}

function hideRandomObject(containerId){
    let parentContainer = document.getElementById(containerId).children;
    const max = parentContainer.length;
    const min = 0;
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    parentContainer[randomNum].style.visibility = 'hidden';
}
function showAllObject(containerId){
    let parentContainer = document.getElementById(containerId).children;
    for(let i = 0; i < parentContainer.length; i++){
        parentContainer[i].style.visibility = 'visible';
    }
}

window.onload = () => {
    launchButton();
    launchDataTime();
    setInterval(launchDataTime, 1000);
    document.getElementById('countChildEl').innerText = createArrChildElem().length.toString();
    createSquares(4, 'editObjects');
    setInterval(() => {hideRandomObject('editObjects')}, 120);
    setInterval(() => {showAllObject('editObjects')}, 240);
}