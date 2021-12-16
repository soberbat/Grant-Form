const upButton = document.querySelector("#up-button");
const downButton = document.querySelector("#down-button");
const section = document.querySelector(".main-wrap");
const questionWrap = document.querySelectorAll(".question-wrap");
let intViewportHeight = window.innerHeight;
const secondPageİnput = document.querySelector("#second-page-input");
const thirdPageİnput = document.querySelector("#third-page-input");
const errorMsg = document.querySelector(".error-msg");
const errorMsgThird = document.querySelector(".error-msg-third");
const questionFirst = document.querySelector(".question-first");

let count = 0;
let pagenum = 0;

function pageUp() {
  pagenum++;
}

function pageDown() {
  pagenum--;
}

//NAVİGATİON BUTTONS FUNCTİONS

function Down() {
  questionWrap[count].classList.add("fade");
  window.scrollBy({ top: intViewportHeight, behavior: "smooth" });
  console.log("aşağı inmesi gerekiyor ama inmiyor");
  if (count < questionWrap.length - 1) {
    count++;
    setTimeout(pageUp, 1000);
  }
  console.log(count);
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

function checkValue(input, key) {
  if (key === "Enter" && pagenum == 1 && !(input.value === "")) {
    errorMsg.classList.remove("error");
    errorMsg.classList.add("success");
    Down();
    console.log("down");
  }

  if (key === "Enter" && pagenum == 1 && input.value === "") {
    errorMsg.classList.remove("success");
    errorMsg.classList.add("error");
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

  // SECOND PAGE PRESS ENTER KEY

  setTimeout(checkValue(secondPageİnput, e.key), 50000);

  // SECOND PAGE PRESS ENTER KEY

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

console.log(count);
