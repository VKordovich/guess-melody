import BaseModel from '../models/baseModel.js';

export default new class extends BaseModel {
  get urlRead() {
    return `https://intensive-ecmascript-server-wbcouextsi.now.sh/guess-melody/questions`;
  }
}();
