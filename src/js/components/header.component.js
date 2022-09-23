import { Component } from "./component.js";

export class HeaderComponent extends Component {
    constructor(element) {
        super(element)
    }

    init() {
        const burgerMenu = this.$el.querySelector(".header__burger-menu");
        const closeMenu = this.$el.querySelector(".header__close");

        burgerMenu.addEventListener("click", () => {
            this.$el.querySelector(".header__interaction").classList.add("opened");
        })

        closeMenu.addEventListener("click", () => {
            this.$el.querySelector(".header__interaction").classList.remove("opened");
        })

        this.$el.addEventListener("click", event => {
            if (event.target.classList.contains("header__filter"))
                this.$el.querySelector(".header__interaction").classList.remove("opened");
        })
    }
}