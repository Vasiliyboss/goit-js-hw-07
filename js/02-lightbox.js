import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

galleryContainer.addEventListener('click', onImageClick)
const createGallery = galleryItems.map(({preview, original, description}) =>  
    `<a class="gallery__item" href="${original}">
    <img
      title="${description}"
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`
    ).join('')

galleryContainer.insertAdjacentHTML('beforeend', createGallery);
function onImageClick(event) { 
  event.preventDefault();
    if (event.target.classList.contains('gallery__item')) { 
        return;
    }
    new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    fadeSpeed: 250,
    overlayOpacity: 0.7,
    captionsData: 'alt',
})
}