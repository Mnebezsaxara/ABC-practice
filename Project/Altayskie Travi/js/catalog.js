
  const products = [
    { id: 1, name: "Сироп 1", category: "calm", img: "images/catalog.png" },
    { id: 2, name: "Сироп 2", category: "support", img: "images/catalog.png" },
    { id: 3, name: "Сироп 3", category: "protect", img: "images/catalog.png" },
    { id: 4, name: "Сироп 4", category: "health", img: "images/catalog.png" },
    { id: 5, name: "Сироп 5", category: "fatloss", img: "images/catalog.png" },
    { id: 6, name: "Сироп 6", category: "Forkids", img: "images/catalog.png" },
    { id: 7, name: "Сироп 7", category: "fito", img: "images/catalog.png" },
    { id: 8, name: "Сироп 8", category: "supllements", img: "images/catalog.png" },
    { id: 9, name: "Сироп 9", category: "syrup", img: "images/catalog.png" },
    { id: 10, name: "Сироп 10", category: "women", img: "images/catalog.png" },
    { id: 11, name: "Сироп 11", category: "kidneys", img: "images/catalog.png" },



  ];

  const perPage = 6; 
  let currentPage = 1;
  let currentFilter = "all";

  const productList = document.getElementById("product-list");
  const pagination = document.getElementById("pagination");
  const filterButtons = document.querySelectorAll(".filter");

  function renderProducts() {
    let filtered = currentFilter === "all"
      ? products
      : products.filter(p => p.category === currentFilter);

    const start = (currentPage - 1) * perPage;
    const paginated = filtered.slice(start, start + perPage);

    productList.innerHTML = paginated.map(p => `
    <div class="catalog-item">
        <div class="catalog-item__top">
        <p class="catalog-badge">NEW</p>
        <img src="images/catalog.png" alt="" class="catalog-item__img">
        </div>
        <div class="catalog-item__bottom">
        <p class="catalog-category">Категория товара</p>
        <h3 class="catalog-name">Название товара, данные</h3>
        <a href="#" class="catalog-btn btn">Купить у партнёров</a>
        </div>
    </div>
    `).join("");

    renderPagination(filtered.length);
  }

  function renderPagination(totalItems) {
    const pageCount = Math.ceil(totalItems / perPage);
    pagination.innerHTML = "";

    for (let i = 1; i <= pageCount; i++) {
      const btn = document.createElement("button");
      btn.textContent = i;
      if (i === currentPage) btn.classList.add("active");
      btn.addEventListener("click", () => {
        currentPage = i;
        renderProducts();
      });
      pagination.appendChild(btn);
    }
  }

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      currentPage = 1;
      renderProducts();
    });
  });

  renderProducts();
