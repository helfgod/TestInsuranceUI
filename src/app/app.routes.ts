import {  Routes } from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { PolicyComponent } from './components/policy/policy.component';
import { LogpolicyclientComponent } from './components/logpolicyclient/logpolicyclient.component';


export const ROUTES: Routes = [
  { path: 'client', component: ClientComponent },
  { path: 'policy', component: PolicyComponent },
  { path: 'logpolicyclietn/:id', component: LogpolicyclientComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

// export const appRouting = RouterModule.forRoot(routes);
