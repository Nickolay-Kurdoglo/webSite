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

            if(event.target === this.$el)
                this.$el.classList.remove("opened");

            if (clickedEl.classList.contains("modal__close"))
                this.$el.classList.remove("opened");
        });

        document.addEventListener("keydown", event => {
            if (this.$el.classList.contains("opened") && event.code === "Escape") {
                this.$el.classList.remove("opened");
            }
        })

    }
}