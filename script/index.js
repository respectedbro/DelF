const modalFunc = () => {
  const modal = document.querySelector(".cart-modal__overlay");
  const cartBtn = document.querySelector("#cart-btn");

  const openModal = () => {
    modal.classList.add("open");
  };

  const closeModal = () => {
    modal.classList.remove("open");
  };

  cartBtn.addEventListener("click", () => {
    openModal();
  });

  modal.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("cart-modal__overlay") ||
      e.target.closest(".cart-modal__header--close")
    ) {
      closeModal();
    }
  });
};

const restsFunc = () => {
  const container = document.querySelector("#rests-container");

  const restArray = [
    {
      id: 0,
      title: "Пицца плюс",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: `img1.jpg`,
    },
    {
      id: 1,
      title: "Тануки",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: `img2.jpg`,
    },
    {
      id: 2,
      title: "Жадина-пицца",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: `img3.jpg`,
    },
    {
      id: 3,
      title: "Точка еды",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: `img4.jpg`,
    },
    {
      id: 4,
      title: "PizzaBurger",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: `img5.jpg`,
    },
    {
      id: 5,
      title: "FoodBand                        ",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: `img6.jpg`,
    },
  ];

  const loading = () => {
    container.innerHTML =
      "<p style='width: 100%; text-align: center'>Загрузка...<p/>";
  };

  const renderRests = (arr) => {
    container.innerHTML = "";
    arr.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `
      <a href="./goods.html?id=${card.id}"  class="products-card">
                        <div class="products-card___image">
                            <img src="./images/rests/${card.image}" alt="img1">
                        </div>
                        <div class="products-card__description">
                            <div class="products-card__description-row">
                                <h4 class="products-card__description--title">${card.title}</h4>
                                <div class="products-card__description--badge">${card.time}мин</div>
                            </div>
                            <div class="products-card__description-row">
                                <div class="products-card__description-info">
                                    <div class="products-card__description-info--rating">
                                        <img src="./images/items/star.png" alt="star">
                                        ${card.rating}
                                    </div>
                                    <div class="products-card__description-info--price">
                                        От ${card.price} ₽
                                    </div>
                                    <div class="products-card__description-info--group">
                                        ${card.type}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
      `
      );
    });
  };

  if (container) {
    loading();

    setTimeout(() => {
      renderRests(restArray);
    }, 1000);
  }
};

const goodsFunc = () => {
  const goodsContainer = document.getElementById("goods-container");
  const goodsArray = [
    {
      title: "Ролл угорь стандарт",
      description: "Рис, угорь, соус унаги, кунжут, водоросли нори.",
      price: 250,
      image: "good1.jpg",
      alt: "good1",
    },
    {
      title: "Калифорния лосось стандарт",
      description:
        "Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.",
      price: 250,
      image: "good2.jpg",
      alt: "good2",
    },
    {
      title: "Окинава стандарт",
      description:
        " Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...",
      price: 250,
      image: "good3.jpg",
      alt: "good3",
    },
    {
      title: "Цезарь маки хl",
      description:
        "Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...",
      price: 250,
      image: "good4.jpg",
      alt: "good4",
    },
    {
      title: "Ясай маки стандарт 185 г",
      description:
        "Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг",
      price: 250,
      image: "good5.jpg",
      alt: "good4",
    },
    {
      title: "Ролл с креветкой стандарт",
      description:
        "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы",
      price: 250,
      image: "good5.jpg",
      alt: "good5",
    },
  ];

  const loading = () => {
    goodsContainer.innerHTML =
      "<p style='width: 100%; text-align: center'>Загрузка...<p/>";
  };

  const renderGoods = (arr) => {
    goodsContainer.innerHTML = "";
    arr.forEach((card) => {
      goodsContainer.insertAdjacentHTML(
        "beforeend",
        `
      <div class="products-card">
                        <div class="products-card___image">
                            <img src="./images/goods/${card.image}" alt="${card.alt}">
                        </div>
                        <div class="products-card__description">
                            <div class="products-card__description-row">
                                <h5 class="products-card__description--name">${card.title}</h5>
                            </div>
                            <div class="products-card__description-row">
                                <p class="products-card__description--text">${card.description}</p>
                            </div>
                            <div class="products-card__description-row">
                                <div class="products-card__description-controls">
                                    <button class="btn primary">
                                       В корзину
                                        <img src="./images/items/cart-min.svg" alt="cart-min">
                                    </button>
                                    <span class="products-card__description-controls--price">${card.price} ₽</span>
                                </div>
                            </div>
                        </div>
                    </div>
      `
      );
    });
  };

  if (goodsContainer) {
    loading();

    setTimeout(() => {
      renderGoods(goodsArray);
    }, 1000);
  }
};

modalFunc();
restsFunc();
goodsFunc();
