/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
const inputValidation = ({ message }) => {
  const invalid = [];
  const general = message.split(':');
  const specific = general[1].split(',');
  for (const i in specific) {
    invalid.push(specific[i].split(' ')[1].toLowerCase());
  }
  const inputs = document.querySelectorAll('input,textArea');
  for (const i in inputs) {
    if (invalid.includes(inputs[i].name)) {
      inputs[i].className = `${inputs[i].className} is-danger`;
    } else {
      inputs[i].className = `${inputs[i].className} is-success`;
    }
  }
};

export default inputValidation;
