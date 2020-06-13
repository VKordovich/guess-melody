import {getElementFromTemplate, showScreen} from '../utils';
import resultWin from './resultWin';
import resultLose from './resultLose';

const html = `<section class="main main--level main--level-genre">
    <h2 class="title">Выберите инди-рок треки</h2>
    <form class="genre">
      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-1">
        <label class="genre-answer-check" for="a-1"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-2">
        <label class="genre-answer-check" for="a-2"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-3">
        <label class="genre-answer-check" for="a-3"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-4">
        <label class="genre-answer-check" for="a-4"></label>
      </div>

      <button class="genre-answer-send" type="submit">Ответить</button>
    </form>
  </section>`;

const element = getElementFromTemplate(html);
const answers = Array.from(element.querySelectorAll(`input[name="answer"]`));
const sendBtn = element.querySelector(`.genre-answer-send`);

sendBtn.disabled = true;

answers.forEach((currentInput, index, array) => {
  currentInput.addEventListener(`change`, () => {
    sendBtn.disabled = !answers.find((answer) => answer.checked === true);
  });
});

sendBtn.addEventListener(`click`, () => {
  showScreen(Math.random() <= 0.5 ? resultWin : resultLose);
});

export default element;
