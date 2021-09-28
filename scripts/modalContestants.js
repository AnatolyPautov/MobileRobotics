/*-----Modal-Contestants -----*/

 (function () {
    const contestants = document.querySelectorAll('.contestant');
    const modal = document.querySelector('.modal-contestants');
    const close = document.getElementById('close-contestants');

    contestants.forEach((contestant) => {
        contestant.addEventListener('click', () => {
            modal.classList.toggle('active');
            bodyLock.classList.toggle('lock');
        });
    })
    close.addEventListener('click', () => {
        modal.classList.toggle('active');
        bodyLock.classList.toggle('lock');
    });
}());
