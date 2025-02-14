import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CvComponent } from './cv/cv.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RestgameComponent } from './restgame/restgame.component';
import { PollProjectComponent } from './poll-project/poll-project.component';
import { ThreeFiberComponent } from './three-fiber/three-fiber.component';

export const routes: Routes = [
    {
        path: '',
        component: WelcomeComponent,
        title: $localize`:@@mainPageTitle:Portfoolio - KJ`
    },
    {
        path: 'cv',
        component: CvComponent,
        title: $localize`:@@cvPageTitle:Portfoolio: CV`
    },
    {
        path: 'poll',
        component: PollProjectComponent,
        title: $localize`:@@pollPageTitle:Portfoolio: Küsitluse projekt`
    },
    {
        path: 'gallery',
        component: GalleryComponent,
        title: $localize`:@@galleryPageTitle:Portfoolio: Galerii projekt`
    },
    {
        path: 'restgame',
        component: RestgameComponent,
        title: $localize`:@@gamePageTitle:Portfoolio: REST-mängu projekt`
    },
    {
        path: 'react3D',
        component: ThreeFiberComponent,
        title: $localize`:@@react3DPageTitle:Portfoolio: 3D projekt Reactiga`
    }

];
