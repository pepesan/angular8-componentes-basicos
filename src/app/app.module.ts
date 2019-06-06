import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TodosComponent } from './componentes-basicos/todos/todos.component';
import { HeroesComponent } from './componentes-basicos/heroes/heroes.component';
import { FormComponent } from './reactive/form/form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { Form2Component } from './reactive/form2/form2.component';
import { Form3Component } from './reactive/form3/form3.component';
import { Form4Component } from './reactive/form4/form4.component';
import { Form5Component } from './reactive/form5/form5.component';
import {TodoService} from './componentes-basicos/usa-servicio/todo.service';
import { UsaServicioComponent } from './componentes-basicos/usa-servicio/usa-servicio.component';
import { HttpClientModule } from '@angular/common/http';
import { UsaEventosComponent } from './componentes-basicos/usa-eventos/usa-eventos.component';
import { EjemploFormularioComponent } from './componentes-basicos/formularios/ejemplo-formulario/ejemplo-formulario.component';
import {EqualValidator} from './componentes-basicos/formularios/ejemplo-formulario/equal-validator.directive';

// Gestión de rutas
import { RouterModule, Routes } from '@angular/router';
// Componentes principales
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FormulariosComponent } from './pages/formularios/formularios.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ReactivosComponent } from './pages/reactivos/reactivos.component';
import { CrudComponent } from './pages/crud/crud.component';
// Definición de rutas
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'formularios', component: FormulariosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'eventos', component: UsaEventosComponent },
  { path: 'componentes', component: TodosComponent },
  { path: 'reactivos', component: ReactivosComponent },
  { path: 'crud', component: CrudComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

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
    UsaEventosComponent,
    EjemploFormularioComponent,
    EqualValidator,
    HomeComponent,
    AboutComponent,
    FormulariosComponent,
    ServiciosComponent,
    ReactivosComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
