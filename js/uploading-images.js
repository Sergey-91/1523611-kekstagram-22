const inputFile = document.querySelector('.img-upload__input');
const editForm = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const closeEditForm = document.querySelector('.img-upload__cancel');
const smallerPhotoButton = document.querySelector('.scale__control--smaller');
const biggerPhotoButton = document.querySelector('.scale__control--bigger');
const inputValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const slider = document.querySelector('.effect-level__slider');
let radios = document.querySelectorAll('input[type="radio"]');
const STANDART_VALUE = 100;
const STEP_ZOOM = 25;
const MIN_VALUE = 25;
let options = {};

const initForm = ()=>{
    inputValue.value = STANDART_VALUE + '%';
    imgUploadPreview.style.transform = 'scale(' + (inputValue.value / 100) + ')';
    };

inputFile.addEventListener('change', function (evt) {
evt.preventDefault();
editForm.classList.remove('hidden');
initForm();
body.classList.add('modal-open');  
});


closeEditForm.addEventListener('click', function() {
editForm.classList.add('hidden');
body.classList.remove('modal-open');
});

smallerPhotoButton.addEventListener('click', function(){
    let currentValue = parseInt(inputValue.value, 10);
    if(currentValue > MIN_VALUE) { 
        currentValue = currentValue - STEP_ZOOM;
        inputValue.value = currentValue + '%';
    } if (currentValue === STANDART_VALUE){
        imgUploadPreview.style.transform = 'scale(1)';
    } if (currentValue === 75) {
        imgUploadPreview.style.transform = 'scale(0.75)';
    } if (currentValue === 50 ){
        imgUploadPreview.style.transform = 'scale(0.5)';
    } if (currentValue === MIN_VALUE ){
        imgUploadPreview.style.transform = 'scale(0.25)';
    }
   
});
 biggerPhotoButton.addEventListener('click', function(){
    let currentValue = parseInt(inputValue.value, 10);
    if(currentValue >= MIN_VALUE  && currentValue < STANDART_VALUE) {
        currentValue = currentValue + STEP_ZOOM;
        inputValue.value = currentValue + '%';
    } if (currentValue === STANDART_VALUE){
        imgUploadPreview.style.transform = 'scale(1)';
    } if (currentValue === 75) {
        imgUploadPreview.style.transform = 'scale(0.75)';
    } if (currentValue === 50 ){
        imgUploadPreview.style.transform = 'scale(0.5)';
    } if (currentValue === MIN_VALUE ){
        imgUploadPreview.style.transform = 'scale(0.25)';
    }if (currentValue > STANDART_VALUE){
        
    }
 });

const createSlider = () => {
    nouSlider.create(slider,{
        range: {
            min: 0,
            max: 100,
            },
            start: 80,
    });
    
};

const setSliderOptions = (effect) =>{
    if (effect === 'chrome') {
        options = {
            range: {
                min: 0,
                max:1,
            },
            step: 0.1,
            start: 0,
        }
    } if (effect === 'sepia') {
        options = {
            range: {
                min: 0,
                max: 1,
            },
            step: 0.1,
            start: 0,
        }
    } if (effect === 'marvin') {
        options = {
            range: {
                min: 0,
                max: 100,
            },
            step: 0.1,
            start: 100,
        }
    } if (effect === 'phobos') {
        options = {
            range: {
                min: 0,
                max: 3,
            },
            step: 0.1,
            start: 3,
        }
    }if (effect === 'heat') {
        options = {
            range: {
                min: 1,
                max: 3,
            },
            step: 0.1,
            start: 3,
        }
    }
    slider.noUiSlider.updateOptions(options);
};

radios.forEach ((effectButton) => {

    effectButton.addEventListener ('click' , () => {
    if (effectButton.value === 'none' ) {
    slider.classList.add('hidden');
    imgUploadPreview.style.filter = 'none';
    } else{
    slider.classList.remove('hidden');
    imgUploadPreview.classList.add('.effects__preview--' + effectButton.value);
    
    }
    }
    )
    });

    const onUpdateSlider = (effect) => {
        setSliderOptions(effect);
        slider.noUiSlider.on('update', (values, handle) => {
            effectLevelValue.value = values[handle];
           
            let filterName = '';
            if (effect === 'chrome') {
            filterName = 'grayscale(' + values[handle] +')';
            }
            if (effect === 'sepia') {
            filterName = 'sepia(' + values[handle] +')';
            }
            if (effect === 'marvin') {
            filterName = 'invert(' + values[handle] +'%)';
            }
             
            if (effect === 'phobos') {
            filterName = 'blur(' + values[handle] +'px)';
            }
            if (effect === 'heat') {
            filterName = 'brightness(' + values[handle] +')';
            }
            imgUploadPreview.style.filter = filterName;
            });
    };
    createSlider();

