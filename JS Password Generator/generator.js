let output = document.querySelector('.output');
let button = document.querySelector('.button');
let copy = document.querySelector('.copy');
console.log(output, 1);
const upperCaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseString = 'abcdefghijklmnopqrstuvwxyz';
const numberString = '1234567890';
const specialString = '!@#$%^&*()_+';
//to create a password of 10 character which contains 1 special char, 1 number,1uppercase,1 lowercase.
let result = '';
const length = 10;
const upperCase = true;
const lowerCase = true;
const special = true;
const number = true;
function generate(length, lowerCase, number, special) {
  let allowedString = '';
  allowedString += upperCase ? upperCaseString : '';
  allowedString += lowerCase ? lowerCaseString : '';
  allowedString += number ? numberString : '';
  allowedString += special ? specialString : '';
  console.log(allowedString);
  result = '';
  if (length <= 0) {
    console.log('enter Valid Range');
    return;
  } else {
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * allowedString.length);
      result += allowedString[index];
    }

    // navigator.textContent(result);
    return result;
  }
}

button.addEventListener('click', () => {
  const res = generate(length, lowerCase, number, special);
  console.log(res);
  output.textContent = res;
});
copy.addEventListener('click', () => {
  navigator.clipboard.writeText(result);
});
