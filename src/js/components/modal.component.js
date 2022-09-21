import { Component } from "./component.js";

export class ModalComponent extends Component {
    constructor(element) {
        super(element)
    }

    init() {
        const modalOpeners = document.querySelectorAll(".js-open-modal");

        modalOpeners.forEach(btn => {
            btn.addEventListener("click", () => {
                this.$el.classList.add("opened")
            })
        })

        this.$el.addEventListener("click", event => {
            let clickedEl = event.target;

            if (clickedEl.classList.contains("modal__close"))
                this.$el.classList.remove("opened");
        });
    }
}