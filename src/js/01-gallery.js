// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');
const items = [];

galleryItems.forEach(item => {
  const box = document.createElement('li');
  box.classList.add('gallery__item');
  const link = document.createElement('a');
  link.setAttribute('href', item.original);
  link.classList.add('gallery__link');
  box.append(link);
  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.setAttribute('src', item.preview);
  image.setAttribute('alt', item.description);
  link.append(image);
  items.push(box);
});

gallery.append(...items);

let modal = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});
