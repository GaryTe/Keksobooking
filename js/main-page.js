import { valueClass } from '../const.js';
import { map } from './map.js';

const {parentClass} = valueClass;

const formElement = document.querySelector ('.ad-form');
const fieldsetElement = formElement.querySelectorAll ('.ad-form-header');
const mapFiltersElement = document.querySelector ('.map__filters');
const selectElement = mapFiltersElement.querySelectorAll ('select');
const fieldsetChildElement = mapFiltersElement.querySelector ('.map__features');

const addClass = () => {
  formElement.classList.add (parentClass);
  Array.from (fieldsetElement).map ((element) => {element.disabled = true;});
  mapFiltersElement.classList.add (parentClass);
  Array.from (selectElement).map ((element) => {element.disabled = true;});
  fieldsetChildElement.disabled = true;
};

const removeClass = () => {
  formElement.classList.remove (parentClass);
  Array.from (fieldsetElement).map ((element) => {element.disabled = false;});
  Array.from (selectElement).map ((element) => {element.disabled = false;});
  fieldsetChildElement.disabled = false;
};

addClass();

if (map._loaded === true) {
  removeClass();
} else {
  addClass();
}
