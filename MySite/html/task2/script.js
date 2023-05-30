window.onload = () => {


}

function task(){
    let new_mass = []
    let mass = document.querySelectorAll('input')
    for( let i of mass){
        new_mass.push({
            id : i.id,
            name : i.value
        })
    }
    let answer = new_mass.find(l => l.name == 'apple')
    let index = new_mass.indexOf(answer)
    console.log(index)
    console.log(answer.name)
}