const campoAtivoAtual = document.querySelectorAll('.input');
const validarBtn = document.querySelector('.botao');

validarBtn.addEventListener('click', function () {
    campoAtivoAtual.forEach(input => {
        if (input.value !== '') {
            input.classList.remove('campo-branco');
            input.classList.add('campo-preenchido');
            input.nextElementSibling.style.visibility = 'hidden';
        } else {
            input.classList.remove('campo-preenchido');
            input.classList.add('campo-branco');
            input.nextElementSibling.style.visibility = 'visible';
        }
    });
});
