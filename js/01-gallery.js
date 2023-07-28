import { galleryItems } from './gallery-items.js';

const galleryItemsRef = document.querySelector('.gallery');

const createGalleryMarkup = galleryItems.map(
        ({ preview, original, description }) =>
            `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </li>`
    ).join('');
    
    galleryItemsRef.innerHTML = createGalleryMarkup;

galleryItemsRef.addEventListener('click', onGalleryImageClick);

function onGalleryImageClick(evt) {
    evt.preventDefault();

    if (evt.target.classList.contains('gallery')) {
        return;
    }

    const src = evt.target.dataset.source;
    
    const instance = basicLightbox.create(`
    <img src="${src}"
    width="1280">
    `)

    instance.show();
}