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
const errorMsgFifth = document.querySelector(".error-msg-fifth");

const sixthPageİnput = document.querySelector("#sixth-page-input");
const errorMsgSixth = document.querySelector(".error-msg-sixth");

const seventhPageİnput = document.querySelector("#seventh-page-input");
const errorMsgSeventh = document.querySelector(".error-msg-seventh");

const eightPageİnput = document.querySelector("#eight-page-input");
const errorMsgEight = document.querySelector(".error-msg-eight");

const errorMsgNineth = document.querySelector(".error-msg-nineth");

const questionFirst = document.querySelector(".question-first");
const questionSixth = document.querySelector(".question-sixth");

const forms = document.querySelectorAll(".form");

// QUESTİONS

// PROGRESS BAR

const progressBar = document.querySelector("#progress-bar");
const progressBarOuter = document.querySelector(".progress-bar");
let progress = 0.1;

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

const termsCheckBoxes = document.querySelectorAll(".checkbox-terms");
let checkedTerms = false;
termsCheckBoxes.forEach((input) => {
  input.addEventListener("click", (e) => {
    if (e.target.checked) {
      e.target.parentElement.parentElement.style.border = "1px solid white";
      checkedTerms = true;
    } else {
      e.target.parentElement.parentElement.style.border =
        "rgb(96, 108, 110) 0.2px solid";

      checkedTerms = false;
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

//SUBMİSSİON COMPLETED

const completed = function () {
  if (pagenum === 10) {
    upButton.style.opacity = "0";
    downButton.style.opacity = "0";
    console.log("sonsayfa");
  }
  console.log(pagenum);
};

completed();
//SUBMİSSİON COMPLETED

//NAVİGATİON BUTTONS FUNCTİONS

//CHECK THİRD PAGE İNPUT

function thirdPage(key) {
  if (key === "Enter" && checked === false && pagenum === 3)
    errorMsgThird.classList.add("error");

  if (key === "Enter" && checked === true && pagenum === 3) {
    errorMsgThird.classList.remove("error");
    Down();
  }
}

//CHECK THİRD PAGE İNPUT

//CHECK NİNETH PAGE İNPUT

const ninethPage = function (key) {
  if (key === "Enter" && checkedTerms === false && pagenum === 9)
    errorMsgNineth.classList.add("error");

  if (key === "Enter" && checkedTerms === true && pagenum === 9) {
    errorMsgNineth.classList.remove("error");
    Down();
  }
};

//CHECK NİNETH PAGE İNPUT

//CHECK SİXTH PAGE İNPUT

const checkSixthPage = function (key) {
  sixthPageİnput.addEventListener("input", (e) => {
    let parsed = parseInt(e.target.value);
    if (isNaN(parsed)) {
      questionSixth.classList.toggle("shake");
      errorMsgSixth.classList.add("error");
    } else {
      errorMsgSixth.classList.remove("error");
    }
  });
};

checkSixthPage();

//CHECK SİXTH PAGE İNPUT

//CHECK EİGHT PAGE İNPUT

function ValidateEmail(inputText) {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.match(mailformat)) {
    errorMsgEight.classList.remove("error");
    Down();
  } else {
    errorMsgEight.innerText = "E-mail format in not suitable";
    errorMsgEight.classList.add("error");
  }
}

function checkEightPageValue(email, key, pageNumber) {
  if (key === "Enter" && pageNumber === 8 && email === "") {
    errorMsgEight.innerText = "Please fill this in";
    errorMsgEight.classList.add("error");
  }
  if (key === "Enter" && pageNumber === 8 && !(email === "")) {
    ValidateEmail(email);
  }
}

//CHECK EİGHT PAGE İNPUT

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

  setTimeout(checkValue(fifthPageİnput, e.key, 5, errorMsgFifth), 1000); //FİFTH QUESTİON

  setTimeout(checkValue(sixthPageİnput, e.key, 6, errorMsgSixth), 1000); //SİXTH QUESTİON

  setTimeout(checkValue(seventhPageİnput, e.key, 7, errorMsgSeventh), 1000); //SEVENTH QUESTİON

  checkEightPageValue(eightPageİnput.value, e.key, pagenum); //EİGHTHT QUESTİON

  ninethPage(e.key); //NİNETH QUESTİON
});

//NAVİGATE WİTH ENTER KEY
