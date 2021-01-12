import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { EmployeesComponent  } from "./components/employees/employees.component";
import { FrutaComponent } from "./components/fruta/fruta.component";
import { HomeComponent } from "./components/home/home.component"

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'empleados', component: EmployeesComponent },
  { path: 'frutas', component: FrutaComponent },
  { path: '**', component: EmployeesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
