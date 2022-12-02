// import components first!!
import projectpage from './components/TheHeroThumbnail.js';
import { SendMail } from "./components/mailer.js";


(() => {

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
    }).mount('#app');

    createApp({
        data() {
            return {
                errorFirstname: false,
                errormail: false,
                errorinput: false,
                successmsg: false,

                form: {
                    firstname: "",
                    email: "",
                    text: ""
                }
            }
        },

        methods: {
            processMailFailure(result) {

                if (this.form.firstname.length > 0) {
                    this.$refs.fname.classList.remove("error");
                    this.errorFirstname = false;
                } else {
                    this.$refs.fname.classList.add("error");
                    this.errorFirstname = true;
                }


                if (this.form.email.length > 0) {
                    this.$refs.email.classList.remove("error");
                    this.errormail = false;
                } else {
                    this.$refs.email.classList.add("error");
                    this.errormail = true;
                }

                if (this.form.text.length > 0) {
                    this.$refs.message.classList.remove("error");
                    this.errorinput = false;
                } else {
                    this.$refs.message.classList.add("error");
                    this.errorinput = true;
                }

            },

            processMailSuccess(result) {
                this.successmsg = true;
                this.$refs.fname.classList.remove("error");
                this.$refs.email.classList.remove("error");
                this.$refs.message.classList.remove("error");
                this.errorFirstname = false;
                this.errormail = false;
                this.errorinput = false;
            },

            processMail(event) {
                // use the SendMail component to process mail
                SendMail(this.$el.parentNode)
                    .then(data => this.processMailSuccess(data))
                    .catch(err => this.processMailFailure(err));
            },

        }
    }).mount('#mail-form')
})();