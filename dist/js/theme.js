//pegar a tag body e o botão de tema
const bodyElement = document.querySelector('body');
const buttonTheme = document.querySelector('#btn-theme')

buttonTheme.addEventListener('click', ()=>{
    bodyElement.classList.toggle('dark')
})