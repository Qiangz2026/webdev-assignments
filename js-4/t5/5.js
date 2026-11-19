let picArray = [
  {
    title: 'Sample Title',
    image: {
      medium: 'https://via.placeholder.com/300',
    },
    caption: 'Sample caption',
    description: 'Sample description',
  },
];

const section = document.querySelector('section');

for (const item of picArray) {
  const article = document.createElement('article');
  article.classList.add('card');

  const h2 = document.createElement('h2');
  h2.textContent = item.title;

  const figure = document.createElement('figure');

  const img = document.createElement('img');
  img.src = item.image.medium;
  img.alt = item.title;

  const figcaption = document.createElement('figcaption');
  figcaption.textContent = item.caption;

  figure.appendChild(img);
  figure.appendChild(figcaption);

  const p = document.createElement('p');
  p.textContent = item.description;

  article.appendChild(h2);
  article.appendChild(figure);
  article.appendChild(p);

  section.appendChild(article);
}