import {photosArray} from './photos-array.js';
import {randomElement} from './util.js';

const picturesContainer = document.querySelector('.pictures');
const similarPictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

  const pictureElementFragment = document.createDocumentFragment();

  photosArray.forEach((element)=>{
    const pictureElement = similarPictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = element.url;
    pictureElement.querySelector('.picture__comments').textContent = element.comments.length;
    pictureElement.querySelector('.picture__likes').textContent = element.likes;
    pictureElementFragment.appendChild(pictureElement);
  });
  picturesContainer.appendChild(pictureElementFragment);
  
