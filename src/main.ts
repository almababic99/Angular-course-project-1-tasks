import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent).catch((err) => console.error(err));
// We can't start our Angular app like this beacuse of app.module.ts


// starting application that uses modules:
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; 
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

