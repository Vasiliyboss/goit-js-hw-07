import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
galleryContainer.insertAdjacentHTML('beforeend', createGalleryimage());
galleryContainer.addEventListener('click', onImageClick)
function createGalleryimage() { 
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
};

function onImageClick(evt) { 
  evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) { 
        return;
    }
  console.log("click", evt.target.dataset.source);
  // const element = instance.element()

const instance = basicLightbox.create(evt.target.dataset.source)
  // instance.element().querySelector('gallery__modal');
instance.show()
}