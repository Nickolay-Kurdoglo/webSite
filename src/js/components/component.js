export class Component {
    constructor(element) {
        this.$el = document.querySelector(element);
        this.init()
    }

    init() {
        console.log("Hi component");
    }
}