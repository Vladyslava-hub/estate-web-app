/* Nav icon */
const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');

navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header__top-row--mobile');
    document.body.classList.toggle('no-scroll');
}

/* Phone Mask */
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
};

// eslint-disable-next-line no-unused-vars
function initMap() {
  // eslint-disable-next-line no-undef
  const map = new google.maps.Map(document.getElementById("google-map"), {
      center: { lat: 59.943543, lng: 30.338928 },
      zoom: 16,
  });

  // eslint-disable-next-line no-undef
  const marker = new google.maps.Marker({
      position: { lat: 59.943543, lng: 30.338928 },
      map: map,
      title: "Example Location",
  });

  // eslint-disable-next-line no-undef
  const infoWindow = new google.maps.InfoWindow({
      content: `
          <div class="balloon">
              <div class="balloon__address">Example Location</div>
              <div class="balloon__contacts">
                  <a href="tel:+78121234567">+8 (812) 123-45-67</a>
              </div>
          </div>
      `,
  });

  marker.addListener("click", function () {
      infoWindow.open(map, marker);
  });
}



// Функція для динамічного завантаження Google Maps API
function loadGoogleMapsAPI() {
  const script = document.createElement("script");
  script.src = "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap";
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);
}

// Завантажуємо Google Maps API, коли документ готовий
window.onload = loadGoogleMapsAPI;

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
