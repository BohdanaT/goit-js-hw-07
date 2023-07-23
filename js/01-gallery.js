import { galleryItems } from './gallery-items.js';

const galleryItemsRef = document.querySelector('.gallery');

function createGalleryMarkup({ original, description }) {
    const galleryElement = document.createElement('li');
    galleryElement.classList.add('gallery__item');

    const galleryImage = document.createElement('img');
    galleryImage.classList.add('gallery__image');
    galleryImage.src = original;
    galleryImage.alt = description;

    galleryElement.append(galleryImage);

    return galleryElement;
}

const createGallery = galleryItems.map(createGalleryMarkup);
galleryItemsRef.append(...createGallery);
