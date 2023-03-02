// function skillShow () {
//     let show = document.querySelectorAll(".skillShow");
//     for (let i = 0; i < show.length; i++) {
//         let windowHeight = window.innerHeight;
//         let elementTop = show[i].getBoundingClientRect().top;
//         let elementVisible = 100;
//         if (elementTop < windowHeight - elementVisible) {
//           show[i].classList.add("active");
//         } else {
//           show[i].classList.remove("active");
//         }
//       }
//     }

//     window.addEventListener("scroll", skillShow);

//     skillShow()

// create empty object for name spacing
const app = {};

// target the mobile button class
app.button = document.querySelector('.mobileButton');

// target the mobile menu class
app.mobileMenu = document.querySelector('.mobileMenu');

// target the navContainer class
app.navContainer = document.querySelector('.navContainer');

// target the closeMenu icon
app.close = document.querySelector('.closeMenuIcon');

// listen for a click event on the hamburger menu button
// The click on the button will add target certain class and remove others. 
app.button.addEventListener("click", function() {
    // toggle on and off
    // grab the mobile menu and when i click it display the menu

    app.button.classList.toggle('open');
    app.navContainer.classList.remove('hiddenItems');
    app.close.classList.remove('closeMenuIcon');
    app.close.classList.add('closeMenu');


})


app.close.addEventListener("click", function() {
    // toggle on and off
    // grab the mobile menu and when i click it display the menu

    app.button.classList.toggle('open');
    app.navContainer.classList.add('hiddenItems');
    app.close.classList.remove('closeMenuIcon');
    app.close.classList.add('closeMenu');


})







