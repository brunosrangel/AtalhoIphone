import { AtalhoFormComponent } from "./atalho-form/atalho-form.component";
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [AtalhoFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gerador-atalhos-iphone';
}
