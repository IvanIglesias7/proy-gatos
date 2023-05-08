import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { CatsComponent } from './cats/cats.component';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatsFormComponent } from './cats-form/cats-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    CatsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
