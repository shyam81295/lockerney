import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TransactionComponent } from './Transaction/Transaction.component'
import { HomeComponent } from './home/home.component';

import { UserDataPackageComponent } from './UserDataPackage/UserDataPackage.component';
import { UserServicePairComponent } from './UserServicePair/UserServicePair.component';

const routes: Routes = [
    // { path: 'transaction', component: TransactionComponent },
    {path: '', component: HomeComponent},
		
		{ path: 'UserDataPackage', component: UserDataPackageComponent},
		
		{ path: 'UserServicePair', component: UserServicePairComponent},
		
		{path: '**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
