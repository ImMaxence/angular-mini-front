import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfilPageComponent } from './pages/profil-page/profil-page.component';
import { TaskPageComponent } from './pages/task-page/task-page.component';

export const routes: Routes = [
    { path: "", component: HomePageComponent, title: "Home Page" },
    { path: "task", component: TaskPageComponent, title: "Task Page" },
    { path: "profil", component: ProfilPageComponent, title: "Profil Page" },
    { path: "**", redirectTo: "" }
];
