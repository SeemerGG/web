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

//Task 2
function calendar(id, year, month) {
    var Dlast = new Date(year, month + 1, 0).getDate(),
        D = new Date(year, month, Dlast),
        DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
        DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
        calendar = '<tr>',
        month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    if (DNfirst != 0) {
        for (var i = 1; i < DNfirst; i++) calendar += '<td>';
    } else {
        for (var i = 0; i < 6; i++) calendar += '<td>';
    }
    for (var i = 1; i <= Dlast; i++) {
        if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
            calendar += '<td class="today">' + i;
        } else {
            calendar += '<td>' + i;
        }
        if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
            calendar += '<tr>';
        }
    }
    for (var i = DNlast; i < 7; i++) calendar += '<td> ';
    document.querySelector('#' + id + ' tbody').innerHTML = calendar;
    document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = month[D.getMonth()] + ' ' + D.getFullYear();
    document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = D.getMonth();
    document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();
    if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) {
        document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td> <td> <td> <td> <td> <td> <td> ';
    }
}

//Task 5

function createLi(){
    const  str = prompt('Имя пункта:').trim();
    const list = document.getElementById('list');
    list.insertAdjacentHTML('beforeend', '<li></li>')
}

window.onload = () => {
    launchButton();
    launchDataTime();
    setInterval(launchDataTime, 1000);
    document.getElementById('countChildEl').innerText = createArrChildElem().length.toString();
    createSquares(4, 'editObjects');
    setInterval(() => {hideRandomObject('editObjects')}, 120);
    setInterval(() => {showAllObject('editObjects')}, 240);

    calendar("calendar", new Date().getFullYear(), new Date().getMonth());
// переключатель минус месяц
    document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
        calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) - 1);
    }
// переключатель плюс месяц
    document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
        calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) + 1);
    }

    //В разработке
    document.getElementById('addEll').onclick = createLi;
    //


}