document.querySelector('.menu-toggle').addEventListener('click', function() {
    this.classList.toggle('open');
    document.querySelector('.nav-menu').classList.toggle('active');
});