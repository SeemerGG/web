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

function launchDataTime() {
    const currentDate = new Date();
    const option = {
        weekday: 'long',
        year: 'numeric',
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    const finalData = currentDate.toLocaleDateString('ru', option);
    document.getElementById('dataTime').innerHTML = finalData;
}
window.onload = () => {
    launchButton()
    launchDataTime()
    setInterval(launchDataTime, 1000)
}