document.querySelector('.about-link').addEventListener('click', () => {
        document.querySelector('.about').classList.remove('hidden');
        document.querySelector('header').classList.add('hidden')
        document.querySelector('main').classList.add('hidden')
        document.querySelector('.footer-container').classList.add('hidden')
});

document.querySelector('.about-x').addEventListener('click', () => {
    document.querySelector('.about').classList.add('hidden')
    document.querySelector('header').classList.remove('hidden')
    document.querySelector('main').classList.remove('hidden')
    document.querySelector('.footer-container').classList.remove('hidden')
})