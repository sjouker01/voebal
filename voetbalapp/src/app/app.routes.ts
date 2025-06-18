
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ToernooiDetails } from './toernooi-details/toernooi-details';



export const routes: Routes = [

    {
        path: '',
        component: Home
    },
    {
        path: 'toernooi-details:/id',
        component: ToernooiDetails,
        
    }

];
