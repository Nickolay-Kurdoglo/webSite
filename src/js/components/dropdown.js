import { Component } from "./component.js";

export class DropdownComponent extends Component {
    constructor(element) {
        super(element)
    }

    init() {
        this.$el.addEventListener("click", event => {
            this.$el.classList.toggle("opened")
        });
    }
}