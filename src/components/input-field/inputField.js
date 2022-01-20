import Cleave from "cleave.js";
import {masks} from './masks';
import "./style.scss";

class InputField {
  constructor({element, maskedType, inputId}) {
    this.root = element;
    this.maskedType = maskedType;
    this.inputId = inputId;
    this.maskedOptions = masks[maskedType];
  }

  init() {
    new Cleave(`#${this.inputId}`, this.maskedOptions)
  }

}

export { InputField };
