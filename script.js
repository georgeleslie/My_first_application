
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let dropdowns = document.querySelectorAll('.dropdown');

// Toggle hamburger menu
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

// Handle dropdowns for mobile
dropdowns.forEach(dropdown => {
    dropdown.onclick = (e) => {
        // Prevent click from closing other dropdowns
        e.stopPropagation();
        
        dropdown.classList.toggle('open');
    };
});
