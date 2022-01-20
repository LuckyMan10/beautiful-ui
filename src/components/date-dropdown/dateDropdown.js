import Litepicker from "litepicker";
import "litepicker/dist/css/litepicker.css";
import "./style.scss";

class DateDropdown {
    constructor({inputId, singleMode, rootId}) {
        this.inputId = inputId;
        this.singleMode = singleMode;
        this.rootId = rootId;
        this.onHide = this.onHide.bind(this);
        this.onShow = this.onShow.bind(this);
    }

    onHide() {
        const $root = $(`#${this.rootId}`);
        $root.removeClass("dropdown-active");
        $root.addClass("dropdown-disable");
    }

    onShow() {
        const $root = $(`#${this.rootId}`);
        $root.addClass("dropdown-active");
        $root.removeClass("dropdown-disable");
    }

    init() {
        new Litepicker({
            element: document.getElementById(this.inputId),
            singleMode: this.singleMode,
            tooltipText: {
              one: "night",
              other: "nights",
            },
            tooltipNumber: (totalDays) => {
              return totalDays - 1;
            },
            setup: (picker) => {
              picker.on("hide", this.onHide);
              picker.on("show", this.onShow);
            },
        })
    }
}

export { DateDropdown }