import { FILE_TYPES } from '../const.js';

const downloadAvatarAndImage = () => {

  const avatar = document.querySelector('.ad-form-header__preview').querySelector('img');
  const choosAvatar = document.getElementById('avatar');

  choosAvatar.addEventListener('change', () => {
    const file = choosAvatar.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((value) => fileName.endsWith(value));

    if (matches) {
      avatar.src = URL.createObjectURL(file);
    }

  });

  const choosImage = document.getElementById('images');
  const imegeElement = document.querySelector('.ad-form__photo');

  choosImage.addEventListener('change', () => {
    const file = choosImage.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((value) => fileName.endsWith(value));

    if (matches) {
      const imege = `<img src="${URL.createObjectURL(file)}" alt="Фотография жилья" width="40" height="44">`;
      imegeElement.insertAdjacentHTML('afterbegin', imege);
    }

  });

};

export {downloadAvatarAndImage};
