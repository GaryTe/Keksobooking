const creatList = (dataList) => {
  if (dataList === undefined){
    return [];
  }
  const lists = [];
  dataList.map((data) => {
    switch (data){
      case 'wifi':
        lists.push('<li class="popup__feature popup__feature--wifi"></li>');
        break;
      case 'dishwasher':
        lists.push('<li class="popup__feature popup__feature--dishwasher"></li>');
        break;
      case 'parking':
        lists.push('<li class="popup__feature popup__feature--parking"></li>');
        break;
      case 'washer':
        lists.push('<li class="popup__feature popup__feature--washer"></li>');
        break;
      case 'elevator':
        lists.push('<li class="popup__feature popup__feature--elevator"></li>');
        break;
      case 'conditioner':
        lists.push('<li class="popup__feature popup__feature--conditioner"></li>');
        break;
      default:
        return [];
    }
  });
  return lists;
};


const creatPhoto = (dataPhoto) => {
  if(dataPhoto === undefined){
    return [];
  }
  const photos = [];
  dataPhoto.map((photo) =>
    photos.push(`<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья"></img>`)
  );
  return photos;
};


const creatAnnouncementCard = (userData) => {
  const {author,offer:{title,address,price,type,guests,rooms,checkin,checkout,description,features,photos}} = userData;
  const card = `
    <article class="popup">
      <img src="${author.avatar}" class="popup__avatar" width="70" height="70" alt="Аватар пользователя">
      <h3 class="popup__title">${title}</h3>
      <p class="popup__text popup__text--address">${address}</p>
      <p class="popup__text popup__text--price">${price}<span>₽/ночь</span></p>
      <h4 class="popup__type">${type}</h4>
      <p class="popup__text popup__text--capacity">${rooms} комнаты для ${guests} гостей</p>
      <p class="popup__text popup__text--time">Заезд после ${checkin}, выезд до ${checkout}</p>
      <ul class="popup__features">
        ${creatList(features).map((list) => list)}
      </ul>
      <p class="popup__description">${description}</p>
      <div class="popup__photos">
        ${creatPhoto(photos).map((photo) => photo)}
      </div>
    </article>
    `;
  return card;
};

export {creatAnnouncementCard};
