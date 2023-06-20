$(document).ready(function () {
  $("li.pagination-index button").click(function (e) {
    e.preventDefault();
    let listPaginationIndex = $(this)
      .closest(".pagination")
      .find(".pagination-index");
    $(listPaginationIndex).removeClass("active");
    $(this).closest(".pagination-index").addClass("active");
  });

  $(".pagination-pre").click(function (e) {
    e.preventDefault();
    let listPaginationIndex = $(this)
      .closest(".pagination")
      .find(".pagination-index");

    if (
      $(this)
        .closest(".pagination")
        .find(".pagination-index.active")
        .prev(".pagination-index").length === 0
    ) {
    } else {
      let preElement = $(this)
        .closest(".pagination")
        .find(".pagination-index.active")
        .prev(".pagination-index")
        .addClass("active");
      $(listPaginationIndex).removeClass("active");
      preElement.addClass("active");

      let typeProduct = $(preElement).closest("section").attr("class");
      let index = $(preElement).find("button").text();

      if (typeProduct === "flashsale") {
        flashSalePage--;
        changeFlashSalePage(index);
      } else if (typeProduct === "iPhone") {
        iPhonePage--;
        changeIphonePage(iPhonePage);
      } else if (typeProduct === "iPad") {
        iPadPage--;
        changeIpadPage(iPadPage);
      } else if (typeProduct === "macBook") {
        macBookPage--;
        changeMacbookPage(macBookPage);
      } else if (typeProduct === "airPods") {
        airpodsPage--;
        changeAirpodsPage(airpodsPage);
      }
    }
  });

  $(".pagination-next").click(function (e) {
    e.preventDefault();
    let listPaginationIndex = $(this)
      .closest(".pagination")
      .find(".pagination-index");

    if (
      $(this)
        .closest(".pagination")
        .find(".pagination-index.active")
        .next(".pagination-index").length === 0
    ) {
    } else {
      let preElement = $(this)
        .closest(".pagination")
        .find(".pagination-index.active")
        .next(".pagination-index")
        .addClass("active");
      $(listPaginationIndex).removeClass("active");
      preElement.addClass("active");

      let typeProduct = $(preElement).closest("section").attr("class");
      let index = $(preElement).find("button").text();

      if (typeProduct === "flashsale") {
        flashSalePage++;
        changeFlashSalePage(index);
      } else if (typeProduct === "iPhone") {
        iPhonePage++;
        changeIphonePage(iPhonePage);
      } else if (typeProduct === "iPad") {
        iPadPage++;
        changeIpadPage(iPadPage);
      } else if (typeProduct === "macBook") {
        macBookPage++;
        changeMacbookPage(macBookPage);
      } else if (typeProduct === "airPods") {
        airpodsPage++;
        changeAirpodsPage(airpodsPage);
      }
    }
  });
});

