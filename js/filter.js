const featureFilter = (features, housingFeatures) => {
  let counter = 0;
  features.map((featur) => {
    housingFeatures.map((housingFeatur) => {
      if(featur === housingFeatur){
        counter +=1;
      }
    });
  });
  return counter;
};

const getNewUserDatas = (oldUserDatas, filter) => {
  const newUserDatas = [];
  let identifier = 0;
  oldUserDatas.map((userData) => {
    const {offer:{type,price,rooms,guests,features}} = userData;
    const {housingType, housingPrice, housingRooms, housingGuests, housingFeatures} = filter;

    if(type === housingType){
      identifier += 1;
    }
    switch(housingPrice){
      case 'middle':
        if(price >= 10000 && price <= 50000){
          identifier +=1;
        }
        break;
      case 'low':
        if(price <= 10000){
          identifier +=1;
        }
        break;
      case 'high':
        if(price >= 50000){
          identifier +=1;
        }
        break;
      default:

    }
    if(String(rooms) === housingRooms){
      identifier += 1;
    }
    if(String(guests) === housingGuests){
      identifier += 1;
    }
    if(housingFeatures.length !== 0 && features !== undefined){
      identifier += featureFilter(features, housingFeatures);
    }

    userData = {
      ...userData,
      identifier
    };
    identifier = 0;
    newUserDatas.push(userData);
  });
  return newUserDatas.sort((a,b) => b.identifier - a.identifier);
};

export {getNewUserDatas};
