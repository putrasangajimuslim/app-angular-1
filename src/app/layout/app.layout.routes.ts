import { Routes } from "@angular/router";

export const LAYOUT_ROUTES: Routes = [
    { 
        path: '', 
        loadChildren: () => import('../modules/application/application.module').then(r => r.ApplicationModule) 
    }
]
