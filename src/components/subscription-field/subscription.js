import "./style.scss";

class Subscription {
  constructor({ rootId }) {
    this.rootId = rootId;
  }

  init() {
    const $form = $(`#${this.rootId} > .js-subscription-field__form`);
    const onSubmit = (e) => {
      e.preventDefault();
    };
    $form.on("submit", onSubmit);
  }
}

export { Subscription };
