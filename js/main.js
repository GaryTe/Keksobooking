import './main-page.js';
import { getDataServer } from './server.js';
import { getSaveUsreData } from './map.js';
import { validationForm } from './form.js';
import { downloadAvatarAndImage } from './work-photo.js';
import { creatSlider } from './creat-slider.js';

validationForm();
downloadAvatarAndImage();
creatSlider();

const saveUsreData = (userDatas) => {
  getSaveUsreData (userDatas);
};

getDataServer (saveUsreData);
