import { Component } from "./component.js";

export class CategoryTabsComponent extends Component {
    constructor(element) {
        super(element)
    }

    init() {
        this.$el.addEventListener("click", event => {
            Array.from(this.$el.children).map(category => {
                category.classList.remove("active");
            });

            if (event.target.parentNode.classList.contains("category"))
                event.target.parentNode.classList.add("active")
        })
    }
}