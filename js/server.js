import { valueClass, error, success, errorMessageDownloadDataServer } from '../const.js';
import { addHandler } from './add-remov-handlerError.js';
import { addHandlerSuccess } from './add-remov-handlerSuccess.js';

const {parentClass} = valueClass;

const mainElement = document.querySelector('main');
const mapFiltersElement = document.querySelector ('.map__filters');
const bodyElement = document.querySelector('body');

const getDataServer = (cb) => {
  fetch ('https://25.javascript.pages.academy/keksobooking/data')
    .then ((response) => {
      if (response.ok) {
        mapFiltersElement.classList.remove(parentClass);
        return response;
      }
      throw new Error ();
    })
    .then ((response) => response.json())
    .then ((datas) => cb (datas))
    .catch (() =>{
      mainElement.insertAdjacentHTML('afterbegin', errorMessageDownloadDataServer);
      const errorMessage = mainElement.querySelector('.error-message');
      setTimeout(() => {mainElement.removeChild(errorMessage);},5000);
    });
};

const setDataServer = (userData, formSubmit) => {
  fetch ('https://25.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: userData
    }
  )
    .then ((response) => {
      if (response.ok) {
        bodyElement.insertAdjacentHTML('beforeend', success);
        addHandlerSuccess(formSubmit);
        return;
      }
      throw new Error ();
    })
    .catch (() =>{
      bodyElement.insertAdjacentHTML('beforeend', error);
      addHandler(formSubmit);
    } );
};

export {getDataServer, setDataServer};
