import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const itemMerkup = createGalleryimage(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemMerkup);
galleryContainer.addEventListener('click', onImageClick)
function createGalleryimage(item) { 
    return galleryItems.map(({preview, original, description}) => { 
        return `<a class="gallery__item" href="${original}">
    <img
      title="${description}"
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`
    }).join('')
}

function onImageClick(event) { 
  event.preventDefault();
    if (event.target.classList.contains('gallery__item')) { 
        return;
    }
    let gallery = new SimpleLightbox('.gallery a');
    gallery.on('show.simplelightbox', function () {
        gallery.defaultOptions.captionDelay = 250;
    });
}