function processArray(num) {
    let processedArray = [];
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) {
            processedArray.push(num[i] * num[i]);
        } else {
            processedArray.push(num[i] * 3);
        }
    }


    return processedArray;
}

const inputArray = [1, 2, 3, 4, 5];
const resultArray = processArray(inputArray);
console.log(resultArray); 

function formatArrayStrings(stringsArray, numbersArray) {

    for (let i = 0; i < stringsArray.length; i++) {
        const number = numbersArray[i];
        const string = stringsArray[i];


        if (number % 2 === 0) {
            stringsArray[i] = string.toUpperCase();
        } else {
            stringsArray[i] = string.toLowerCase();
        }
    }
    return stringsArray;
}
const stringsArray = ["Hello", "World", "JavaScript", "Programming"];
const numbersArray = [1, 2, 3, 4];
const processedNumbersArray = processArray(numbersArray);
const formattedStringsArray = formatArrayStrings(stringsArray, processedNumbersArray);
console.log(formattedStringsArray);