let flashSaleProducts = [
  {
    name: `MacBook Air M2 13.6" 2022 - 256GB - Chính hãng Apple Việt Nam`,
    currentPrice: "29,990,000 ₫",
    salePrice: "26,990,000 ₫",
    img: "../img/mac-air-m2.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `Airpods 3 - Lightning Charging Case – Chính hãng Apple Việt Nam`,
    currentPrice: "4,990,000 ₫",
    salePrice: "3,990,000 ₫",
    img: "./img/airpods-3.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `Apple Watch Series 8 GPS + Cellular, 41mm - Viền thép dây thép - VN/A`,
    currentPrice: "18,690,000 ₫",
    salePrice: "15,690,000 ₫",
    img: "./img/appleWatch.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `iPhone 14 Pro (256GB) - Chính hãng VN/A`,
    currentPrice: "27,390,000 ₫",
    salePrice: "23,690,000 ₫",
    img: "./img/airpods-pro.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
];

let iPhoneProducts = [
  {
    name: "iPhone 14 Pro (256GB) - Chính hãng VN/A",
    price: "27,390,000 đ",
    img: "../img/iphone14-prm.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: "iPhone 14 Pro (512GB) - Chính hãng VN/A",
    price: "31,990,000 ₫",
    img: "./img/iphone14-prm.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: "iPhone 14 Pro (1TB) - Chính hãng VN/A",
    price: "33,990,000 ₫",
    img: "./img/iphone14-prm.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: "iPhone 14 Pro Max (256GB) - Chính hãng VN/A",
    price: "29,390,000 ₫",
    img: "./img/iphone14-prm.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: "iPhone 14 Pro Max (1TB) - Chính hãng VN/A",
    price: "40,890,000 ₫",
    img: "./img/iphone14-prm.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: "iPhone 14 (128GB) - Chính hãng VN/A",
    price: "18,990,000 ₫",
    img: "./img/iphone14-1.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: "iPhone 14 (256GB) - Chính hãng VN/A",
    price: "21,890,000 ₫",
    img: "./img/iphone14-1.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: "iPhone 14 (512GB) - Chính hãng VN/A",
    price: "23,490,000 ₫",
    img: "./img/iphone14-1.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: "iPhone 14 Plus (128GB) - Chính hãng VN/A",
    price: "21,490,000 ₫",
    img: "./img/iphone14-1.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: "iPhone 14 Plus (256GB) - Chính hãng VN/A",
    price: "24,390,000 ₫",
    img: "./img/iphone14-1.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: "iPhone 14 Plus (512GB) - Chính hãng VN/A",
    price: "24,990,000 ₫",
    img: "./img/iphone14-1.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
];

let iPadProducts = [
  {
    name: `iPad Pro M1 12.9" - (2021) - Wifi - 128GB`,
    price: "22,990,000 ₫",
    img: "./img/ipad-pro-m1.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `iPad Pro M1 12.9" - (2021) - Wifi - 256GB`,
    price: "25,950,000 ₫",
    img: "./img/ipad-pro-m1.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `iPad Pro M1 12.9" - (2021) - Wifi+5G - 128GB`,
    price: "25,990,000 ₫",
    img: "./img/ipad-pro-m1-5g.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `iPad Pro M1 12.9" - (2021) - Wifi - 512GB`,
    price: "31,890,000 ₫",
    img: "./img/ipad-pro-m1.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `iPad Mini 6 - 8.3" - (2021) - Wifi - 64GB`,
    price: "11,990,000 ₫",
    img: "./img/ipad-mini-6.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `iPad Mini 6 - 8.3" - (2021) - 5G - 64GB`,
    price: "15,490,000 ₫",
    img: "./img/ipad-mini-6-5g.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `iPad Gen 9 - 10.2" - (2021) - Wifi - 64GB - Chính Hãng Apple Việt Nam`,
    price: "6,860,000 ₫",
    img: "./img/ipad-gen9-1.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `iPad Gen 9 - 10.2" - (2021) - Wifi - 256GB - Chính Hãng Apple VN`,
    price: "10,990,000 ₫",
    img: "./img/ipad-gen9-1.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `iPad Gen 9 - 10.2" - (2021) - 4G - 64GB - Chính Hãng Apple Việt Nam`,
    price: "9,690,000 ₫",
    img: "./img/ipad-gen9-4g.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `iPad Gen 9 - 10.2" - (2021) - 4G - 256GB - Chính Hãng Apple Việt Nam`,
    price: "12,990,000 ₫",
    img: "./img/ipad-gen9-4g.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `iPad Air 5 M1 10.9" - 2022 - Wifi - 64GB - Chính Hãng Apple Việt Nam`,
    price: "13,990,000 ₫",
    img: "./img/ipad-air5-m1.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
];

let macBookProducts = [
  {
    name: `MacBook Air M2 13.6" 2022 - 256GB - Chính hãng Apple Việt Nam`,
    price: "29,990,000 ₫",
    img: "./img/mac-air-m2.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `MacBook Pro M2 13" 2022 - 256GB - Chính hãng Apple Việt Nam`,
    price: "31,990,000 ₫",
    img: "./img/mac-pro-m2.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `MacBook Air M2 13.6" 2022 - 512GB - Chính hãng Apple Việt Nam`,
    price: "36,990,000 ₫",
    img: "./img/mac-air-m2.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `MacBook Pro M2 13" 2022 - 512GB - Chính hãng Apple Việt Nam`,
    price: "36,990,000 ₫",
    img: "./img/mac-pro-m2.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `MacBook Pro M2 13" 2022 - 16GB/256GB - Chính hãng Apple Việt Nam`,
    price: "36,990,000 ₫",
    img: "./img/mac-pro-m2.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `MacBook Air M2 13" 2022 - 16GB/256GB - Chính hãng Apple Việt Nam`,
    price: "39,990,000 đ",
    img: "./img/mac-air-m2.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `Apple M1 - MacBook Pro 13'' 512GB 2020 - Chính hãng Apple Việt Nam`,
    price: "32,590,000 ₫",
    img: "./img/apple-m1-mac-pro-2020.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `MacBook Air 13-inch M1 (8GB/256GB) - Chính hãng Apple Việt Nam`,
    price: "27,990,000 ₫",
    img: "./img/mac-air-m1.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `Apple M1 - MacBook Pro 13" 256GB 2020 - Chính hãng Apple Việt Nam`,
    price: "27,890,000 ₫",
    img: "../img/apple-m1-mac-pro-2020.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `Apple iMac 2021 M1 24'' 7 Core GPU - 256GB - Chính hãng Apple Việt Nam`,
    price: "31,490,000 đ",
    img: "./img/apple-imac-m1-7core.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `Apple iMac 2021 M1 24'' 8 Core GPU - 512GB - Chính hãng Apple Việt Nam`,
    price: "41,490,000 đ",
    img: "./img/apple-imac-m1-8-core.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
];

let airpodsProducts = [
  {
    name: `AirPods Pro 2 - Chính hãng Apple Việt Nam`,
    price: "7,990,000 ₫",
    img: "./img/airpods-pro-2.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `Airpods 3 - Lightning Charging Case – Chính hãng Apple Việt Nam`,
    price: "4,990,000 ₫",
    img: "./img/airpods-3.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `AirPods 2 - Case sạc thường chính hãng VN/A (MV7N2VN/A)`,
    price: "4,990,000 ₫",
    img: "./img/airpods-2.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
  {
    name: `AirPods Pro - Chính Hãng Apple (MLWK3ZP/A, MagSafe)`,
    price: "7,990,000 ₫",
    img: "./img/airpods-pro.webp",
    link: "./DES_PRODUCT/iphone14.html",
  },
];

let iPhonePage = 1;
let iPadPage = 1;
let macBookPage = 1;
let flashSalePage = 1;
let airpodsPage = 1;
let limit = 5;

function loadLimit() {
  if (window.innerWidth < 576) {
    limit = 2;
  } else if (window.innerWidth < 800) {
    limit = 3;
  } else if (window.innerWidth < 1200) {
    limit = 4;
  } else if (window.innerWidth < 1400) {
    limit = 5;
  } else {
    limit = 6;
  }
}

function loadIphone() {
  loadLimit();
  let beginGet = limit * (iPhonePage - 1);
  let endGet = limit * iPhonePage - 1;
  let container = $(".iPhone .product");
  let html = "";

  container.html("");

  iPhoneProducts.forEach((item, key) => {
    if (key >= beginGet && key <= endGet) {
      html += `<div class="card mx-2 border-0">
                        <div class="img d-flex justify-content-center align-items-center p-4">
                            <a href="${item.link}">
                                <img src="${item.img}" alt="" class="w-100">
                            </a>
                        </div>
                        <div class="card-body">
                            <div class="card-title text-black fw-bold">
                                <a href="${item.link}" class="text-black text-decoration-none">
                                    ${item.name}
                                </a>
                            </div>
                            <hr>
                            <div class="card-text fw-bold">${item.price}</div>
                        </div>
                    </div>`;
    }
  });

  container.html(html);
}

function loadIpad() {
  loadLimit();
  let beginGet = limit * (iPadPage - 1);
  let endGet = limit * iPadPage - 1;
  let container = $(".iPad .product");
  let html = "";

  container.html("");

  iPadProducts.forEach((item, key) => {
    if (key >= beginGet && key <= endGet) {
      html += `<div class="card mx-2 border-0">
                        <div class="img d-flex justify-content-center align-items-center p-4">
                            <a href="${item.link}">
                                <img src="${item.img}" alt="" class="w-100">
                            </a>
                        </div>
                        <div class="card-body">
                            <div class="card-title text-black fw-bold">
                                <a href="${item.link}" class="text-black text-decoration-none">
                                    ${item.name}
                                </a>
                            </div>
                            <hr>
                            <div class="card-text fw-bold">${item.price}</div>
                        </div>
                    </div>`;
    }
  });

  container.html(html);
}

function loadMacBook() {
  loadLimit();
  let beginGet = limit * (macBookPage - 1);
  let endGet = limit * macBookPage - 1;
  let container = $(".macBook .product");
  let html = "";

  container.html("");

  macBookProducts.forEach((item, key) => {
    if (key >= beginGet && key <= endGet) {
      html += `<div class="card mx-2 border-0">
                        <div class="img d-flex justify-content-center align-items-center p-4">
                            <a href="${item.link}">
                                <img src="${item.img}" alt="" class="w-100">
                            </a>
                        </div>
                        <div class="card-body">
                            <div class="card-title text-black fw-bold">
                                <a href="${item.link}" class="text-black text-decoration-none">
                                    ${item.name}
                                </a>
                            </div>
                            <hr>
                            <div class="card-text fw-bold">${item.price}</div>
                        </div>
                    </div>`;
    }
  });

  container.html(html);
}

function loadAirPods() {
  loadLimit();
  let beginGet = limit * (airpodsPage - 1);
  let endGet = limit * airpodsPage - 1;
  let container = $(".airPods .product");
  let html = "";

  container.html("");

  airpodsProducts.forEach((item, key) => {
    if (key >= beginGet && key <= endGet) {
      html += `<div class="card mx-2 border-0">
                        <div class="img d-flex justify-content-center align-items-center p-4">
                            <a href="${item.link}">
                                <img src="${item.img}" alt="" class="w-100">
                            </a>
                        </div>
                        <div class="card-body">
                            <div class="card-title text-black fw-bold">
                                <a href="${item.link}" class="text-black text-decoration-none">
                                    ${item.name}
                                </a>
                            </div>
                            <hr>
                            <div class="card-text fw-bold">${item.price}</div>
                        </div>
                    </div>`;
    }
  });

  container.html(html);
}

function loadFlashSale() {
  loadLimit();
  let beginGet = limit * (flashSalePage - 1);
  let endGet = limit * flashSalePage - 1;
  let container = $(".flashsale .product");
  let html = "";

  container.html("");

  flashSaleProducts.forEach((item, key) => {
    if (key >= beginGet && key <= endGet) {
      html += `<div class="card mx-2 border-0">
                        <div class="img img img d-flex justify-content-center align-items-center p-4">
                            <a href="${item.link}"><img src="${item.img}" alt=""
                                    class="w-100"></a>
                        </div>
                        <div class="card-body">
                            <div class="card-title text-black fw-bold"><a href="${item.link}"
                                    class="text-black text-decoration-none">${item.name}</a></div>
                            <hr>
                            <div class="card-text fw-bold">
                                <s>${item.currentPrice}</s>
                                ${item.salePrice}
                            </div>
                        </div>
                    </div>`;
    }
  });

  container.html(html);
}

function loadProduct() {
  loadIphone();
  loadIpad();
  loadMacBook();
  loadAirPods();
  loadFlashSale();
}

function listFlashSalePage() {
  let count = Math.ceil(flashSaleProducts.length / limit);
  let container = $(".flashsale ul.pagination");

  let buttonPre = `<li class="page-item pagination-pre">
                                <button class="page-link mx-2" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </button>
                            </li>`;

  let buttonNext = `<li class="page-item pagination-next">
                                <button class="page-link mx-2" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </button>
                            </li>`;

  let html = "";

  for (let i = 1; i <= count; i++) {
    html += `<li class="page-item pagination-index ${
      i === iPhonePage ? "active" : ""
    }"><button class="page-link mx-2" onclick="changeFlashSalePage(${i})">${i}</button></li>`;
  }

  container.html(buttonPre + html + buttonNext);
}

function listIphonePage() {
  let count = Math.ceil(iPhoneProducts.length / limit);
  let container = $(".iPhone ul.pagination");

  let buttonPre = `<li class="page-item pagination-pre">
                                <button class="page-link mx-2" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </button>
                            </li>`;

  let buttonNext = `<li class="page-item pagination-next">
                                <button class="page-link mx-2" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </button>
                            </li>`;

  let html = "";

  for (let i = 1; i <= count; i++) {
    html += `<li class="page-item pagination-index ${
      i === iPhonePage ? "active" : ""
    }"><button class="page-link mx-2" onclick="changeIphonePage(${i});">${i}</button></li>`;
  }

  container.html(buttonPre + html + buttonNext);
}

function listIpadPage() {
  let count = Math.ceil(iPadProducts.length / limit);
  let container = $(".iPad ul.pagination");

  let buttonPre = `<li class="page-item pagination-pre">
                                <button class="page-link mx-2" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </button>
                            </li>`;

  let buttonNext = `<li class="page-item pagination-next">
                                <button class="page-link mx-2" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </button>
                            </li>`;

  let html = "";

  for (let i = 1; i <= count; i++) {
    html += `<li class="page-item pagination-index ${
      i === iPhonePage ? "active" : ""
    }"><button class="page-link mx-2" onclick="changeIpadPage(${i});">${i}</button></li>`;
  }

  container.html(buttonPre + html + buttonNext);
}

function listMacbookPage() {
  let count = Math.ceil(macBookProducts.length / limit);
  let container = $(".macBook ul.pagination");

  let buttonPre = `<li class="page-item pagination-pre">
                                <button class="page-link mx-2" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </button>
                            </li>`;

  let buttonNext = `<li class="page-item pagination-next">
                                <button class="page-link mx-2" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </button>
                            </li>`;

  let html = "";

  for (let i = 1; i <= count; i++) {
    html += `<li class="page-item pagination-index ${
      i === iPhonePage ? "active" : ""
    }"><button class="page-link mx-2" onclick="changeMacbookPage(${i});">${i}</button></li>`;
  }

  container.html(buttonPre + html + buttonNext);
}

function listAirpodsPage() {
  let count = Math.ceil(airpodsProducts.length / limit);
  let container = $(".airPods ul.pagination");

  let buttonPre = `<li class="page-item pagination-pre">
                                <button class="page-link mx-2" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </button>
                            </li>`;

  let buttonNext = `<li class="page-item pagination-next">
                                <button class="page-link mx-2" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </button>
                            </li>`;

  let html = "";

  for (let i = 1; i <= count; i++) {
    html += `<li class="page-item pagination-index ${
      i === iPhonePage ? "active" : ""
    }"><button class="page-link mx-2" onclick="changeAirpodsPage(${i});">${i}</button></li>`;
  }

  container.html(buttonPre + html + buttonNext);
}

function loadPagination() {
  listFlashSalePage();
  listIphonePage();
  listIpadPage();
  listMacbookPage();
  listAirpodsPage();
}

function changeFlashSalePage(i) {
  flashSalePage = i;
  loadFlashSale();
}

function changeIphonePage(i) {
  iPhonePage = i;
  loadIphone();
}

function changeIpadPage(i) {
  iPadPage = i;
  loadIpad();
}

function changeMacbookPage(i) {
  macBookPage = i;
  loadMacBook();
}

function changeAirpodsPage(i) {
  airpodsPage = i;
  loadAirPods();
}

loadProduct();
loadPagination();

window.addEventListener("resize", function () {
  loadProduct();
  loadPagination();
});
