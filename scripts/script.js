/*-----Modal-Map -----*/

const bodyLock = document.querySelector('body');

(function () {
    const open = document.querySelector('.map-btn');
    const modal = document.querySelector('.modal-map');
    const closeMap = document.getElementById('close-map');
    
    open.addEventListener('click', () => {
        modal.classList.toggle('active');
        bodyLock.classList.toggle('lock');
    });
    closeMap.addEventListener('click', () => {
        modal.classList.toggle('active');
        bodyLock.classList.toggle('lock');
    });
}());

/*accordion*/  

const cityBlock = document.getElementsByClassName('city__item');

for (i = 0; i < cityBlock.length; i++) {
    cityBlock[i].addEventListener('click', function() {
        this.classList.toggle('city-active');
        let answer = this.nextElementSibling;
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            answer.style.paddingTop = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    })
};