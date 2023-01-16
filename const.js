const valueClass = {
  parentClass: 'ad-form--disabled',
};

const errorMessageDownloadDataServer = `<div class="error-message">
Данные с сервера не загружены.Проверте правельность указанного адреса и соеденение с сетью.
</div>`;

const COUNTER = 10;

const error = `<div class="error">
<p class="error__message">Ошибка размещения объявления</p>
<button type="button" class="error__button">Попробовать снова</button>
</div>`;

const success = `<div class="success">
<p class="success__message">Ваше объявление<br>успешно размещено!</p>
</div>`;

const mapFiltersContainer = `<form action="#" class="map__filters" autocomplete="off">
<select name="housing-type" id="housing-type" class="map__filter">
  <option value="any" selected>Любой тип жилья</option>
  <option value="bungalow">Бунгало</option>
  <option value="flat">Квартира</option>
  <option value="hotel">Отель</option>
  <option value="house">Дом</option>
  <option value="palace">Дворец</option>
</select>
<select name="housing-price" id="housing-price" class="map__filter">
  <option value="any" selected>Любая</option>
  <option value="middle">10000 - 50000&#x20bd;</option>
  <option value="low">до 10000&#x20bd;</option>
  <option value="high">от 50000&#x20bd;</option>
</select>
<select name="housing-rooms" id="housing-rooms" class="map__filter">
  <option value="any" selected>Любое число комнат</option>
  <option value="1">Одна комната</option>
  <option value="2">Две комнаты</option>
  <option value="3">Три комнаты</option>
</select>
<select name="housing-guests" id="housing-guests" class="map__filter">
  <option value="any" selected>Любое число гостей</option>
  <option value="2">Два гостя</option>
  <option value="1">Один гость</option>
  <option value="0">Не для гостей</option>
</select>
<fieldset id="housing-features" class="map__features">
  <input type="checkbox" name="features" value="wifi" id="filter-wifi" class="map__checkbox visually-hidden">
  <label class="map__feature map__feature--wifi" for="filter-wifi">Wi-Fi</label>
  <input type="checkbox" name="features" value="dishwasher" id="filter-dishwasher" class="map__checkbox visually-hidden">
  <label class="map__feature map__feature--dishwasher" for="filter-dishwasher">Посудомоечная машина</label>
  <input type="checkbox" name="features" value="parking" id="filter-parking" class="map__checkbox visually-hidden">
  <label class="map__feature map__feature--parking" for="filter-parking">Парковка</label>
  <input type="checkbox" name="features" value="washer" id="filter-washer" class="map__checkbox visually-hidden">
  <label class="map__feature map__feature--washer" for="filter-washer">Стиральная машина</label>
  <input type="checkbox" name="features" value="elevator" id="filter-elevator" class="map__checkbox visually-hidden">
  <label class="map__feature map__feature--elevator" for="filter-elevator">Лифт</label>
  <input type="checkbox" name="features" value="conditioner" id="filter-conditioner" class="map__checkbox visually-hidden">
  <label class="map__feature map__feature--conditioner" for="filter-conditioner">Кондиционер</label>
 </fieldset>
</form>`;

