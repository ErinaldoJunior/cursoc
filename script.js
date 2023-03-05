const menu = document.querySelector('.menu');
const dropdown = document.querySelector('.lista-menu');

function ativarMenu(event) {
  event.preventDefault();
  menu.classList.toggle('ativar-menu');
  dropdown.classList.toggle('ativar-dropdown');
}

menu.addEventListener('click', ativarMenu);
////////////////////////////////////////////////
function scrollSuave() {
  const linksInternos = document.querySelectorAll("a[href^='#']");

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}

scrollSuave();

////////////////////////////////////////////////////
const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = ['Bem vindo ao curso interativo:'];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 200; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains('typing'))
      cursorSpan.classList.add('typing');
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains('typing'))
      cursorSpan.classList.add('typing');
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1,
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

//////////////////////////////////////////

const darklogo = document.querySelector('.darklogo');
const body = document.querySelector('body');
const conteudo = document.querySelector('.conteudo');
const header = document.querySelector('header');

function ativarDarkMode(event) {
  event.preventDefault();
  body.classList.toggle('dark-mode');
  conteudo.classList.toggle('dark-mode');
  header.classList.toggle('dark-mode');
}

darklogo.addEventListener('click', ativarDarkMode);
