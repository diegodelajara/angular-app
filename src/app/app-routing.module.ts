import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { EmployeesComponent  } from "./components/employees/employees.component";
import { FrutaComponent } from "./components/fruta/fruta.component";

const routes: Routes = [
  { path: '', component: EmployeesComponent },
  { path: 'empleados', component: EmployeesComponent },
  { path: 'frutas', component: FrutaComponent },
  { path: '**', component: EmployeesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
