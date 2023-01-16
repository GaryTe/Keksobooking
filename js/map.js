import { creatAnnouncementCard } from './announcement-card.js';
import { COUNTER, valueClass } from '../const.js';
import { getNewUserDatas } from './filter.js';
import { creatElement } from './creat-element.js';
import { creatButtonReset } from './button-reset.js';

const {parentClass} = valueClass;
const formReset = document.querySelector ('.ad-form__reset');
const formFilter = document.querySelector ('.map__filters');
const addressElement = document.getElementById ('address');

let filter = {
  housingType: undefined,
  housingPrice: undefined,
  housingRooms: undefined,
  housingGuests: undefined,
  housingFeatures: []
};

let userValue = [];

const map = L.map ('map-canvas')
  .setView({
    lat: 35.66086,
    lng: 139.74609
  },10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const markerGroup = L.layerGroup().addTo(map);

const relatedAdIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});


const getSaveUsreData = (userDatas) => {
  userDatas.slice(0,Math.min(userDatas.length, COUNTER))
    .map((userData) => {
      const { location:{lat,lng} } = userData;
      const relatedAdMarker = L.marker({
        lat,
        lng
      },
      {
        icon: relatedAdIcon
      });
      relatedAdMarker.addTo(markerGroup)
        .bindPopup(creatAnnouncementCard(userData));
    });
  if (userValue.length === 0){
    userValue = userDatas;
  }
};


const onFilterChange = (evt) => {
  if(evt.target.matches('select[name="housing-type"]')){
    filter = {
      ...filter,
      housingType: evt.target.value
    };
  }
  if(evt.target.matches('select[name="housing-price"]')){
    filter = {
      ...filter,
      housingPrice: evt.target.value
    };
  }
  if(evt.target.matches('select[name="housing-rooms"]')){
    filter = {
      ...filter,
      housingRooms: evt.target.value
    };
  }
  if(evt.target.matches('select[name="housing-guests"]')){
    filter = {
      ...filter,
      housingGuests: evt.target.value
    };
  }
  if(evt.target.matches('input[name="features"]')){
    const {housingFeatures} = filter;
    if(housingFeatures.some((housingFeatur) => housingFeatur === evt.target.value)){
      filter = {
        ...filter,
        housingFeatures: [...filter.housingFeatures.filter((housingFeatur) => housingFeatur !== evt.target.value)]
      };
    }else{
      filter = {
        ...filter,
        housingFeatures: [...filter.housingFeatures,evt.target.value]
      };
    }
  }
  formFilter.classList.add (parentClass);
  markerGroup.clearLayers();
  const newUserDatas = getNewUserDatas(userValue, filter);
  getSaveUsreData(newUserDatas);
  if(markerGroup){formFilter.classList.remove (parentClass);}
};


formFilter.addEventListener('change', onFilterChange);


const specialIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52]
});


const specialMarker = L.marker({
  lat: 35.66086,
  lng: 139.74609
},
{
  draggable: true,
  icon: specialIcon
},
addressElement.value = 'lat:35.66086 lng:139.74609'
);
specialMarker.addTo(map);

const addHandlerToSpecialMarker = () => {
  specialMarker.on ('moveend', (evt) =>{
    const {lat,lng} = evt.target._latlng;
    const address = document.getElementById ('address');
    address.value = `lat:${lat.toFixed(5)} lng:${lng.toFixed(5)}`;
  });
};
addHandlerToSpecialMarker();


const returnOriginalState = () => {
  specialMarker.setLatLng ({
    lat: 35.66086,
    lng: 139.74609
  });
  map.setView({
    lat: 35.66086,
    lng: 139.74609
  },10);
  addHandlerToSpecialMarker();
  creatElement(onFilterChange);
  creatButtonReset(returnOriginalState);
};


formReset.addEventListener ('click', ()=> {
  returnOriginalState();
});

export {map, getSaveUsreData};
