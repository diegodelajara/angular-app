import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { EmployeesComponent  } from "./components/employees/employees.component";
import { FrutaComponent } from "./components/fruta/fruta.component";
import { HomeComponent } from "./components/home/home.component"
import { ContactComponent } from "./components/contact/contact.component"

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'empleados', component: EmployeesComponent },
  { path: 'frutas', component: FrutaComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'contacto/:id', component: ContactComponent },
  { path: '**', component: EmployeesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
