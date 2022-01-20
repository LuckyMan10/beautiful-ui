import {Dropdown} from './dropdown';

document.querySelectorAll(".js-dropdown").forEach((element) => {
    const inputId = $(element).find(".dropdown__input").attr("id");
    const rootId = $(element).attr("id");
    const dropdown = new Dropdown({inputId, rootId});
    dropdown.init();
})