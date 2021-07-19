window.onload = () => {

  setFormListener();
  putBannerImg("../assets/blackfriday-banner.png", "Ir para as promoções da Blackfriday", "#");
  changeBannerImg();
  putProducts();
}

function putBannerImg(path, alt, href) {

  const bannerContainer = document.querySelector(".banner-container");

  bannerContainer.innerHTML = `
  <a class="banner-container__link" href="${href}">
    <img 
      class="banner-container__img"
      src="${path}" 
      alt="${alt}"
    >
  </a>
  `;
}

function changeBannerImg() {

  let counter = 0;
  const imgArray = [
    { path: "../assets/blackfriday-banner.png", alt: "Ir para as promoções da Blackfriday", href: "#" },
    { path: "../assets/comics-banner.png", alt: "Ir para a seção de quadrinhos com até 60% de desconto", href: "#" }
  ]

  setInterval(() => {

    const currentImgEl = document.querySelector(".banner-container__img");

    counter++;
    currentImgEl.style.opacity = 0;

    setTimeout(() => {
      const index = counter % imgArray.length;

      putBannerImg(imgArray[index].path, imgArray[index].alt, imgArray[index].href);
    }, 1000);

  }, 5000);
}

function putProducts() {

  const productsContainer = document.querySelector(".products-container");
  const productsElArray = [];
  const productArray = [
    { imgUrl: "../assets/anne-frank.jpg", fullName: "O diário de Anne Frank", originalPrice: 75, discount: 0.5 },
    { imgUrl: "../assets/the-mist.jpeg", fullName: "The Mist", originalPrice: 80, discount: 0.6 },
    { imgUrl: "../assets/guia-dos-mochileiros.jpeg", fullName: "Guia do Mochileiro das Galáxias", originalPrice: 60, discount: 0.3 },
    { imgUrl: "../assets/batman.jpeg", fullName: "Batman - Terra Um", originalPrice: 75, discount: 0.4 },
    { imgUrl: "../assets/mitos-gregos.jpeg", fullName: "Mitos Gregos para Jovens Leitores", originalPrice: 35, discount: 0.6 },
    { imgUrl: "../assets/coringa.jpg", fullName: "Batman: Os Três Coringas", originalPrice: 70, discount: 0.3 },
  ];

  for (const product of productArray) {
    
    const productElement = `
    <div class="products-container__item">
      <img class="products-container__img" src="${product.imgUrl}" alt="Comprar ${product.fullName}">
      <strong>${product.fullName}</strong>
      <div>
        <strong class="products-container__current-price">
          ${Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(product.originalPrice * product.discount)}
        </strong>
        <span class="products-container__original-price">
          ${Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(product.originalPrice)}
        </span>
      </div>
    </div>
    `;

    productsElArray.push(productElement);
  }

  productsContainer.innerHTML = productsElArray;
}

function setFormListener() {

  const formContainerEl = document.querySelector(".newsletter-container");
  const formEl = document.querySelector(".newsletter-form");

  formEl.addEventListener("submit", (evt) => {

    saveDataFromForm(evt);

    formContainerEl.innerHTML = `
      <h2>Obrigado por se cadastrar em nossa <i>newsletter</i>!</h2>
    `;
  });

    
}

function saveDataFromForm(evt) {

  evt.preventDefault();

  const data = {
    fullName: document.querySelector("#full-name").value,
    email: document.querySelector("#email").value
  };
  
  sessionStorage.setItem("user", JSON.stringify(data));
}

