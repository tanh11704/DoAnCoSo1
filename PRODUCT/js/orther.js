let ortherProducts = [
  {
    name: `Sạc Apple 12W USB Power Adapter - Chính hãng`,
    price: "480,000 ₫",
    img: "./img/sac-apple-12w.png",
    link: "../DES_PRODUCT/iphone14.html",
  },
  {
    name: `Tai nghe Beats Solo3 Wireless Headphones - Chính hãng FPT`,
    price: "4,590,000 ₫",
    img: "./img/Tai nghe Apple Beats Solo3 Wireless Headphones.png",
    link: "../DES_PRODUCT/iphone14.html",
  },
  {
    name: `Tai nghe Beats Studio3 Wireless Over-Ear Headphones - Chính hãng FPT`,
    price: "6,990,000 ₫",
    img: "./img/Tai nghe Apple Beats Studio3 Wireless Over-Ear Headphones .png",
    link: "../DES_PRODUCT/iphone14.html",
  },
  {
    name: `Tai nghe BeatsX Earphones - Chính hãng FPT`,
    price: "2,390,000 ₫",
    img: "./img/Tai nghe Apple BeatsX Earphones.png",
    link: "../DES_PRODUCT/iphone14.html",
  },
];

function loadOrther() {
  let container = $(".content__product .product");
  let html = "";

  container.html("");

  ortherProducts.forEach((item) => {
    html += `<div class="col-5 col-md-3 card mx-4 mb-3 border-0 p-0">
                              <div class="img d-flex justify-content-center align-items-center p-4">
                                  <a href="${item.link}"><img src="${item.img}" alt=""
                                          class="w-100"></a>
                              </div>
                              <div class="card-body">
                                  <div class="card-title text-black fw-bold"><a href="../DES_PRODUCT/iphone14.html"
                                          class="text-black text-decoration-none">${item.name}</a></div>
                                  <hr>
                                  <div class="card-text fw-bold">${item.price}</div>
                              </div>
                          </div>`;
  });

  container.html(html);
}

loadOrther();
