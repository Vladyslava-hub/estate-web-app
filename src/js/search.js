
  let properties = [];

  async function fetchData() {
    try {
      const res = await fetch('src/data/properties.json');
      if (!res.ok) {
        throw new Error('Помилка при завантаженні JSON');
      }
      properties = await res.json();
      renderProperties(properties);
    } catch (error) {
      console.error(error);
      document.getElementById('resultsContainer').innerHTML = '<p>Не вдалося завантажити дані.</p>';
    }
  }

  function renderProperties(data) {
    const container = document.getElementById('resultsContainer');
    container.innerHTML = '';

    if (data.length === 0) {
      container.innerHTML = '<p>Нічого не знайдено</p>';
      return;
    }

    data.forEach(item => {
      const card = document.createElement('a');
      card.className = 'card';
      card.href = '#!';
      card.innerHTML = `
        <img class="card__img" src="${item.photo}" alt="${item.name}">
        <h3 class="card__title">${item.name}</h3>
        <p><strong>Локація:</strong> ${item.location}</p>
        <p><strong>Ціна:</strong> $${item.price}</p>
        <p><strong>Тип:</strong> ${item.type}</p>
        <p>${item.description}</p>
      `;
      container.appendChild(card);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    fetchData();

    document.getElementById('searchInput').addEventListener('input', function () {
      const query = this.value.toLowerCase();
      const filtered = properties.filter(item =>
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query)
      );
      renderProperties(filtered);
    });
  });
