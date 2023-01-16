import { validate } from './form.js';
let methodDestroy = null;


const creatSlider = (option = 5000) => {
  const slider = document.querySelector('.ad-form__slider');
  const price = document.getElementById('price');

  noUiSlider.create(slider, {
    range: {
      'min': 0,
      'max': 100000
    },
    start: option,
    connect: 'lower',
    format: {
      to: function (value) {
        return value.toFixed(0);
      },
      from: function (value) {
        return parseFloat(value);
      }
    },
    tooltips: true,
  });

  slider.noUiSlider.on('update', () => {
    price.value = slider.noUiSlider.get();
    validate();
  });

  price.addEventListener('keyup', (evt) =>{
    slider.noUiSlider.set(evt.target.value);
  });

  const removalSlider = () => {
    slider.noUiSlider.destroy();
  };

  methodDestroy = removalSlider;
};


const changeSliderOptions = (option) => {
  methodDestroy();
  creatSlider(option);
};

export {creatSlider, changeSliderOptions};
