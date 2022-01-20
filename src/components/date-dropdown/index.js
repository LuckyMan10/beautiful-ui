import { DateDropdown } from "./dateDropdown";

document.querySelectorAll(".js-date-dropdown").forEach((element) => {
  const inputId = $(element).find(".date-dropdown__input").attr("id");
  const rootId = $(element).attr("id");
  const $root = $(`#${rootId}`);
  const isSingle = $root.hasClass("dropdown-singe");
  const dateDropdown = new DateDropdown({
    inputId,
    rootId,
    singleMode: isSingle,
  });
  dateDropdown.init();
});
