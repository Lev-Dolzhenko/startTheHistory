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

// GSAP

const tl = gsap.timeline();

tl.fromTo(
  ".header__row_title",
  {
    y: -100,
    opacity: 0,
  },
  { y: 0, opacity: 1, duration: 0.8 }
).fromTo(
  ".header__row_wrapper",
  { y: -100, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.8 }
);

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".info__grid_elem",
  { opacity: 0, y: -100 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: ".info",
      start: "top center",
      end: "top  top",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".begin__grid_card_small-left",
  { opacity: 0, x: -100 },
  {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: ".begin",
      start: "top center",
      end: "top  top",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".begin__grid_card_small-right",
  { opacity: 0, x: 100 },
  {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: ".begin",
      start: "top center",
      end: "top  top",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".begin__grid_card_large",
  { opacity: 0, y: -100 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: ".begin",
      start: "top center",
      end: "top  top",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".begin__grid_card_long",
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: ".begin",
      start: "top center",
      end: "top  top",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".value__grid_short",
  { opacity: 0, x: -100 },
  {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: ".value",
      start: "top center",
      end: "top  top",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".value__grid_benefits",
  { opacity: 0, x: 100 },
  {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: ".value",
      start: "top center",
      end: "top  top",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".mySwiper",
  { opacity: 0, x: 500 },
  {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: ".comment",
      start: "top center",
      end: "top  top",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".comment__buttons",
  { opacity: 0, y: 200 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: ".mySwiper",
      start: "top center",
      end: "top  top",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".questions__list_question-left",
  { opacity: 0, x: -100 },
  {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: ".questions",
      start: "top center",
      end: "top  bottom",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".questions__list_question-right",
  { opacity: 0, x: 100 },
  {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: ".questions",
      start: "top center",
      end: "top  bottom",
      scrub: true,
    },
  }
);

