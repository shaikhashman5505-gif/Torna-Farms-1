// Animate nav links with Anime.js
anime({
  targets: '.nav-links li',
  translateY: [-30, 0],
  opacity: [0, 1],
  delay: anime.stagger(150, {start: 500}),
  duration: 1000,
  easing: 'easeOutExpo'
});







  // <!-- Optional JS to toggle menu -->
  // <s>
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });




    //SideScroling


  const carousel = document.getElementById("testimonialCarousel");

  let scrollStep = 1;
  let autoScroll = setInterval(() => {
    carousel.scrollLeft += scrollStep;

    // Reset to start when end is reached
    if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
      carousel.scrollLeft = 0;
    }
  }, 20); // speed



  


