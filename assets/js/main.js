let menuBtn = document.querySelector(".menu-btn");
let rule = document.querySelectorAll(".rule");
let menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  rule.forEach((elem) => {
    elem.classList.toggle("active");
  });

  menu.classList[1] == "active"
    ? (document.body.style.position = "fixed")
    : (document.body.style.position = "static");
});