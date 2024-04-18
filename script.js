const scrollRevealOption = {
  distance: '50px',
  origin: 'buttom',
  duration: 1000,
};

// Header content container

ScrollReveal().reveal('.header-container img', {
  duration: 1000,
});

ScrollReveal().reveal('.header-content h1', {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal('.header-content p', {
  ...scrollRevealOption,
  duration: 1000,
});

ScrollReveal().reveal('.header-btns', {
  ...scrollRevealOption,
  duration: 1500,
});

// About container
ScrollReveal().reveal('.about-image img', {
  ...scrollRevealOption,
  origin: 'left',
});

ScrollReveal().reveal('.about-content h3', {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal('.about-content .section-header', {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal('.about-content .section-subheader', {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal('.about-content .about-grid', {
  ...scrollRevealOption,
  delay: 2000,
});

// contact container
ScrollReveal().reveal('.contact-image img', {
  ...scrollRevealOption,
  origin: 'left',
});

// Swiper JS for Project

const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: '3',
  centeredSlides: true,
  spaceBetween: 30,
});
