// header slider
$('.slider').slick({
    infinite: false,
    speed: 300,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
});


// menu bar
let menu = document.querySelector(".menu_bar")
let navLinks = document.querySelector(".nav_links")
function showNav() {
    navLinks.classList.toggle("start-0")
    document.body.classList.toggle("overflow-hidden")
}
function hideNav() {
    navLinks.classList.remove("start-0")
    document.body.classList.remove("overflow-hidden")
}
function toggleMenu(menu) {
    menu.classList.toggle("active");

    let navLinks = document.querySelector(".nav_links");
    navLinks.classList.toggle("start-0");

    document.body.classList.toggle("overflow-hidden");
}


// client slider 
$('.clientSlider').slick({
    infinite: false,
    speed: 300,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.slider_arrow_l'),
    nextArrow: $('.slider_arrow_2'),
});


// form submit
function submitForm() {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const msg = document.getElementById('msg').value;

    if (!fname || !lname || !email || !phone) {
        alert("Please fill in all required fields.");
        return;
    }

    const newWindow = window.open('./formSubmit.html', '_blank');

    document.getElementById('myForm').reset();
}
