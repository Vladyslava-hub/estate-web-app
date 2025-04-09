// Функція для ініціалізації карти
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
