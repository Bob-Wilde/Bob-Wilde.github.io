const startBtnElem = document.querySelector(".start-btn");
const quizBoxElem = document.querySelector(".quiz-box");
const infoBoxElem = document.querySelector(".info-box");
const exitBtnElem = infoBoxElem.querySelector(".buttons .quit");
const continueBtnElem = infoBoxElem.querySelector(".buttons .restart");
const nextQuestionBtnElem = quizBoxElem.querySelector(".next-btn");
const optionListElem = quizBoxElem.querySelector(".option-list");
const timerElem = quizBoxElem.querySelector(".timer-sec");
const timeLineElem = quizBoxElem.querySelector("header .time-line");
const timeOffElem = quizBoxElem.querySelector("header .time-text");
const resultBoxElem = document.querySelector(".result-box");
const restartBtnElem = resultBoxElem.querySelector(".buttons .restart");
const quitBtnElem = resultBoxElem.querySelector(".buttons .quit");
//console.log(timeLineElem);
startBtnElem.onclick = () => {
  infoBoxElem.classList.add("active");
};

exitBtnElem.onclick = () => {
  infoBoxElem.classList.remove("active");
};

let userScore = 0;
let intervalID2 = 0;
let intervalID = 0;
let questionCount = 0;
let bottomCount = 1;
let tickIcon = `<div class="icon tick"><i class="fas fa-check"></i></div>`;
let crossIcon = `<div class="icon cross"><i class="fas fa-times"></i></div>`;

continueBtnElem.onclick = () => {
  infoBoxElem.classList.remove("active");
  quizBoxElem.classList.add("active");
  showQuestions(questionCount);
  bottomCounter(1);
  timer(15);
  timerLine(0);
};

function showQuestions(index) {
  const questionElem = quizBoxElem.querySelector(".que-text");
  const questionTag = `<span>${questions[index].numb}. ${questions[index].question}</span>`;
  const optionListTag = `
    <div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>
    <div class="option"><span>${questions[index].options[2]}</span></div>
    <div class="option"><span>${questions[index].options[3]}</span></div>
    `;

  questionElem.innerHTML = questionTag;

  optionListElem.innerHTML = optionListTag;

  const optionElem = quizBoxElem.querySelectorAll(".option");
  optionElem.forEach((option) => {
    option.setAttribute("onclick", "optionSelected(this)");
  });
}

nextQuestionBtnElem.onclick = () => {
  next();
};

function next() {
  if (questionCount < questions.length - 1) {
    questionCount++;
    bottomCount++;
    showQuestions(questionCount);
    bottomCounter(bottomCount);
    clearInterval(intervalID);
    timer(15);
    clearInterval(intervalID2);
    timerLine(0);
    nextQuestionBtnElem.style.display = "none";
    timeOffElem.textContent = "Time Left";
  } else {
    showResult();
    clearInterval(intervalID);
    clearInterval(intervalID2);
  }
}

function bottomCounter(index) {
  const bottomQueCounterElem = quizBoxElem.querySelector(".total-que");
  const bottomCounterTag = `<span><p>${index}</p>of<p>${questions.length}</p>Questions</span>`;
  bottomQueCounterElem.innerHTML = bottomCounterTag;
}

function optionSelected(answer) {
  clearInterval(intervalID);
  clearInterval(intervalID2);
  let allOptions = optionListElem.children;
  let userAnswer = answer.textContent;
  let correctAnswer = questions[questionCount].answer;
  if (userAnswer === correctAnswer) {
    userScore++;
    console.log(userScore);
    answer.classList.add("correct");
    answer.insertAdjacentHTML("beforeend", tickIcon);
  } else {
    answer.classList.add("wrong");
    answer.insertAdjacentHTML("beforeend", crossIcon);

    //! automatically selects d ryt ansa
    for (let i = 0; i < allOptions.length; i++) {
      if (allOptions[i].textContent == correctAnswer) {
        allOptions[i].setAttribute("class", "option correct");
        allOptions[i].insertAdjacentHTML("beforeend", tickIcon);
      }
    }

    //console.log(optionListElem.children);
  }
  for (let i = 0; i < allOptions.length; i++) {
    allOptions[i].classList.add("disabled");
  }
  nextQuestionBtnElem.style.display = "block";
}

function timer(time) {
  intervalID = setInterval(start, 1000);

  function start() {
    timerElem.textContent = time;
    time--;
    if (time < 9) {
      let addZero = timerElem.textContent;
      timerElem.textContent = `0${addZero}`;
    }
    if (time < 0) {
      clearInterval(intervalID);
      timeOffElem.textContent = "Time Off";
      timerElem.textContent = "00";

      let allOptions = optionListElem.children;
      let correctAnswer = questions[questionCount].answer;
      for (let i = 0; i < allOptions.length; i++) {
        if (allOptions[i].textContent == correctAnswer) {
          allOptions[i].setAttribute("class", "option correct");
          allOptions[i].insertAdjacentHTML("beforeend", tickIcon);
        }
      }

      for (let i = 0; i < allOptions.length; i++) {
        allOptions[i].classList.add("disabled");
      }
      nextQuestionBtnElem.style.display = "block";
    }
  }
}

function timerLine(time) {
  intervalID2 = setInterval(start, 29);

  function start() {
    time += 1;
    timeLineElem.style.width = time + "px";
    if (time > 549) {
      clearInterval(intervalID2);
    }
  }
}

function showResult() {
  infoBoxElem.classList.remove("active");
  quizBoxElem.classList.remove("active");
  resultBoxElem.classList.add("active");
  const scoretext = resultBoxElem.querySelector(".score-text");
  if (userScore > 3) {
    let scoreTag = `
                        <span>and congrats😎, You got <p>${userScore}</p>out of<p>${questions.length}</p></span>
        `;
    scoretext.innerHTML = scoreTag;
  } else if (userScore > 1) {
    let scoreTag = `
                        <span>and 😊nice, You got <p>${userScore}</p>out of<p>${questions.length}</p></span>
        `;
    scoretext.innerHTML = scoreTag;
  } else {
    let scoreTag = `
                        <span>and sorry😔, You got <p>${userScore}</p>out of<p>${questions.length}</p></span>
        `;
    scoretext.innerHTML = scoreTag;
  }
}

restartBtnElem.onclick = () => {
  quizBoxElem.classList.add("active");
  resultBoxElem.classList.remove("active");
  
  /* timeValue = 15
  widthValue=0 */
  questionCount = 0
    bottomCount=1;
  showQuestions(questionCount);
  bottomCounter(bottomCount);
  clearInterval(intervalID);
  timer(15);
  clearInterval(intervalID2);
  timerLine(0);
  nextQuestionBtnElem.style.display = "none";
  // next()
};

quitBtnElem.onclick = () => window.location.reload();
