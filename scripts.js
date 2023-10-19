const toggle = document.querySelector('.toggle')
const navClose = document.querySelector('.close')
const navigation = document.querySelector('.navigation2')

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
})

navClose.addEventListener ('click', closeModal)

// function closeModal() {
//     navClose.style.display = 'none';
// }

