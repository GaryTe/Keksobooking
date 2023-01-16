import { mapFiltersContainer, addForm } from '../const.js';
import { downloadAvatarAndImage } from './work-photo.js';
import { validationForm } from './form.js';
import { creatSlider } from './creat-slider.js';

const creatElement = (onFilterChange) => {

  const oldPopupElement = document.querySelector('.leaflet-popup');
  if(oldPopupElement !== null){
    oldPopupElement.remove();
  }

  const mainElement = document.querySelector('.map');
  const oldMapFiltersContainer = mainElement.querySelector('.map__filters-container');

  const newElement = document.createElement('div');
  newElement.classList.add('map__filters-container');
  newElement.innerHTML = mapFiltersContainer;

  mainElement.replaceChild(newElement, oldMapFiltersContainer);

  const formFilter = document.querySelector ('.map__filters');

  formFilter.addEventListener('change', onFilterChange);


  const noticeElement = document.querySelector('main');
  const oldAddForm = noticeElement.querySelector('.notice');

  const newAddForm = document.createElement('section');
  newAddForm.classList.add('notice');
  newAddForm.innerHTML = addForm;

  noticeElement.replaceChild(newAddForm, oldAddForm);
  validationForm();
  downloadAvatarAndImage();


  const address = document.getElementById ('address');
  address.value = 'lat:35.66086 lng:139.74609';


  creatSlider();
};
export {creatElement};
