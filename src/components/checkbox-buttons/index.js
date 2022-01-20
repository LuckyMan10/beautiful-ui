import { CheckboxButtons } from "./checkboxButtons";

document.querySelectorAll(".js-checkbox-item").forEach((element) => {
    const checkboxId = $(element).attr("id");
    const checkboxItem = new CheckboxButtons({checkboxId});
    checkboxItem.init();
})