const addForm = `<h2 class="notice__title">Ваше объявление</h2>
<form class="ad-form" method="post" enctype="multipart/form-data" autocomplete="off">
<fieldset class="ad-form-header">
  <legend class="ad-form-header__title">Ваша фотография (для карты)</legend>
  <div class="ad-form-header__upload">
    <div class="ad-form-header__preview">
      <img src="img/muffin-grey.svg" alt="Аватар пользователя" width="40" height="44">
    </div>
    <div class="ad-form__field">
      <input type="file" id="avatar" name="avatar" class="ad-form-header__input visually-hidden">
      <label class="ad-form-header__drop-zone" for="avatar">Загрузить<br>фото...</label>
    </div>
    <p class="ad-form-header__info">Заполните все обязательные поля, назначьте цену, загрузите аватар и фото жилья. Придумайте интересное описание. Оно сделает объявление более живым и привлекательным. Получившееся объявление должно давать гостям полное представление о вашем жилье.</p>
  </div>
</fieldset>
<fieldset class="ad-form__element ad-form__element--wide">
  <label class="ad-form__label" for="title">Заголовок объявления</label>
  <input id="title" name="title" type="text" placeholder="Милая, уютная квартирка в центре Токио">
</fieldset>
<fieldset class="ad-form__element ad-form__element--wide">
  <label class="ad-form__label" for="address">Адрес (координаты)</label>
  <input id="address" name="address" type="text">
</fieldset>
<fieldset class="ad-form__element">
  <label class="ad-form__label" for="type">Тип жилья</label>
  <select id="type" name="type">
    <option value="bungalow">Бунгало</option>
    <option value="flat" selected>Квартира</option>
    <option value="hotel">Отель</option>
    <option value="house">Дом</option>
    <option value="palace">Дворец</option>
  </select>
</fieldset>
<fieldset class="ad-form__element">
  <label class="ad-form__label" for="price">Цена за ночь, руб.</label>
  <input id="price" name="price" type="number" placeholder="5000">
  <div class="ad-form__slider"></div>
</fieldset>
<fieldset class="ad-form__element ad-form__element--time">
  <label class="ad-form__label" for="timein">Время заезда и выезда</label>
  <select id="timein" name="timein">
    <option value="12:00" selected>После 12</option>
    <option value="13:00">После 13</option>
    <option value="14:00">После 14</option>
  </select>
  <select id="timeout" name="timeout" title="Time to go out">
    <option value="12:00" selected>Выезд до 12</option>
    <option value="13:00">Выезд до 13</option>
    <option value="14:00">Выезд до 14</option>
  </select>
</fieldset>
<fieldset class="ad-form__element">
  <label class="ad-form__label" for="room_number">Количество комнат</label>
  <select id="room_number" name="rooms">
    <option value="1" selected>1 комната</option>
    <option value="2">2 комнаты</option>
    <option value="3">3 комнаты</option>
    <option value="100">100 комнат</option>
  </select>
</fieldset>
<fieldset class="ad-form__element">
  <label class="ad-form__label" for="capacity">Количество мест</label>
  <select id="capacity" name="capacity">
    <option value="3" selected>для 3 гостей</option>
    <option value="2">для 2 гостей</option>
    <option value="1">для 1 гостя</option>
    <option value="0">не для гостей</option>
  </select>
</fieldset>
<fieldset class="ad-form__element ad-form__element--wide features">
  <legend>Удобства: Wi-Fi, кухня, парковка, стиралка, лифт, кондиционер</legend>
  <input class="features__checkbox visually-hidden" type="checkbox" name="feature" value="wifi" id="feature-wifi">
  <label class="features__label features__label--wifi" for="feature-wifi">Wi-Fi</label>
  <input class="features__checkbox visually-hidden" type="checkbox" name="feature" value="dishwasher" id="feature-dishwasher">
  <label class="features__label features__label--dishwasher" for="feature-dishwasher">Посудомоечная машина</label>
  <input class="features__checkbox visually-hidden" type="checkbox" name="feature" value="parking" id="feature-parking">
  <label class="features__label features__label--parking" for="feature-parking">Парковка</label>
  <input class="features__checkbox visually-hidden" type="checkbox" name="feature" value="washer" id="feature-washer">
  <label class="features__label features__label--washer" for="feature-washer">Стиральная машина</label>
  <input class="features__checkbox visually-hidden" type="checkbox" name="feature" value="elevator" id="feature-elevator">
  <label class="features__label features__label--elevator" for="feature-elevator">Лифт</label>
  <input class="features__checkbox visually-hidden" type="checkbox" name="feature" value="conditioner" id="feature-conditioner">
  <label class="features__label features__label--conditioner" for="feature-conditioner">Кондиционер</label>
</fieldset>
<fieldset class="ad-form__element ad-form__element--wide">
  <label class="ad-form__label" for="description">Описание (не обязательно)</label>
  <textarea id="description" name="description" placeholder="Здесь расскажите о том, какое ваше жилье замечательное и вообще"></textarea>
</fieldset>
<fieldset class="ad-form__element ad-form__element--wide">
  <label class="ad-form__label">Фотография жилья</label>
  <div class="ad-form__photo-container">
    <div class="ad-form__upload">
      <input type="file" id="images" name="images" class="ad-form__input visually-hidden">
      <label for="images" class="ad-form__drop-zone">Загрузить<br>фото...</label>
    </div>
    <div class="ad-form__photo"></div>
  </div>
</fieldset>
<fieldset class="ad-form__element ad-form__element--submit">
  <button class="ad-form__submit" type="submit">Опубликовать</button>
  или <button class="ad-form__reset" type="reset">очистить</button>
</fieldset>
</form>`;

const minPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000
};

const numberRooms = {
  1:['1'],
  2:['2', '1'],
  3:['3', '2', '1'],
  100:['0']

};

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];


export {valueClass, errorMessageDownloadDataServer, COUNTER, error,
  success, mapFiltersContainer, addForm, minPrice, numberRooms, FILE_TYPES};
