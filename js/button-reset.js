const creatButtonReset = (returnOriginalState) => {
  const formReset = document.querySelector ('.ad-form__reset');

  formReset.addEventListener ('click', returnOriginalState);
};

export {creatButtonReset};
