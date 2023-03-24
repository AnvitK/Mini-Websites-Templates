// index html
const bar = document.querySelector("#bars");
const nav = document.querySelector("#navbar");
const close = document.getElementById('close');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
}

// single product html
const mainImg = document.getElementById('main-img');
const smallImgs = document.querySelectorAll('.sm-img');

smallImgs.forEach((img) => {
  img.addEventListener('click', () => {
    mainImg.src = img.src;
  })
});