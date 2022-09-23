import { DropdownComponent } from "./components/dropdown.js";

import { HeaderComponent } from "./components/header.component.js";

import { ModalComponent } from "./components/modal.component.js";

import {CategoryTabsComponent} from "./components/category-tabs.component.js";

try {
    new DropdownComponent(".dropdown")
} catch {

}

new HeaderComponent("#header");

new ModalComponent("#modal");

new CategoryTabsComponent("#categories")