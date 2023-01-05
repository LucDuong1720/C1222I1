function createArray(size, max, min) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    return array;
}

function printPrimeNumbers(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 != 0) {
            count++;
        }
    }
    return count;
}

function exist(numbers) {
    let find = document.getElementById('findvalue').value;
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] == find) {
            return 'findValue is exist';
        }
    }
    return "findValue is not exist";
}

function process() {
    let size = +document.getElementById('size').value;
    let min = +document.getElementById('min').value;
    let max = +document.getElementById('max').value;
    let numbers = createArray(size, max, min);
    document.getElementById('showArray').innerText = `Mảng: ${numbers}`;
    document.getElementById('showInteger').innerText = printPrimeNumbers(numbers);
    document.getElementById('showValue').innerText = exist(numbers);
}
