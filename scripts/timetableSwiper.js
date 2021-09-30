
/*----- Swiper page 5 -----*/

const swiper = new Swiper('.timetable-swiper', {
  loop: false,
  spaceBetween: 32,
  slidesPerView: 1,
  pagination: {
    el: ".timetable-pagination",
    clickable: true,
    bulletClass: "timetable__bullet",
    bulletActiveClass: "timetable__bullet_active",
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + 'день ' + (index + 1) + "</span>";
    },
  },
});
