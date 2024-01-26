const container = document.querySelector('#container');
let count = 0;
let num = 1;
for( let i = 0; i < 3; i += 1) {
    let divMain = document.createElement('div');
    divMain.className = 'row'

    for(let j = 0; j < 3; j += 1) {
        
        let div = document.createElement('div');
        div.className = `gridBoxes box-${num}`
        div.setAttribute('value', `box-${num}`)
        num += 1;
        
        divMain.appendChild(div);
    }

    container.appendChild(divMain);
}


container.addEventListener('click', (event) => {
    
    if(count > 8) {
        return;
    }
    if(count % 2 == 0) {
        console.log('INSIDE');
        event.target.innerText = 'x'
    } else {
        event.target.innerText = 'o'
    }

    
    console.log();
    
   
    count += 1;
    console.log('you clicked ', event.target.value);
    if(document.getElementsByClassName('box-1')[0].innerText == 'x' && document.getElementsByClassName('box-2')[0].innerText == 'x' && document.getElementsByClassName('box-3')[0].innerText == 'x') {
        alert('Player 1 Wins')
        return;
    } else if(document.getElementsByClassName('box-1')[0].innerText == 'o' && document.getElementsByClassName('box-2')[0].innerText == 'o' && document.getElementsByClassName('box-3')[0].innerText == 'o') {
        alert('Player 2 Wins')
        return;
    }
    console.log(document.getElementsByClassName('box-2')[0].innerText == 'x');

});