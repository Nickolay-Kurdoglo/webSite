import { DropdownComponent } from "./components/dropdown.js";

import { HeaderComponent } from "./components/header.component.js";

try {
    new DropdownComponent(".dropdown")
} catch {

}

new HeaderComponent("#header");