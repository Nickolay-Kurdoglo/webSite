import { Component } from "./component.js";

export class HeaderComponent extends Component {
    constructor(element) {
        super(element)
    }

    init() {
        this.$el.addEventListener("click", event => {
            let clickedEl = event.target;
            
            if(clickedEl.classList.contains("header__close") || clickedEl.parentNode.classList.contains("header__close")) 
                this.$el.querySelector(".header__interaction").classList.remove("opened");
            
            if(clickedEl.classList.contains("header__burger-menu") || clickedEl.parentNode.classList.contains("header__burger-menu"))
                this.$el.querySelector(".header__interaction").classList.add("opened");
        });
    }
}