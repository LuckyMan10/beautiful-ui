import "./style.scss";

class CheckboxButtons {
    constructor({ checkboxId }) {
        this.checkboxId = checkboxId;
      }
    
      init() {
        const $checkbox = $(`#${this.checkboxId}`);
        const onCheckboxClick = () => {
          if ($checkbox.hasClass("checkbox-active")) {
            $checkbox.removeClass("checkbox-active");
          } else {
            $checkbox.addClass("checkbox-active");
          }
        };
        $checkbox.on("click", onCheckboxClick);
      }
}

export { CheckboxButtons }