window.addEventListener("scroll", onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(testimonials)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
    //linha alvo
    const targetLine = scrollY + innerHeight / 2

    //o topo da seção
    const sectionTop = section.offsetTop

    //a altura da seção
    const sectionHeight = section.offsetHeight

    // o topo da seção chegou ou ultrapassou a linha alvo
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop 

    //a seçõo termina onde?
    const sectionEndsAt = sectionTop + sectionHeight

    //o final da seção passou da linha alvo
    const sectionEndPassedTargetline = sectionEndsAt <= targetLine

    //Limites da seção
    const sectionBoundaries =
     sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

    const sectionId = section.getAttribute("id")
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
      menuElement.classList.add('active')
    }
}

function showNavOnScroll() { 
    const navigation = document.getElementById('navigation')
    if (scrollY > 0) {
        navigation.classList.add("scroll")
    } 
    else {
        navigation.classList.remove("scroll")
    }
}

function showBackToTopButtonOnScroll() {
    const backToTopButton = document.getElementById('backToTopButton')

    if (scrollY > 550) {
        backToTopButton.classList.add("show")
    } else {
        backToTopButton.classList.remove("show")
    } 
}

function openMenu() {
    document.body.classList.add("menu-expanded")
}

function closeMenu() {
    document.body.classList.remove("menu-expanded")
}

const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination"
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        1024: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
})


ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 700,
}).reveal("#home, #home img, #home .stats, #services, #services header, #services .card, #testimonials, #testimonials header, #testimonials testimonials testimonial, #about, #about header, #about .content");
