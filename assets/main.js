const numInput = document.getElementById('number');
const submitBtn = document.getElementById('submit-btn');
const result = document.getElementById('result');

let numOfO = [];
let oOF;

const addOForWord = () => {
    if (+numInput.value % 2 === 0) {
        result.innerHTML = '';
        numOfO.push('L');
        for (let s = 0; s < +numInput.value; s++) {
            numOfO.push('o');
        }
        numOfO.push('p');
        result.innerHTML = numOfO.join('');
        numOfO = [];
    } else {
        result.innerHTML = '';
        numOfO.push('L');
        for (let s = 0; s < +numInput.value; s++) {
            if (s % 2 === 0) {
                numOfO.push('o');
            } else {
                numOfO.push('0');
            }
        }
        numOfO.push('p');
        result.innerHTML = numOfO.join('');
        numOfO = [];
    }
    if (+numInput.value === 0) {
        result.innerHTML = 'ERROR';
    }
};
