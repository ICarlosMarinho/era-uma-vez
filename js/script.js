window.onload = () => {

  putBannerImg("../assets/blackfriday-banner.png", "Ir para as promoções da Blackfriday", "#");
  changeBannerImg();
}

function putBannerImg(path, alt, href) {

  const bannerContainer = document.querySelector(".banner-container");

  bannerContainer.innerHTML = `
  <a href="${href}">
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