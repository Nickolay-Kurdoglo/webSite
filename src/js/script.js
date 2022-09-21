import { DropdownComponent } from "./components/dropdown.js";

import { HeaderComponent } from "./components/header.component.js";

import { ModalComponent } from "./components/modal.component.js";

try {
    new DropdownComponent(".dropdown")
} catch {

}

new HeaderComponent("#header");

new ModalComponent("#modal");