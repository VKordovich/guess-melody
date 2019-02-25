﻿(function () {
  const mainNode = document.querySelector(`.main`);
  const templatesNodeList = document.querySelector(`#templates`).content.querySelectorAll(`.main`);
  const screenIndexes = [4, 0, 3, 2, 1];

  let currentScreen = 0;

  const hotKey = function (evt) {
    const KEY_LEFT = 37;
    const KEY_RIGHT = 39;

    if (evt.altKey) {
      switch (evt.keyCode) {
        case KEY_LEFT:
          showScreen(currentScreen - 1);
          break;
        case KEY_RIGHT:
          showScreen(currentScreen + 1);
          break;
      }
    }
  };

  const clearMainNode = function () {
    while (mainNode.firstChild) {
      mainNode.removeChild(mainNode.firstChild);
    }
  };

  const showScreen = function (index = 0) {
    if (index > templatesNodeList.length - 1 || index > screenIndexes.length - 1 || index < 0) {
      return;
    }

    currentScreen = index;

    clearMainNode();

    mainNode.appendChild(templatesNodeList[screenIndexes[index]].cloneNode(true));
  };

  showScreen(currentScreen);
  document.addEventListener(`keyup`, hotKey);
}());
