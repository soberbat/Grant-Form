const upButton = document.querySelector("#up-button");
const downButton = document.querySelector("#down-button");
const section = document.querySelector(".main-wrap");
const questionWrap = document.querySelectorAll(".question-wrap");
let intViewportHeight = window.innerHeight;
console.log(intViewportHeight);

let count = 0;

downButton.addEventListener("click", () => {
  questionWrap[count].classList.add("fade");
  window.scrollBy({ top: intViewportHeight, behavior: "smooth" });
  if (count < questionWrap.length - 1) {
    count++;
  }

  console.log(count);
});

upButton.addEventListener("click", () => {
  if (count === questionWrap.length - 1) {
    questionWrap[count].classList.remove("fade");
    console.log("test");
  }
  count--;
  if (count < 0) {
    count = 0;
  }
  console.log(count);
  window.scrollBy({ top: `-${intViewportHeight}`, behavior: "smooth" });
  questionWrap[count].classList.remove("fade");

  // if (count < 0) {
  //   count = questionWrap.length - 1;
  // }
  // console.log(count);
  // if (count < 0) {
  //   count = 0;
  // }
});
