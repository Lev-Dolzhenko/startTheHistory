/* QUESTIONS */

const buttonsQuestions = document.querySelectorAll(".list_question_icon");
const answers = document.querySelectorAll(".questions__list_answer");

for (let buttonQuestions of buttonsQuestions) {
  buttonQuestions.addEventListener("click", function () {
    for (let answer of answers) {
      if (
        buttonQuestions.getAttribute("data-question") ===
        answer.getAttribute("data-answer")
      ) {
        answer.classList.toggle("none");

        const questionIcon = buttonQuestions.querySelector("img");

        if (answer.classList.contains("none")) {
          questionIcon.src = "/content/main/questions/closeIcon.svg";
        } else {
          questionIcon.src = "/content/main/questions/showIcon.svg";
        }
      }
    }
  });
}

/* PRICE MODAL WINDOW */

const priceButton = document.getElementById("priceButton");
const priceModal = document.getElementById("priceModal");
const priceButtonClose = document.getElementById("priceButtonClose");
const overlay = document.querySelector(".overlay_modal");

const inputName = document.getElementById("formName");
const inputEmail = document.getElementById("formEmail");

priceButton.addEventListener("click", function (e) {
  if (inputName.value === "" || inputEmail.value === "") {
    inputEmail.style.borderColor = "red";
    inputName.style.borderColor = "red";
    return;
  }

  e.preventDefault();
  priceModal.classList.remove("none");
  overlay.classList.remove("none");
  document.body.style.overflow = "hidden";
});

priceButtonClose.addEventListener("click", function (e) {
  e.preventDefault();
  priceModal.classList.add("none");
  overlay.classList.add("none");
  document.body.style.overflow = "visible";
});

/* NAV OPEN/CLOSE */

const burgerButton = document.getElementById("burgerButton");
const headerNav = document.getElementById("headerNav");
const navOverly = document.querySelector(".overlay_nav");

burgerButton.addEventListener("click", function () {
  headerNav.classList.toggle("none");
  document.body.classList.toggle("overflow");
  navOverly.classList.toggle("none");
});

/* NAV SCROLL */

const linksNav = document.querySelectorAll(".mobile_link");
const pagesNav = document.querySelectorAll(".scrollPage");
const navIcon = document.querySelector(".burger-checkbox");

for (let linkNav of linksNav) {
  let linkNavAtr = linkNav.getAttribute("data-link");
  linkNav.addEventListener("click", function () {
    for (let pageNav of pagesNav) {
      let pageNavAtr = pageNav.getAttribute("data-elem");
      if (linkNavAtr === pageNavAtr) {
        document.body.classList.remove("overflow");
        headerNav.classList.add("none");
        navOverly.classList.add("none");
        navIcon.checked = false;
        pageNav.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
}

/* INIT SWIPER */

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 32,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    650: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    },
    1500: {
      slidesPerView: 4,
    },
    1700: {
      slidesPerView: 5,
    },
  },
});
