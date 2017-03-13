import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
//select stuff
import {SelectModule} from 'angular2-select';
import { SelectComponent } from './selectComponent';
import { ListServices } from './app.listServices';
//Directive Stuff
import { CustomDirectives } from './customDirective';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        SelectModule
        
    ],
    declarations: [
        AppComponent,
        CustomDirectives,
         SelectComponent
        
    ],
    providers:[ListServices],
    bootstrap: [AppComponent]

})
export class AppModule {
}