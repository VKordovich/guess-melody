const mainNode = document.querySelector(`.main`);

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

