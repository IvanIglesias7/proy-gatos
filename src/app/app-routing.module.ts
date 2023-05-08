import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsComponent } from './cats/cats.component';
import { CatsFormComponent } from './cats-form/cats-form.component';

const routes: Routes = [
  {path: '', component: CatsComponent},
  {path: 'form', component: CatsFormComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
