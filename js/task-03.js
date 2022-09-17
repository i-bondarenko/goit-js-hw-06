const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listGallary = document.querySelector('.gallery');

listGallary.style.cssText = 'list-style: none; display: flex; flex-wrap: wrap; gap: 30px;';
console.log(listGallary);

const listItems = images
  .map(({ url, alt }) => {
    return `<li><img src='${url}' alt='${alt}' width="300" height="200" /></li>`;
  })
  .join('');
listGallary.insertAdjacentHTML('afterbegin', listItems);

// const listItems = images.map(({ url, alt }) => {
//   // console.log(url);
//   const itemEl = document.createElement('li');
//   itemEl.classList.add('gallery-item');

//   const imgEl = document.createElement('img');
//   imgEl.src = url;
//   imgEl.alt = alt;

//   itemEl.append(imgEl);
//   return itemEl;
// });
// listGallary.append(...listItems);
//---------------------------------------------------------
// const itemEl = document.createElement('li');
// itemEl.classList.add('gallery-item');

// const imgEl = document.createElement('img');
// imgEl.src = images[0].url;
// imgEl.alt = images[0].alt;

// itemEl.append(imgEl);
// listGalary.append(itemEl);
