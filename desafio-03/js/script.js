const url = "./db/api.json";

const posts__list = document.querySelector(".posts__list");

async function getAllPosts() {
  const response = await fetch(url);
  const data = await response.json();

  data.posts.map((item) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const card__top = document.createElement("div");
    card__top.setAttribute("class", "card__top");

    const imgPost = document.createElement("img");
    imgPost.src = `${item.imgPost}`;

    const card__body = document.createElement("div");
    card__body.setAttribute("class", "card__body");

    const title = document.createElement("h3");
    title.innerText = item.title;

    const description = document.createElement("p");
    description.innerText = item.description;

    card__top.appendChild(imgPost);
    card__body.appendChild(title);
    card__body.appendChild(description);
    card.appendChild(card__top);
    // imgPost.appendChild(imgPost);
    card.appendChild(card__body);
    posts__list.appendChild(card);
  });
}

getAllPosts();

const date = new Date();
const year = date.getFullYear();

const yearFooter = document.querySelector('[data-js="yearFooter"]');

yearFooter.innerText = year;
