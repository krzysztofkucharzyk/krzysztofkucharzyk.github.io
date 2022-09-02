let button = document.getElementById('toggle');

button.addEventListener('click', menuToggle);

function menuToggle() {
    let nav = document.getElementById('nav-toggle');
    nav.classList.toggle('show');
}

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
