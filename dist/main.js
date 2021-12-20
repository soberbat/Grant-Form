const upButton = document.querySelector("#up-button");
const downButton = document.querySelector("#down-button");
const section = document.querySelector(".main-wrap");
const questionWrap = document.querySelectorAll(".question-wrap");

let intViewportHeight = window.innerHeight;

// QUESTİONS

const firstPageİnput = document.querySelector("#first-page-input");
const errorMsgFirst = document.querySelector(".error-msg-first");

const secondPageİnput = document.querySelector("#second-page-input");
const errorMsgSecond = document.querySelector(".error-msg-second");

const thirdPageİnput = document.querySelector("#third-page-input");
const errorMsgThird = document.querySelector(".error-msg-third");

const fourthPageİnput = document.querySelector("#fourth-page-input");
const errorMsgFourth = document.querySelector(".error-msg-fourth");

const questionFirst = document.querySelector(".question-first");
const forms = document.querySelectorAll(".form");

// QUESTİONS

// PROGRESS BAR

const progressBar = document.querySelector("#progress-bar");
const progressBarOuter = document.querySelector(".progress-bar");
let progress = 1;

// PROGRESS BAR

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
});
let count = 0;
let pagenum = 0;

function pageUp() {
  pagenum++;
  progress += 10;
  progressBar.style.width = `${progress}%`;
  console.log(pagenum);

  if (pagenum === 1) {
    console.log("birinci sayfa");

    progressBarOuter.style.opacity = "100";
  }
}

function pageDown() {
  pagenum--;
  progress -= 10;
  progressBar.style.width = `${progress}%`;
}

//NAVİGATİON BUTTONS FUNCTİONS

function Down() {
  questionWrap[count].classList.add("fade");
  window.scrollBy({ top: intViewportHeight, behavior: "smooth" });

  if (count < questionWrap.length - 1) {
    count++;

    setTimeout(pageUp, 1000);
  }
}
function Up() {
  if (count === questionWrap.length - 1) {
    questionWrap[count].classList.remove("fade");
  }
  count--;
  setTimeout(pageDown, 1000);
  if (count < 0) {
    count = 0;
  }

  window.scrollBy({ top: `-${intViewportHeight}`, behavior: "smooth" });
  questionWrap[count].classList.remove("fade");
}
upButton.addEventListener("click", Up);
downButton.addEventListener("click", Down);

//NAVİGATİON BUTTONS FUNCTİONS

function checkValue(input, key, pagenumm, errormsg) {
  if (key === "Enter" && pagenum == pagenumm && !(input.value === "")) {
    errormsg.classList.remove("error");
    errormsg.classList.add("success");

    Down();
  }

  if (key === "Enter" && pagenum == pagenumm && input.value === "") {
    errormsg.classList.remove("success");
    errormsg.classList.add("error");
    errormsg.nextElementSibling.classList.add("error");
  }

  // console.log(input.value);
  // console.log(count);
}

//ENTER KEY FUNCTİON

document.addEventListener("keypress", (e) => {
  // FİRT PAGE PRESS ENTER KEY
  if (e.key === "Enter" && count == 0) {
    Down();
  }
  // FİRT PAGE PRESS ENTER KEY

  setTimeout(checkValue(firstPageİnput, e.key, 1, errorMsgFirst), 5000);

  setTimeout(checkValue(secondPageİnput, e.key, 2, errorMsgSecond), 5000);

  setTimeout(checkValue(thirdPageİnput, e.key, 3, errorMsgThird), 5000);

  setTimeout(checkValue(fourthPageİnput, e.key, 4, errorMsgFourth), 5000);

  // if (e.key === "Enter" && count == 2 && !(thirdPageİnput.value === "")) {
  //   errorMsgThird.classList.remove("error");
  //   errorMsgThird.classList.add("success");
  //   Down();
  // }

  // if (e.key === "Enter" && count == 2 && thirdPageİnput.value === "") {
  //   errorMsgThird.classList.remove("success");
  //   errorMsgThird.classList.add("error");
  // }
});
