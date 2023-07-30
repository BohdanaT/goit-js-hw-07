import { galleryItems } from './gallery-items.js';

const galleryItemsRef = document.querySelector('.gallery');

const createGalleryMarkup = galleryItems.map(
        ({ preview, original, description }) =>
            `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image"
                    src="${preview}" 
                    alt="${description}" />
                </a>
            </li>`
        ).join('');
    
galleryItemsRef.innerHTML = createGalleryMarkup;


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
