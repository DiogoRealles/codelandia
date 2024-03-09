AOS.init({
  once: true
});

const date = new Date();
const year = date.getFullYear();

const yearFooter = document.querySelector('[data-js="yearFooter"]');

yearFooter.innerText = year;
