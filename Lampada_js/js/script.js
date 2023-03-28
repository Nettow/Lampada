const on = document.getElementById('buton')
const off = document.getElementById('butoff')
const img = document.getElementById('img')
const dark = document.getElementsByTagName('body')


on.addEventListener('click', () => {
    img.src = 'images/acesa.jpg'
    dark[0].classList.remove('darkmode')

})

off.addEventListener('click', () => {
    img.src = 'images/apagada.jpg'
    dark[0].classList.add('darkmode')

})

img.addEventListener('click', () => {
    img.src = 'images/quebrada.png'
    alert("Você quebrou a lampada gênio");
})