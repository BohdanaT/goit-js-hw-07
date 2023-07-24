import { galleryItems } from './gallery-items.js';

const galleryItemsRef = document.querySelector('.gallery');

function createGalleryMarkup ({ preview, description }) {
    const galleryElement = document.createElement('li');
    galleryElement.classList.add('gallery__item');

    const galleryImage = document.createElement('img');
    galleryImage.classList.add('gallery__image');
    galleryImage.src = preview;
    galleryImage.alt = description;

    galleryElement.append(galleryImage);

    return galleryElement;
}

const createGallery = galleryItems.map(createGalleryMarkup);
galleryItemsRef.append(...createGallery);


galleryItemsRef.addEventListener('click', onGalleryImageClick)

function onGalleryImageClick(evt) {
    const src = evt.target.original
    
    
    
    const instance = basicLightbox.create(`
    <img src="https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg"
    width="1280">
    `)

    instance.show();
}