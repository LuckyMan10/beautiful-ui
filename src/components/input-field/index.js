import { InputField } from "./inputField";

document.querySelectorAll(".js-input-field").forEach((element) => {
  const maskedType = $(element).find(".input-field__input").data("masked");
  const inputId = $(element).find(".input-field__input").attr("id");
  if (maskedType) {
    const inputField = new InputField({
      element,
      maskedType,
      inputId
    });
    inputField.init();
  }
});
