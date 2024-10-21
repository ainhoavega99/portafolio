import { Component, ElementRef, Renderer2 } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  container = document.querySelector('.container');
  main = document.querySelector('.main');
  menu = document.querySelector('#menu__toggle');

  ngAfterViewInit() {
   
     this.menu = this.el.nativeElement.querySelector('#menu__toggle');
  }
  toggleMenu(event: any) {

    if (event.target.checked) {
      this.renderer.setStyle(this.container, 'width', '80vw');
      this.renderer.setStyle(this.container, 'float', 'right');
      this.renderer.setStyle(this.container, 'padding', '0 20px');
      this.renderer.setStyle(this.container, 'background-image', 'url("../assets/files/fondo1.jpg")');
      this.renderer.setStyle(this.container, 'background-size', 'cover');
      this.renderer.setStyle(this.container, 'background-position', 'center');
    } else {
      this.renderer.setStyle(this.container, 'width', '100vw');
      this.renderer.removeStyle(this.container, 'background-image');
      this.renderer.setStyle(this.container, 'float', 'none');
      this.renderer.setStyle(this.main, 'height', '100%');
      this.renderer.setStyle(this.main, 'background-size', 'cover');
      this.renderer.setStyle(this.main, 'background-position', 'center');
    }
  }

  closeMenu(): void {
    let bool = this.menu?.checkVisibility
    this.renderer.setProperty(this.menu, 'checked', !bool);
  }
}
