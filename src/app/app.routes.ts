import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { authGuard } from './guards/auth.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: 'todo',
        canActivate: [authGuard],
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/todo/todo.component').then(m => m.TodoPageComponent)
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
