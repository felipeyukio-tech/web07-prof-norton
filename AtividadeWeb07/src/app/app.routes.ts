import { Routes } from '@angular/router';
import { Cadastro } from './cadastro/cadastro';
import { Home } from './home/home';
import { Login } from './login/login';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'cadastro', component:Cadastro },
    { path: 'home', component:Home },
    { path: 'login', component:Login },
];
