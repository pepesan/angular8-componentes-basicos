import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormComponent } from './reactive/form/form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { Form2Component } from './reactive/form2/form2.component';
import { Form3Component } from './reactive/form3/form3.component';
import { Form4Component } from './reactive/form4/form4.component';
import { Form5Component } from './reactive/form5/form5.component';
import {TodoService} from './usa-servicio/todo.service';
import { UsaServicioComponent } from './usa-servicio/usa-servicio.component';
import { HttpClientModule } from '@angular/common/http';
import { UsaEventosComponent } from './usa-eventos/usa-eventos.component';
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    HeroesComponent,
    FormComponent,
    Form2Component,
    Form3Component,
    Form4Component,
    Form5Component,
    UsaServicioComponent,
    UsaEventosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
