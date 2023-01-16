const addHandler = (formSubmit) => {
  const bodyElement = document.querySelector('body');
  const errorMessage = document.querySelector('.error');
  const errorButton = errorMessage.querySelector('.error__button');

  const closeErrorMessageByKey = (evt)=> {
    if(evt.key === 'Escape'){
      closeErrorMessage ();
    } else {
      closeErrorMessage();
    }
  };

  function closeErrorMessage () {
    document.removeEventListener('keydown', closeErrorMessageByKey);
    errorMessage.removeEventListener('click', closeErrorMessageByKey);
    bodyElement.removeChild(errorMessage);
    formSubmit.disabled = false;
  }

  document.addEventListener('keydown', closeErrorMessageByKey);
  errorMessage.addEventListener('click', closeErrorMessageByKey);

  errorButton.addEventListener('click', () => {
    closeErrorMessage();
  });
};

export {addHandler};
