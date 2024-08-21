const url = "./db/api.json";

const products__list = document.querySelector(".products__list");

async function getAllProducts() {
  const response = await fetch(url);
  const data = await response.json();

  data.products.map((item) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("data-aos", "fade-down");
    card.setAttribute("data-aos-duration", "2000");

    const card__top = document.createElement("div");
    card__top.setAttribute("class", "card__top");

    const brand = document.createElement("div");
    brand.setAttribute("class", "brand");

    const imgBrand = document.createElement("img");
    imgBrand.src = `${item.imgBrand}`;

    const product = document.createElement("div");
    product.setAttribute("class", "product");

    const imgProduct = document.createElement("img");
    imgProduct.src = `${item.imgProduct}`;

    const card__body = document.createElement("div");
    card__body.setAttribute("class", "card__body");

    const name = document.createElement("h3");
    name.innerText = item.name;

    const description = document.createElement("p");
    description.innerText = item.description;

    const price = document.createElement("strong");
    price.innerText = `R$ ${Number(item.price).toFixed(3)}`;

    const button = document.createElement("button");
    button.innerText = "Comprar";
    button.setAttribute("class", "button button-outline");

    card__top.appendChild(brand);
    card__top.appendChild(product);
    card__body.appendChild(name);
    card__body.appendChild(description);
    card__body.appendChild(price);
    card__body.appendChild(button);
    card.appendChild(card__top);
    brand.appendChild(imgBrand);
    product.appendChild(imgProduct);
    card.appendChild(card__body);
    products__list.appendChild(card);
  });
}

getAllProducts();

const date = new Date();
const year = date.getFullYear();

const yearFooter = document.querySelector('[data-js="yearFooter"]');

yearFooter.innerText = year;

AOS.init({
  once: true,
});
