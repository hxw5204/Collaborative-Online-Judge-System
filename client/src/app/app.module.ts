import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './components/editor/editor.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewProblemComponent } from './components/new-problem/new-problem.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import {FormsModule} from "@angular/forms";
import {routing} from'./app-routing.module';
import {DataService} from "./services/data.service";
import {CollaborationService} from "./services/collaboration.service";
import {HttpClientModule} from "@angular/common/http";
import {HttpClient} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    NavbarComponent,
    NewProblemComponent,
    ProblemDetailComponent,
    ProblemListComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    CollaborationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
