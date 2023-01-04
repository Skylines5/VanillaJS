const numberBtn = document.querySelectorAll(".numberBtn");
const operation = document.querySelectorAll(".operation");
const prevOp = document.querySelector(".prev-op");
const currOp = document.querySelector(".current-op");
const equalsBtn = document.querySelector(".equalsBtn");

let op;
let calculation;
let currentOp;
let previousOp;


const clear = () => {
    currOp.innerText = '';
    prevOp.innerText = '';
    op = ''
}

const calculate = () => {
    currentOp = Number(currOp.innerText);

    switch ( op ) {
        case "*":
            calculation = (previousOp * currentOp);
            break;
        case "/":
            calculation = (previousOp / currentOp);
            break;
        case "+":
            calculation = (previousOp + currentOp);
            break;
        case "-":
            calculation = (previousOp - currentOp);
            break;
    }
    currOp.innerText = `${ calculation }`
}


numberBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        currOp.innerText += btn.innerText;
    })
})

operation.forEach((btn) => {
    btn.addEventListener('click', () => {
        op = btn.innerText;
        previousOp = Number(currOp.innerText);
        prevOp.innerText = `${ currOp.innerText } ${ op }`;
        currOp.innerText = '';
    })
})

equalsBtn.addEventListener('click', () => {
    calculate();
})