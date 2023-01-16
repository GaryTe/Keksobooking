import { setDataServer } from './server.js';
import { minPrice, numberRooms, error } from '../const.js';
import { addHandler } from './add-remov-handlerError.js';
import { changeSliderOptions } from './creat-slider.js';

let validate = null;

const validationForm = () => {

  const formElement = document.querySelector('.ad-form');
  const formSubmit = document.querySelector('.ad-form__submit');
  const type = document.getElementById('type');
  const timeinElement = document.getElementById('timein');
  const timeoutElement = document.getElementById('timeout');
  const bodyElement = document.querySelector('body');

  const config = {
    classTo: 'ad-form__element',
    errorTextParent: 'ad-form__element',
    errorTextTag: 'div',
    errorTextClass: 'form__error'
  };

  const pristine = new Pristine(formElement, config);


  const title = document.getElementById('title');
  const checkTitle = (value) => value.length >= 30 && value.length <= 100;
  pristine.addValidator(title, checkTitle,
    `Поле обязательно для заполнения.Минимальная длина текста 30 символов,
  максимальная длина текста 100 символов.`
  );


  const price = document.getElementById('price');
  const checkPrice = (value) => value.length && value >= minPrice[type.value];
  const messagePrice = () => `Поле обязательно для заполнения.
Mинимальная цена за ночь  ${minPrice[type.value]}
,максимальная цена за ночь 100000 руб.`;
  pristine.addValidator(price, checkPrice, messagePrice);

  type.addEventListener('change', (evt) =>{
    const startValue = minPrice[evt.target.value];
    changeSliderOptions(startValue);
    price.value = startValue;
    pristine.validate(price);
  });

  const validatePrice = () =>{
    pristine.validate(price);
  };
  validate = validatePrice;


  formElement.addEventListener('change', (evt) =>{
    const {value} = evt.target;
    timeinElement.value = value;
    timeoutElement.value = value;
  });


  const roomNumber = document.getElementById('room_number');
  const capacity = document.getElementById('capacity');
  const checkCapacity = (value) => numberRooms[value].indexOf(capacity.value) !== -1;
  const placementNotice = () => {
    if(roomNumber.value === '1'){
      return 'В однокомнотном размищении, может разместится один человек.';
    }
    if(roomNumber.value === '2'){
      return 'В двухкомнотном размещении, может разместится от одного до двух человек.';
    }
    if(roomNumber.value === '3'){
      return 'В трехкомнотном размещении, может разместится от одного до трех человек.';
    }
    if(roomNumber.value === '100'){
      return 'Размещение запрещено.';
    }
  };
  pristine.addValidator(roomNumber, checkCapacity, placementNotice);

  capacity.addEventListener('change', () =>{
    pristine.validate(roomNumber);
  });


  const creatUserData = (evt) => {
    evt.preventDefault();
    formSubmit.disabled = true;
    setDataServer(new FormData (evt.target), formSubmit);
  };

  formElement.addEventListener('submit', (evt) =>{
    evt.preventDefault();
    if (pristine.validate()){
      creatUserData(evt);
    }else{
      bodyElement.insertAdjacentHTML('beforeend', error);
      addHandler(formSubmit);
    }
  });
};

export {validationForm, validate};
