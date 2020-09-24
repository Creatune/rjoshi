$(window).on("load", function () {
    $(".loader-wrapper").fadeOut(2000, () => {
        $(this).remove()
    });
});

window.onscroll = function () { stickyNavbar() };
let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;
function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");

    } else {
        navbar.classList.remove("sticky")

    }
}

$(window).scroll(function () {
    if ($(window).scrollTop() >= 30) {
        $('header').addClass('shadow-header');
    }
    else {
        $('header').removeClass('shadow-header');
    }
});

let hamburger = document.getElementById('hamburgerbtn');

let mobileMenu = document.getElementById('mobileMenu');

hamburger.onclick = function () { mobileMenu.classList.toggle('active'); }