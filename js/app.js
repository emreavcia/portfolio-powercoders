//get the Cursor div
const cursor = document.getElementById("cursor")

// get the div wraps binoculars 
const binoculars = document.getElementById("binoculars")

// get the binoculars
const faBinoculars = document.getElementById("fa-binoculars")

//function to capture to mouse move 
document.addEventListener("mousemove", function (e) {

    // make the cursor div follow the cursor 
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = x + "px"
    cursor.style.top = y + "px"

    // make the binocular transform in line with mouse move 
    let xBinoculars = (binoculars.getBoundingClientRect().left) + (binoculars.clientWidth / 2)
    let yBinoculars = (binoculars.getBoundingClientRect().top) + (binoculars.clientHeight / 2)
    let radian = Math.atan2(e.pageX - xBinoculars, e.pageY - yBinoculars)
    let rotation = (radian * (180 / Math.PI) * -1)
    binoculars.style.transform = "rotate(" + rotation + "deg)"
    faBinoculars.style.color = "#f652a1"
})


const motto = document.querySelector('.motto');

window.addEventListener('DOMContentLoaded', reveal);

function reveal() {
    const options = {
        rootMargin: '0px 0px 200px 0px'
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-item');
                observer.unobserve(entry.target);

            } else {

                return;
            }
        })
    }, options);



    observer.observe(motto);
}

const workSection = document.querySelector("#work-section")
const observer = new IntersectionObserver((entries) => {

    const checkLatestHeading = document.querySelector("#check-latest-h2")
    const githubAccountImg = document.querySelector("#github-account-img")
    const navWork = document.querySelector("#nav-work")

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navWork.classList.add("style-nav-item")
            checkLatestHeading.classList.remove('position-left');
            githubAccountImg.classList.remove('position-right');
            motto.style.visibility = "hidden"

        } else {
            navWork.classList.remove('style-nav-item');
            checkLatestHeading.classList.add('position-left');
            githubAccountImg.classList.add('position-right');
            motto.style.visibility = "visible"
        }
    })

}, {
    threshold: 0.70
})

observer.observe(workSection)

const aboutSection = document.getElementById('about-section')
observerAbout = new IntersectionObserver((entries) => {
    const navAbout = document.getElementById('nav-about')
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navAbout.classList.add("style-nav-item")
        } else {
            navAbout.classList.remove('style-nav-item');
        }
    })
}, {
    threshold: 0.60
})
observerAbout.observe(aboutSection)

const contactSection = document.getElementById('contact-section')
observerContact = new IntersectionObserver((entries) => {
    const navContact = document.getElementById('nav-contact')
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navContact.classList.add("style-nav-item")
        } else {
            navContact.classList.remove('style-nav-item');
        }
    })
}, {
    threshold: 0.60
})

observerContact.observe(contactSection)

const arrowResume = document.getElementsByClassName("arrow-resume")
console.log(arrowResume)
setInterval(() => {
    arrowResume[0].classList.toggle("arrow-resume-interval")
    arrowResume[1].classList.toggle("arrow-resume-interval")
}, 1000)




