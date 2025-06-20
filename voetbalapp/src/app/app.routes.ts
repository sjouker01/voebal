
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ToernooiDetails } from './toernooi-details/toernooi-details';
import { GameDetails } from './game-details/game-details';



export const routes: Routes = [

    {
        path: '',
        component: Home
    },
    {
        path: 'toernooi-details',
        component: ToernooiDetails,
        
    },
    {
        path: 'game-details',
        component: GameDetails
    }

];
