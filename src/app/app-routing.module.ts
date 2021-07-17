import { ViewComponent } from './view/view.component';
import { DisplayDataComponent } from './components/display-data/display-data.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  { path: '', component: EmployeeComponent },
  { path: 'display', component: DisplayDataComponent },
  { path: 'contact', component:ContactComponent},
  { path:'view/:id', component:ViewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
