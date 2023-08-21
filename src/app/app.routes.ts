import { Routes } from '@angular/router';

export const routes: Routes = [

      {
        path: "",
        loadComponent: () => import("./home/home.component").then(c => c.HomeComponent)
      },

      {
        path: 'home',
        loadComponent: () => import("./home/home.component").then(c => c.HomeComponent)
      },
      {
        path: 'login',
        loadComponent: () => import("./sig-in/sig-in.component").then(c => c.SigInComponent)
      },
      {
        path: 'register',
        loadComponent: () => import("./register/register.component").then(c => c.RegisterComponent)
      }
];


