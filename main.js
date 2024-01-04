let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("carousel-dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeDot", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " activeDot";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function loginShow() {
    let i;
    let login = document.getElementById("login-form")
    let signup = document.getElementById("signup-form")
    login.style.display = "flex";
    signup.style.display = "none"
    // let x = document.getElementsByClassName("login_toggle");
    // for (i = 0; i < x.length; i++) {
    //     x[i].style.backgroundColor = "#2172CE";
    //     x[i].style.color = "#ffffff";
    // }
}

function signupShow() {
    let login = document.getElementById("login-form")
    let signup = document.getElementById("signup-form")
    login.style.display = "none";
    signup.style.display = "flex"
}

function mobileSignUp() {
    let login = document.getElementById("login-mobile-form")
    let signup = document.getElementById("signup-mobile-form")
    login.style.display = "none";
    signup.style.display = "flex"
}

function mobileLogin() {
    let login = document.getElementById("login-mobile-form")
    let signup = document.getElementById("signup-mobile-form")
    login.style.display = "flex";
    signup.style.display = "none"
}


let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active")
        let content = this.parentElement.nextElementSibling;
        content.style.display === "flex" ? content.style.display = "none" : content.style.display = "flex"
        this.innerHTML === "-" ? this.innerHTML = "+" : this.innerHTML = "-"
    });

}