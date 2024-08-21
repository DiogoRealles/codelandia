const date = new Date();
const year = date.getFullYear();

const yearFooter = document.querySelector('[data-js="yearFooter"]');

yearFooter.innerText = year;


AOS.init({
  once: true
});