const mainNode = document.querySelector(`.main`);

export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getElementFromTemplate = (html) => {
  const template = document.createElement(`div`);
  template.innerHTML = html.trim();
  return template.firstChild;
};

export const clearScreen = () => {
  mainNode.innerHTML = ``;
};

export const showScreen = (element) => {
  clearScreen();
  mainNode.appendChild(element);
};

export const arrayShuffle = (array) => {
  for (let i = array.length; i; i--) {
    let j = getRandomInt(0, i);
    [array[i - 1], array[j]] = [array[j], array[i - 1]];
  }

  return array;
};

export const padLeft = (value = 0) => {
  return value > 9 ? value.toString() : `0${value}`;
};

