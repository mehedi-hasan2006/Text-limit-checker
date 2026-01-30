let text = document.getElementById("textarea");
let limitChecker = document.getElementById("limitChecker");

let limit = 10;

let result = 0 + "/" + limit;
limitChecker.textContent = result;

text.addEventListener("input", () => {
  let count = textarea.value.length;

  limitChecker.textContent = count + "/" + limit;

  if (count > limit) {
    text.classList.remove("focus:ring-violet-600");
    text.classList.remove("border-none");
    text.classList.add("focus:ring-red-600");
    text.style.color = "red";
    limitChecker.style.color = "red";
  } else {
    text.classList.add("focus:ring-2");
    text.classList.add("focus:ring-violet-600");
    text.classList.add("focus:outline-none");
    text.style.color = "#292929";
    limitChecker.style.color = "#292929";
  }
});
