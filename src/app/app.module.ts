import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  imports: [
    BrowserModule,
    PdfViewerModule
  ],
  declarations: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
