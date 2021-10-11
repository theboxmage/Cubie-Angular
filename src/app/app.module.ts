import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatSliderModule} from '@angular/material/slider';
import {AppComponent} from './app.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {CanvasComponent} from './canvas/canvas.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { OllListComponent } from './oll-list/oll-list.component';
import { PllListComponent } from './pll-list/pll-list.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CanvasComponent,
    OllListComponent,
    PllListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component:HomeComponent},
      {path: 'pll-list', component: PllListComponent},
      {path: 'oll-list', component:OllListComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
