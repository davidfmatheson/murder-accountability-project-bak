import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }      from './app-routing.module';

import { NgbModule }             from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }          from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { HomeComponent }         from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    IntroductionComponent,
    HomeComponent
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
