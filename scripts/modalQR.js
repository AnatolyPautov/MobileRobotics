/*-----Modal-QRCode -----*/


(function () {
    const qrBtns = document.querySelectorAll('.partner-qr');
    const modal = document.querySelector('.modal-qr');
    const close = document.getElementById('close-qr');

    qrBtns.forEach((qr) => {
        qr.addEventListener('click', () => {
            modal.classList.toggle('active');
            bodyLock.classList.toggle('lock');
        });
    })
    close.addEventListener('click', () => {
        modal.classList.toggle('active');
        bodyLock.classList.toggle('lock');
    });
}());
