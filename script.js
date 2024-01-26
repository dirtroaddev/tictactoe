const container = document.querySelector('#container');

for( let i = 0; i < 3; i += 1) {
    let divMain = document.createElement('div');
    divMain.className = 'row'

    for(let j = 0; j < 3; j += 1) {
        let div = document.createElement('div');
        div.className = 'gridBoxes'
        divMain.appendChild(div);
    }

    container.appendChild(divMain);
}


container.addEventListener('click', (event) => {
    
    event.target.innerText = 'x'
    console.log('you clicked ', event.target);
});