let button = document.getElementById('toggle');

button.addEventListener('click', menuToggle);

function menuToggle() {
    let nav = document.getElementById('nav-toggle');
    nav.classList.toggle('show');
}

 