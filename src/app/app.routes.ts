import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { AddUserComponent } from './pages/add-user/add-user.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Accueil' },
  { path: 'users', component: UsersComponent, title: 'Utilisateurs' },
  { path: 'add', component: AddUserComponent, title: 'Ajouter un utilisateur' },
  { path: '**', redirectTo: '' }
];

