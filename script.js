const modalOverlay = document.querySelector('.modal-overlay');
const botao = document.querySelector('.aceitou')

botao.addEventListener('click', function() {
    modalOverlay.classList.add('active')
})