window.addEventListener('scroll', onScroll);

onScroll();

// Scroll navigation
function onScroll(){
  showBackToTopButton();
}

function showBackToTopButton() {
  if(scrollY > 300){
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

const date = new Date();
const year = date.getFullYear();

const yearFooter = document.querySelector('[data-js="yearFooter"]');

yearFooter.innerText = year;

AOS.init({
  once: true,
});

const close = document.querySelector('.close');
const open = document.querySelector('.open');
const navMobile = document.querySelector('.nav-mobile');

close.addEventListener('click', () => {
  open.style.display = "block";
  navMobile.classList.remove('show');
  close.style.display = "none";
  
});

open.addEventListener('click', () => {
  open.style.display = "none";
  navMobile.classList.add('show');
  close.style.display = "block";
});

