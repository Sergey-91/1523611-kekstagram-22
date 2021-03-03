let inputFile = document.querySelector('.img-upload__input');
let editForm = document.querySelector('.img-upload__overlay');
let body = document.querySelector('body');
inputFile.addEventListener('change', function (evt) {
evt.preventDefault();
editForm.classList.remove('hidden');
body.classList.add('modal-open');

});
