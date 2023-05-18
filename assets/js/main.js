let menuBtn = document.querySelector(".menu-btn");
let rule = document.querySelectorAll(".rule");
let menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  if (menu.classList[1] == "active") {
    document.body.style.position = "fixed";
    openedMenu();
    rule.forEach((elem) => {
      elem.classList.add("active");
    });
  } else {
    document.body.style.position = "static";
    rule.forEach((elem) => {
      elem.classList.remove("active");
    });
  }
});

const openedMenu = () => {
  menu.addEventListener("click", (event) => {
    console.log(event.target.tagName);
    if (event.target.tagName === "A" || event.target.tagName === "BUTTON") {
      menu.classList.remove("active");
      rule.forEach((elem) => {
        elem.classList.remove("active");
      });
      document.body.style.position = "static";
    }
  });
};