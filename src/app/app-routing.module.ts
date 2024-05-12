import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { AuthGuard } from './modules/services/auth-guard.service';

const routes: Routes = [
    { 
        path: 'auth', 
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) 
    },
    {
        path: '', 
        component: AppLayoutComponent,
        canActivateChild: [AuthGuard],
        children: [
            { 
                path: '', 
                loadChildren: () => import('./layout/app.layout.routes').then(m => m.LAYOUT_ROUTES),
            },
        ]
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth/login',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
