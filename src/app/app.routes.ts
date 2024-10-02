import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

export const routes: Routes = [
    {path: '', component: IndexComponent},
    { path: 'proyects', component: ProyectsComponent },
    { path: 'aboutme', component: AboutmeComponent},
];
