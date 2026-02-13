import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Registro } from './features/registro/registro';
import { Drones } from './features/drones/drones';
import { Bitacora } from './features/bitacora/bitacora';
import { Pagina404 } from './shared/pagina-404/pagina-404';

export const routes: Routes = [
    //Ruta inicial
    { path: '', component: Home },
    //Ruta de navegacion
    { path: 'drones', component: Drones },
    { path: 'bitacora', component: Bitacora },
    { path: 'registro', component: Registro },

    { path: '**', component: Pagina404 },

];
