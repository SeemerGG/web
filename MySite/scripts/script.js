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
                    //content.style.maxHeight =  600 + 'px';
                    //content.style.height = 600 + 'px';
                    content.style.maxHeight = content.scrollHeight + 'px';

                }
            }
        )
    }
}

function launchDataTime() {
    const currentDate = new Date();
    const option = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    // const optionForDate = {
    //
    //     weekday: 'long',
    //     year: 'numeric',
    //     day: '2-digit',
    //     month: 'long',
    // }

    let dd = currentDate.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = currentDate.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = currentDate.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    let weekDay = currentDate.getDay().

    const finalDate = dd + '.' + mm + '.' + yy;
    const finalTime = currentDate.toLocaleTimeString('Ru-ru', option);
    document.getElementById('dataTime').innerHTML = finalDate + ' ' + finalData;
}
window.onload = () => {
    launchButton()
    launchDataTime()
    setInterval(launchDataTime, 1000)
}