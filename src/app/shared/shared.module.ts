import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";
import { AppComponent } from "../app.component";

@NgModule({
    // only root modules have bootstrap configuration so we don't need bootstrap here since app.module.ts is a root module
    declarations: [CardComponent],
    exports: [CardComponent]  // telling Angular that CardComponent should be available to any other modules that use the SharedModule
})

export class SharedModule {}