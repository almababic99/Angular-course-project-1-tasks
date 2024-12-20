import { Component } from "@angular/core";

// component decorator that holds the configuration for the component
@Component({
    selector: 'app-header',
    // standalone: true,   // we don't need this if we want to use ngmodule instead of standalone components
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})

// every component needs to be exported 
export class HeaderComponent {}