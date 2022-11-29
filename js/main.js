// import components first!!
import projectpage from './components/TheHeroThumbnail.js';

(() => {
    // create vue instance here
    const { createApp } = Vue

    createApp({
        created() {
            // ALWAYS get your remote data here
            fetch('./data.json')
                .then(res => res.json())
                .then(data => this.projectData = data)
                .catch(error => console.error(error));
        },

        data() {
            return {
                projectData: {},
            }
        },

        components: {
            projectdisplay: projectpage,
        }
    }).mount('#app')
})()


// adding event to the element

const addEventOnElem = function(elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {

            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
}


// navBar

const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function() {
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function() {
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);