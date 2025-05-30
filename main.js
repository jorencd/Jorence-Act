"use strict";
function sumEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
}
function removeVowels(text) {
    return text.replace(/[aeiouAEIOU]/g, '');
}
function findCommonElements(arr1, arr2) {
    return arr1.filter(num => arr2.includes(num));
}
function handleEvenSum() {
    const input = document.getElementById('evenInput').value;
    const numbers = input.split(',').map(str => parseInt(str.trim())).filter(n => !isNaN(n));
    const result = sumEvenNumbers(numbers);
    document.getElementById('evenResult').textContent = result.toString();
}
function handleVowelRemove() {
    const text = document.getElementById('vowelInput').value;
    const result = removeVowels(text);
    document.getElementById('vowelResult').textContent = result;
}
function handleCommonElements() {
    const arr1 = document.getElementById('array1Input').value
        .split(',').map(str => parseInt(str.trim())).filter(n => !isNaN(n));
    const arr2 = document.getElementById('array2Input').value
        .split(',').map(str => parseInt(str.trim())).filter(n => !isNaN(n));
    const result = findCommonElements(arr1, arr2);
    document.getElementById('commonResult').textContent = result.join(', ');
}
