/*----- Swiper lyceum-----*/

const swiper = new Swiper(".lyceum_swiper", {
  loop: false,
  spaceBetween: 32,
  slidesPerView: 2.5,
});

/*----- Tabs lyceum -----*/

const timetableSwiper = new Swiper(".timetable-swiper", {
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
