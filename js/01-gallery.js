import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryContainer = document.querySelector('.gallery');

const createGallery = galleryItems.map(image => 
  `<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>`
).join('');

galleryContainer.insertAdjacentHTML('beforeend', createGallery);
galleryContainer.addEventListener('click', onImageClick)
function onImageClick(event) { 
  event.preventDefault();
    if (event.target.classList.contains('gallery')) { 
        return;
    }
  const sourceImage = event.target.dataset.source;

  const instance = basicLightbox.create(`<img class="modal-img" src="${sourceImage}">`, {
    onshow: (instance) => window.addEventListener('keydown', onEscPress),
    onclose: (instance) => window.removeEventListener('keydown', onEscPress),
  });
  instance.show();

  function onEscPress(event) { 
    if (event.code === 'Escape') { 
      instance.close();
      window.removeEventListener('keydown', onEscPress);
    }
    
  }
}