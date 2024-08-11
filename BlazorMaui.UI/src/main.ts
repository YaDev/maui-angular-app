import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import "bootstrap";

/*
    Wait for the webview to load Blazor Framework and start it if needed
*/
if (window.hasOwnProperty("DotNet")) {
  new Promise(r => setTimeout(r, 100)).then(() => {
    try {
      window.DotNet.invokeMethod("", "");
    }
    catch (error: any) {
      if (error.message.includes("No call dispatcher")) {
        window.Blazor.start();
      }
    }
  });

}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
