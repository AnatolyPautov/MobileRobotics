/*----- Redirect -----*/

let x = 0,
  y = 0,
  redirectTimeout,
  showed = false;

document.onmousemove = function (e) {
  x = e.clientX;
  y = e.clientY;
};

setInterval(function () {
  if (x == 0 && y == 0) {
    if (!showed) {
      redirectTimeout = setTimeout(function () {
        window.location.href = "lyceum.html";
      }, 120000);
      showed = true;
    }
  } else {
    clearTimeout(redirectTimeout);
    showed = false;
  }
  x = 0;
  y = 0;
}, 500);
/*----- Swiper lyceum-----*/

const swiper = new Swiper(".lyceum_swiper", {
  loop: false,
  spaceBetween: 32,
  slidesPerView: 2.5,
});

/*----- News Swiper-----*/

const newsSwiper = new Swiper(".news_swiper", {
  pagination: {
    el: ".news__pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: false,
  slidesPerView: 1,
});

/*----- Tabs lyceum -----*/

const lyceumSwiper = new Swiper(".timetable-swiper", {
  loop: false,
  spaceBetween: 32,
  slidesPerView: 1,
  pagination: {
    el: ".lyceum_pagination",
    clickable: true,
    bulletClass: "lyceum__bullet",
    bulletActiveClass: "lyceum__bullet_active",
    renderBullet: function (index, className) {
      let bulletName;
      if (index === 0) {
        bulletName = "Расписание уроков";
      } else if (index === 1) {
        bulletName = "Допоплнительное образование";
      } else {
        bulletName = "Преподаватели";
      }
      return '<span class="' + className + '">' + bulletName + "</span>";
    },
  },
});

/*----- Accordeon lyceum -----*/

const cityBlock = document.getElementsByClassName("classes__item");
for (i = 0; i < cityBlock.length; i++) {
  cityBlock[i].addEventListener("click", function () {
    this.classList.toggle("classes-active");
    let answer = this.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      answer.style.paddingTop = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
}

/*----- Tabs Schedule -----*/

const scheduleSwiper = new Swiper(".schedule_swiper", {
  loop: false,
  spaceBetween: 32,
  slidesPerView: 1,
  pagination: {
    el: ".lyceum_pagination",
    clickable: true,
    bulletClass: "lyceum__bullet",
    bulletActiveClass: "lyceum__bullet_active",
    renderBullet: function (index, className) {
      let bulletName;
      if (index === 0) {
        bulletName = "Понедельник";
      } else if (index === 1) {
        bulletName = "Вторник";
      } else if (index === 2) {
        bulletName = "Среда";
      } else if (index === 3) {
        bulletName = "Четверг";
      } else if (index === 4) {
        bulletName = "Пятница";
      } else if (index === 5) {
        bulletName = "Суббота";
      }
      return '<span class="' + className + '">' + bulletName + "</span>";
    },
  },
});

/*----- Modal lyceum -----*/

const bodyLock = document.querySelector("body");

(function () {
  const buttons = document.querySelectorAll(".lyceum__button-form");
  const modal = document.querySelector(".modal-bg");
  const closeMap = document.getElementById("close-form");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      modal.classList.toggle("active");
      bodyLock.classList.toggle("lock");
    });
  });
  closeMap?.addEventListener("click", () => {
    modal.classList.toggle("active");
    bodyLock.classList.toggle("lock");
  });
})();

/*----- Teacher Progress bar -----*/

(function () {
  const teachers = document.querySelectorAll(".teacher__info");
  teachers.forEach((teacher) => {
    let minYears = teacher.querySelector(".minYears");
    let minMonth = teacher.querySelector(".minMonth");
    let maxYears = teacher.querySelector(".maxYears");
    let maxMonth = teacher.querySelector(".maxMonth");

    let teacherBar = teacher.querySelector(".teacher__bar");

    let min;
    let max;

    if (minYears && minMonth) {
      min = +minYears.innerHTML * 12 + +minMonth.innerHTML;
    } else {
      min = +minYears?.innerHTML * 12 || +minMonth?.innerHTML;
    }

    if (maxYears && maxMonth) {
      max = +maxYears.innerHTML * 12 + +maxMonth.innerHTML;
    } else {
      max = +maxYears?.innerHTML * 12 || +maxMonth?.innerHTML;
    }
    teacherBar.style.width = (max / 100) * min + "%";
  });
})();
