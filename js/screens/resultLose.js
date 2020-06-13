import {getElementFromTemplate, showScreen} from '../utils';
import welcome from './welcome';

const html = `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы проиграли</h2>
    <div class="main-stat">Ничего, вам повезет в следующий раз</div>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

const element = getElementFromTemplate(html);
const replayButton = element.querySelector(`.main-replay`);

replayButton.addEventListener(`click`, () => {
  showScreen(welcome);
});

export default element;
