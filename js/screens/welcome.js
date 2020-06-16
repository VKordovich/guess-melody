import {
  getElementFromTemplate,
  showScreen
} from '../utils';
import levelArtist from './levelArtist';
import {
  head
} from '../models/dictionary';

export default () => {
  const html = `<section class="main main--welcome">
    <section class="logo" title="${head.header}"><h1>${head.header}</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">${head.title}</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;2 минуты дать
      максимальное количество правильных ответов.<br>
      Удачи!
    </p>
  </section>`;

  const element = getElementFromTemplate(html);
  const playButton = element.querySelector(`.main-play`);

  playButton.addEventListener(`click`, () => {
    showScreen(levelArtist);
  });
  return element;
};
