import { NgIf } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-app';
  showSystemInfo: boolean = false;
  systemInfo: string = "Running on a web browser. No Machine info !!";


  loadSystemInfo() {
    console.log("Button Clicked !!");
    if (window.hasOwnProperty("DotNet")) {
        console.log("Calling GetSystemInfo");
        window.DotNet.invokeMethodAsync("BlazorMaui.Core", "GetSystemInfo").then((out: any) => {
            console.log("Got System Info");
            if (typeof out != undefined) {
                this.systemInfo = out;
            }
        });
    }
    this.showSystemInfo = true;
  }

}
