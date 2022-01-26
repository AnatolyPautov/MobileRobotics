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

/*----- Accordeon lyceum -----*/

const classesBlock = document.getElementsByClassName("classes__item");
for (i = 0; i < classesBlock.length; i++) {
  classesBlock[i].addEventListener("click", function () {
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

/*----- Modal lyceum -----*/

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

/*-----Modal-Map -----*/

(function () {
  const open = document.querySelector(".map-btn");
  const modal = document.querySelector(".modal-bg");
  const closeMap = document.getElementById("close-map");

  open?.addEventListener("click", () => {
    modal.classList.toggle("active");
    bodyLock.classList.toggle("lock");
  });
  closeMap?.addEventListener("click", () => {
    modal.classList.toggle("active");
    bodyLock.classList.toggle("lock");
  });
})();

/*accordion*/

const cityBlock = document.getElementsByClassName("city__item");
for (i = 0; i < cityBlock.length; i++) {
  cityBlock[i].addEventListener("click", function () {
    this.classList.toggle("city-active");
    let answer = this.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      answer.style.paddingTop = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
}

/*-----Modal-QRCode -----*/

(function () {
  const qrBtns = document.querySelectorAll(".partner-qr");
  const modalQr = document.querySelector(".modal-qr");
  const closeQr = document.getElementById("close-qr");

  qrBtns.forEach((qr) => {
    qr.addEventListener("click", () => {
      modalQr.classList.toggle("active");
      bodyLock.classList.toggle("lock");
    });
  });
  closeQr?.addEventListener("click", () => {
    modalQr.classList.toggle("active");
    bodyLock.classList.toggle("lock");
  });
})();

/*-----Modal-Contestants -----*/

(function () {
  const contestants = document.querySelectorAll(".contestant");
  const contestantsModal = document.querySelector(".modal-contestants");
  const closeContestantsModal = document.getElementById("close-contestants");

  contestants.forEach((contestant) => {
    contestant.addEventListener("click", () => {
      contestantsModal.classList.toggle("active");
      bodyLock.classList.toggle("lock");
    });
  });
  closeContestantsModal?.addEventListener("click", () => {
    contestantsModal.classList.toggle("active");
    bodyLock.classList.toggle("lock");
  });
})();

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
