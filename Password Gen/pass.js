const pwElem = document.getElementById("pw");
const copyElem = document.getElementById("copy");
const lenElem = document.getElementById("len");
const upperElem = document.getElementById("upper");
const lowerElem = document.getElementById("lower");
const numberElem = document.getElementById("number");
const symbolElem = document.getElementById("symbol");
const generateBtn = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRTSUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~!@#$%^&*()_+={}?><[]|?/";

function getUpperCase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getLowerCase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  const length = lenElem.value;
  let password = "";
  if (upperElem.checked) {
    password += getUpperCase();
    // console.log(password);
  }
  if (lowerElem.checked) {
    password += getLowerCase();
  }
  if (symbolElem.checked) {
    password += getSymbol();
    console.log(password);
  }
  if (numberElem.checked) {
    password += getNumber();
  }
  //console.log(password);
  for (let i = password.length; i < length; i++) {
    const x = generateX();
    password += x;
  }

  pwElem.innerText = password;
}

function generateX() {
  const xs = [];
  if (upperElem.checked) {
    xs.push(getUpperCase());
  }
  if (lowerElem.checked) {
    xs.push(getLowerCase());
  }
  if (symbolElem.checked) {
    xs.push(getSymbol());
  }
  if (numberElem.checked) {
    xs.push(getNumber());
  }

  //console.log(xs);
  //console.log(xs[Math.floor(Math.random() * xs.length)]);
  if (xs.length === 0) return "";
  return xs[Math.floor(Math.random() * xs.length)];
}
generateX();
generateBtn.onclick = () => generatePassword();

const copyToClipboard = () => {
  const textarea = document.createElement("textarea");
  const password = pwElem.innerText;
  if (!password) {
    return;
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");
};

copyElem.addEventListener("click", copyToClipboard);
