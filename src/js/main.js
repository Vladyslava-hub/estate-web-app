/* Nav icon */
const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');

navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header__top-row--mobile');
    document.body.classList.toggle('no-scroll');
}

/* Phone Mask 
mask('[data-tel-input]');

// Удаляем '+' если больше ничего не введено, чтобы показать placeholder
const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((input)=>{
	input.addEventListener('input', ()=>{
		if (input.value == '+') input.value = '';
	})
	input.addEventListener('blur', ()=>{
		if (input.value == '+') input.value = '';
	})
});

const mask = (selector) => {
  function setMask() {
      let matrix = '+###############';

      // eslint-disable-next-line no-undef
      maskList.forEach(item => {
          let code = item.code.replace(/[\s#]/g, ''),
              phone = this.value.replace(/[\s#-)(]/g, '');

          if (phone.includes(code)) {
              // console.log(phone, code);
              matrix = item.code;
          }
      });

      let i = 0,
          val = this.value.replace(/\D/g, '');

      this.value = matrix.replace(/(?!\+)./g, function(a) {
          return /[#\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
      });
  }

  let inputs = document.querySelectorAll(selector);

  inputs.forEach(input => {
      // if (!input.value) input.value = '+';
      input.addEventListener('input', setMask);
      input.addEventListener('focus', setMask);
      input.addEventListener('blur', setMask);
  });
};*/

document.addEventListener("DOMContentLoaded", () => {
  const navBtn = document.querySelector(".nav-icon-btn");
  const nav = document.querySelector(".header__nav");
  const body = document.body;

  navBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
    navBtn.classList.toggle("nav-icon-btn--active");
    body.classList.toggle("no-scroll");
  });
});
