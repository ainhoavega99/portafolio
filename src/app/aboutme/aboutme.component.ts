import { Component } from '@angular/core';
import { RouterModule, UrlHandlingStrategy } from '@angular/router';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.css'
})
export class AboutmeComponent {
  downloadPDF() {
    const link = document.createElement('a');
      link.href = '/assets/files/cv.pdf';
      link.download = 'cv-Ainhoa-Vega.pdf';
      link.click();
    
  }
}
