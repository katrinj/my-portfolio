import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CvComponent } from './cv/cv.component';
import { FormComponent } from './form/form.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RestgameComponent } from './restgame/restgame.component';

export const routes: Routes = [
    {
        path: '',
        component: WelcomeComponent,
        title: 'Portfolio'
    },
    {
        path: 'cv',
        component: CvComponent,
        title: 'Portfolio: CV'
    },
    {
        path: 'form',
        component: FormComponent,
        title: 'Portfolio: Küsitluse projekt'
    },
    {
        path: 'gallery',
        component: GalleryComponent,
        title: 'Portfolio: Galerii projekt'
    },
    {
        path: 'restgame',
        component: RestgameComponent,
        title: 'Portfolio: Rest-mängu projekt'
    }
];
