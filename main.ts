function sumEvenNumbers(numbers: number[]): number {
  return numbers.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
}

function removeVowels(text: string): string {
  return text.replace(/[aeiouAEIOU]/g, '');
}

function findCommonElements(arr1: number[], arr2: number[]): number[] {
  return arr1.filter(num => arr2.includes(num));
}

function handleEvenSum(): void {
  const input = (document.getElementById('evenInput') as HTMLInputElement).value;
  const numbers = input.split(',').map(str => parseInt(str.trim())).filter(n => !isNaN(n));
  const result = sumEvenNumbers(numbers);
  (document.getElementById('evenResult') as HTMLSpanElement).textContent = result.toString();
}

function handleVowelRemove(): void {
  const text = (document.getElementById('vowelInput') as HTMLInputElement).value;
  const result = removeVowels(text);
  (document.getElementById('vowelResult') as HTMLSpanElement).textContent = result;
}

function handleCommonElements(): void {
  const arr1 = (document.getElementById('array1Input') as HTMLInputElement).value
    .split(',').map(str => parseInt(str.trim())).filter(n => !isNaN(n));
  const arr2 = (document.getElementById('array2Input') as HTMLInputElement).value
    .split(',').map(str => parseInt(str.trim())).filter(n => !isNaN(n));
  const result = findCommonElements(arr1, arr2);
  (document.getElementById('commonResult') as HTMLSpanElement).textContent = result.join(', ');
}
