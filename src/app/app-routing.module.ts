import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Futrivia',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'players',
    loadChildren: () => import('./players/players.module').then( m => m.PlayersPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  // {
  //   path: 'main',
  //   loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  // },
  { path: 'main', redirectTo: 'main/0', pathMatch: 'full' },
  {
    path: 'main/:counter',
    loadChildren: () => import('./main/main.module').then(m => m.MainPageModule)
  },
  {
    path: 'trivia',
    loadChildren: () => import('./trivia/trivia.module').then( m => m.TriviaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
