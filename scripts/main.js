const bodyLock = document.querySelector("body");

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
        window.location.href = "index.html";
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

const callingModal = (buttons, modal, close) => {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      modal.classList.toggle("active");
      bodyLock.classList.toggle("lock");
    });
  });
  close?.addEventListener("click", () => {
    modal.classList.toggle("active");
    bodyLock.classList.toggle("lock");
  });
};

const accordeonCalling = (block) => {
  for (i = 0; i < block.length; i++) {
    block[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let answer = this.nextElementSibling;
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        answer.style.paddingTop = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  }
};

/*----- Modal form lyceum -----*/

(function () {
  const buttons = document.querySelectorAll(".lyceum__button-form");
  const modal = document.querySelector(".modal-bg");
  const close = document.getElementById("close-form");

  callingModal(buttons, modal, close);
})();

/*-----Modal-Map -----*/

(function () {
  const buttons = document.querySelectorAll(".map-btn");
  const modal = document.querySelector(".modal-bg");
  const close = document.getElementById("close-map");

  callingModal(buttons, modal, close);
})();

/*-----Modal-QRCode -----*/

(function () {
  const buttons = document.querySelectorAll(".partner-qr");
  const modal = document.querySelector(".modal-qr");
  const close = document.getElementById("close-qr");

  callingModal(buttons, modal, close);
})();

/*-----Modal-Contestants -----*/

(function () {
  const buttons = document.querySelectorAll(".contestant");
  const modal = document.querySelector(".modal-contestants");
  const close = document.getElementById("close-contestants");

  callingModal(buttons, modal, close);
})();

/*----- Accordeon lyceum -----*/

const classesBlock = document.getElementsByClassName("classes__item");
accordeonCalling(classesBlock);

/*----- Accordeon contestants page 4  -----*/

const cityBlock = document.getElementsByClassName("city__item");
accordeonCalling(cityBlock);

/*----- Swiper page 2 -----*/

const defaultSwiper = new Swiper(".default_swiper", {
  loop: false,
  spaceBetween: 32,
  slidesPerView: 2.5,
});

/*----- Swiper contestants page 4 -----*/

const contestantsSwiper = new Swiper(".contestants-swiper", {
  loop: false,
  spaceBetween: 20,
  slidesPerView: 1,
  slidesOffsetBefore: 32,
  width: 996,
});

/*----- Swiper page 5 -----*/

const timetableSwiper = new Swiper(".timetable-swiper", {
  loop: false,
  spaceBetween: 32,
  slidesPerView: 1,
  pagination: {
    el: ".timetable-pagination",
    clickable: true,
    bulletClass: "timetable__bullet",
    bulletActiveClass: "timetable__bullet_active",
    renderBullet: function (index, className) {
      return (
        '<span class="' + className + '">' + "день " + (index + 1) + "</span>"
      );
    },
  },
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

const lyceumTabSwiper = new Swiper(".lyceum__tab_swiper", {
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
