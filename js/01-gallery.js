import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const itemMerkup = createGalleryimage(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemMerkup);
galleryContainer.addEventListener('click', onImageClick)
function createGalleryimage(item) { 
    return galleryItems.map(({preview, original, description}) => { 
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join('')
}

function onImageClick(event) { 
  event.preventDefault();
    if (event.target.classList.contains('gallery')) { 
        return;
    }
  const sourceImage = event.target.dataset.source;

  const instance = basicLightbox.create(`<img src="${sourceImage}" width="800" height="600">`, {
    onshow: (instance) => { window.addEventListener('keydown', onEscPress)},
    onclose: (instance) => { window.removeEventListener('keydown', onEscPress)}
  });
  instance.show();
  function onEscPress(event) { 
    if (event.code !== 'Escape') { 
      return;
    }
    instance.close();
  };
}