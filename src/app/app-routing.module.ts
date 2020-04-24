import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/EVPSL',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'standings',
    loadChildren: () => import('./standings/standings.module').then( m => m.StandingsPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'scorers',
    loadChildren: () => import('./scorers/scorers.module').then( m => m.ScorersPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'teams',
    loadChildren: () => import('./teams/teams.module').then( m => m.TeamsPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'scores',
    loadChildren: () => import('./scores/scores.module').then( m => m.ScoresPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
