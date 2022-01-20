import "./style.scss";

class Dropdown {
  constructor({ inputId, rootId }) {
    this.inputId = inputId;
    this.rootId = rootId;
  }
  init() {
    const $buttons = $(`#${this.rootId}`).find(".js-dropdown__buttons");
    const childButtonsLength = $buttons[0].childElementCount;
    if (childButtonsLength === 1) {
      $buttons.addClass("simple-button");
    }
    const $root = $(`#${this.rootId}`);
    $(document).on("click", (e) => {
      const $target = $(e.target);
      if (
        !$target.closest(`#${this.inputId}`).length &&
        !$target.closest(`#${this.rootId} > .js-dropdown__dropdown`).length
      ) {
        $root.removeClass("dropdown-active");
        $root.addClass("dropdown-disable");
      } else {
        $root.addClass("dropdown-active");
        $root.removeClass("dropdown-disable");
      }
    });
  }
}

export { Dropdown };
