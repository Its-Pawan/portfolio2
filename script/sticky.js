let navbar = document.querySelector("#navbar")

window.addEventListener("scroll", navScroll)

function navScroll(){
    if(window.pageYOffset >= 10){
        navbar.classList.add('sticky')
    }
    else{
        navbar.classList.remove('sticky')
    }
}