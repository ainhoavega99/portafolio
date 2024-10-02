import { Component, Renderer2 } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { IndexComponent } from "./index/index.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio';

  constructor(private renderer: Renderer2) {}

  toggleMenu(event: any) {
    const container = document.querySelector('.container');
    const main = document.querySelector('.main');
    if (event.target.checked) {
      this.renderer.setStyle(container, 'width', '80vw');
      this.renderer.setStyle(container, 'float', 'right');
      this.renderer.setStyle(container, 'padding', '0 20px');
      this.renderer.setStyle(container, 'background-image', 'url("../assets/files/fondo1.jpg")');
      this.renderer.setStyle(container, 'background-size', 'cover'); 
      this.renderer.setStyle(container, 'background-position', 'center'); 
    } else {
      this.renderer.setStyle(container, 'width', '100vw');
      this.renderer.removeStyle(container, 'background-image');
      this.renderer.setStyle(container, 'float', 'none');
      this.renderer.setStyle(main, 'height', '100%');
      this.renderer.setStyle(main, 'background-size', 'cover');
      this.renderer.setStyle(main, 'background-position', 'center');
    }
  }
}
