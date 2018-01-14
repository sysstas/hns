import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { AdminComponent } from './admin/admin.component';
import { UserListComponent } from './user-list/user-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'admin', component: AdminComponent},
	{ path: 'userlist', component: UserListComponent},
	{ path: 'orderlist', component: OrderListComponent},
	{ path: 'documentation', component: DocumentationComponent},
	{ path: 'userdetail', component: UserDetailComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);