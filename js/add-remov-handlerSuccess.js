const addHandlerSuccess = (formSubmit) => {
  const bodyElement = document.querySelector('body');
  const successElement = document.querySelector('.success');

  const closeMessageByKey = (evt)=> {
    if(evt.key === 'Escape'){
      closeMessage ();
    } else {
      closeMessage();
    }
  };

  function closeMessage () {
    document.removeEventListener('keydown', closeMessageByKey);
    successElement.removeEventListener('click', closeMessageByKey);
    bodyElement.removeChild(successElement);
    formSubmit.disabled = false;
  }

  document.addEventListener('keydown', closeMessageByKey);
  successElement.addEventListener('click', closeMessageByKey);
};

export {addHandlerSuccess};
