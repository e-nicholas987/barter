const sidebar = document.getElementById('sidebar');
const hamburger = [...document.getElementsByClassName('hamburger')];
const header = document.querySelector('header');
const main = document.querySelector('main');
const overlay = document.getElementById('overlay');
const close = document.getElementById('close')


hamburger.forEach(i => i.addEventListener('click', () => {
    sidebar.style.transform = 'translateX(0)'
    header.style.transform = 'translateX(400px)'
    main.style.transform = 'translateX(400px)'
    overlay.classList.add('add-overlay')
    document.body.style.overflow = 'hidden'
}))

close.addEventListener('click', () => {
    sidebar.style.transform = 'translateX(-650px)'
    header.style.transform = 'translateX(0)'
    main.style.transform = 'translateX(0)'
    overlay.classList.remove('add-overlay')
    document.body.style.overflow = 'auto'
})


