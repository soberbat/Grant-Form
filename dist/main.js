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

const errorMsgThird = document.querySelector(".error-msg-third");

const fourthPageİnput = document.querySelector("#fourth-page-input");
const errorMsgFourth = document.querySelector(".error-msg-fourth");

const fifthPageİnput = document.querySelector("#fifth-page-input");
const errorMsgfifth = document.querySelector(".error-msg-fifth");

const questionFirst = document.querySelector(".question-first");
const forms = document.querySelectorAll(".form");

// QUESTİONS

// PROGRESS BAR

const progressBar = document.querySelector("#progress-bar");
const progressBarOuter = document.querySelector(".progress-bar");
let progress = 1;

// PROGRESS BAR

// CHECKBOX STYLE CHANGE

const checkBoxes = document.querySelectorAll(".checkbox");
let checked = false;
checkBoxes.forEach((input) => {
  input.addEventListener("click", (e) => {
    if (e.target.checked) {
      e.target.parentElement.parentElement.style.border = "1px solid white";
      checked = true;
    } else {
      e.target.parentElement.parentElement.style.border =
        "rgb(96, 108, 110) 0.2px solid";

      checked = false;
    }
  });
});

// CHECKBOX STYLE CHANGE

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

//CHECK ENTER KEY FUNCTİON

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
}

//CHECK ENTER KEY FUNCTİON

//CHECK THİRD PAGE İNPUT

const thirdPage = function (key) {
  if (key === "Enter" && checked === false && pagenum === 3)
    errorMsgThird.classList.add("error");

  if (key === "Enter" && checked === true && pagenum === 3) {
    errorMsgThird.classList.remove("error");
    Down();
  }
};

//CHECK THİRD PAGE İNPUT

//NAVİGATE WİTH ENTER KEY

document.addEventListener("keypress", (e) => {
  // FİRST PAGE PRESS ENTER KEY
  if (e.key === "Enter" && count == 0) {
    Down();
  }
  // FİRST PAGE PRESS ENTER KEY

  setTimeout(checkValue(firstPageİnput, e.key, 1, errorMsgFirst), 1000); //FİRST QUESTİON

  setTimeout(checkValue(secondPageİnput, e.key, 2, errorMsgSecond), 1000); //SECOND QUESTİON

  thirdPage(e.key); //THİRD QUESTİON

  setTimeout(checkValue(fourthPageİnput, e.key, 4, errorMsgFourth), 1000); //FOURTH QUESTİON

  setTimeout(checkValue(fifthPageİnput, e.key, 5, errorMsgfifth), 1000); //FİFTH QUESTİON
});

//NAVİGATE WİTH ENTER KEY
