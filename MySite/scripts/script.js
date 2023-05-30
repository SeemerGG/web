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
function buttonUpdate() {
    //this.classList.toggle('active');
    let content = this.nextElementSibling;
    if(content.style.maxHeight) {
        content.style.maxHeight = null;
    }
    else {
        content.style.maxHeight = content.scrollHeight + 'px';
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

function Task5(){
    let li = document.querySelectorAll('li')
    li.forEach(item => {
        item.addEventListener('click', clickHandler)
    })
}
function clickHandler(e) {

    if(e.target.classList.contains('class-li')) {
        console.log('нажали на li')
    }
    let next = e.target.nextElementSibling
    let pred = e.target.previousElementSibling
    console.log(e.target.innerHTML)
    if(next != null)
    {
        [e.target.innerHTML, next.innerHTML] = [next.innerHTML, e.target.innerHTML]
    }
    else
    {
        [e.target.innerHTML, pred.innerHTML] = [pred.innerHTML, e.target.innerHTML]
    }
}
//Task 6
function fillTable(){
    let table = document.getElementById("task6");
    for (let row of table.rows)
    {
        for(let cell of row.cells)
        {
            cell.appendChild(createCrabik());
        }
    }
}

function createCrabik(){
    const image = document.createElement('img');
    image.src = "../images/крабик.png";
    image.style.height = 50 + 'px';
    image.style.width = 50 + 'px';
    image.style.visibility = 'hidden'
    return image;
}

function Task6(){
    let table =  document.getElementById('task6');
    for (let row of table.rows)
    {
        for(let cell of row.cells)
        {
            cell.addEventListener('click', clickHandlerTable);
        }
    }
}

function clickHandlerTable(e){
    e.target.firstElementChild.style.visibility = 'visible';
}
//task7
function Task7(){
    document.getElementById('task7').addEventListener('click', clickHandlerForTask7)
}

let countClick = 0;
function clickHandlerForTask7(e){
    let content = document.getElementById('task7');
    let sweets = e.target;
    if(sweets.id != "task7p"){
        sweets.classList.toggle('fade');
        setTimeout(() => {
            sweets.style.display = 'none';
            content.style.maxHeight = content.scrollHeight + 'px';
        }, 1000);
        countClick++;
    }
    if(countClick == 3){
        document.getElementById("end").style.display = "block";
    }

}
//task8
function Task8(e){
    e.target.classList.toggle('fade');
}
//Task9
function Task9(){
    
}

function Complete(){
    console.log("lsakjdf");
    let regEmail = new RegExp('/^\\S+@\\S+\\.\\S+$/');
    let regName = new RegExp('^^[а-яА-ЯёЁ]+$')
}
//
function clickHandlerFortask7p(){

}

function task4_from_zachet(id_parent){
    let parent = document.getElementById(id_parent)
    let text = parent.innerHTML
    console.log(text)
    let children = document.createElement('div')
    children.innerHTML = text
    parent.appendChild(children)
    //parent.push(children)
}

window.onload = () => {
    task4_from_zachet('one')
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
    Task5();
    fillTable();
    Task6();
    Task7();
    //Task 8
    document.getElementById('blago').addEventListener('mouseover', Task8);
   // document.getElementById('blago').addEventListener('mouseout', Task8);
    // Task 7


}