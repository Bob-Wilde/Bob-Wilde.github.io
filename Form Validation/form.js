const formElem = document.querySelector("form");

const emailfieldElem = formElem.querySelector(".email-field");

const emailElem = emailfieldElem.querySelector("#email");

const passwordFieildElem = formElem.querySelector(".create-password");

const passwordInputElem = passwordFieildElem.querySelector("#password");

const cpasswordFieldElem = formElem.querySelector(".confirm-password");

const cpasswordInputElem = cpasswordFieldElem.querySelector("#cpassword");

const eyeIcons = document.querySelectorAll(".show-hide");


function checkMail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailElem.value.match(emailPattern)) {
    return emailfieldElem.classList.add("invalid");
  }
  emailfieldElem.classList.remove("invalid");
}

eyeIcons.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    const inputEl = eyeIcon.parentElement.querySelector("input");
    if (inputEl.type === "password") {
      eyeIcon.classList.replace("bx-hide", "bx-show");
      return (inputEl.type = "text");
    }

    eyeIcon.classList.replace("bx-show", "bx-hide");
    inputEl.type = "password";
  });
});

function createPassword() {
    const passPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordInputElem.value.match(passPattern)) {
     return passwordFieildElem.classList.add('invalid')
    }
    passwordFieildElem.classList.remove('invalid')
}

function confirmPassword() {
    if (cpasswordInputElem.value!==passwordInputElem.value || cpasswordInputElem.value==='') {
        return cpasswordFieldElem.classList.add('invalid')
    }
    cpasswordFieldElem.classList.remove('invalid')
}


formElem.addEventListener("submit", (e) => {
  e.preventDefault();
    checkMail();
    createPassword()
    confirmPassword()

  emailElem.addEventListener("keyup", checkMail);
  passwordInputElem.addEventListener("keyup", createPassword);
    cpasswordInputElem.addEventListener("keyup", createPassword);
    
    if (!emailfieldElem.classList.contains('invalid') &&
        !passwordFieildElem.classList.contains('invalid')&&
        !cpasswordFieldElem.classList.contains('invalid')) {
        location.href=formElem.getAttribute('action')
    }
});
