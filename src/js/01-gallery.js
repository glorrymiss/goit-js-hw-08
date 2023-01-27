import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
// =======================
const gallery = document.querySelector('.gallery');
const allElements = createGalleryImages(galleryItems);
function createGalleryImages(galleryItems) {
  const item = galleryItems
    .map(({ description, original, preview }) => {
      return `
     <li class ="gallery__item">
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a>
    </li>
    `;
    })
    .join('');
  console.log(item);
  return item;
}
gallery.insertAdjacentHTML('afterbegin', allElements);

const lightbox = new SimpleLightbox('.gallery a', {
  // === затримка і виведення опису зображення
  captionData: 'title',
  captionDelay: 250,
});
