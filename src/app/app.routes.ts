import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Portfolio } from './components/portfolio/portfolio';
import { Experience } from './components/experience/experience';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'portfolio', component: Portfolio },
    { path: 'experience-skills', component: Experience },
    { path: 'about', component: About },
    { path: 'contact', component: Contact },

    //404
    { path: '**', redirectTo: '' }
];
