import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule),
    // canActivate: [ AuthGuard ],
  },
  {
    path: 'register',
    loadChildren: () => import('./feature/pages/registration-and-profiling/registration-and-profiling.module').then(m => m.RegistrationAndProfilingModule),
  },
  {
    path: 'complete-profile',
    loadChildren: () => import('./feature/pages/profile-screen/profile-screen.module').then(m => m.ProfileScreenModule),
  },
  {
    path: '**', pathMatch: 'full', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(private route: ActivatedRoute) {
    console.log(this.route, "ACTIVATED ROUTE INSIDE")
  }

}
