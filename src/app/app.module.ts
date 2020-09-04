import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*ng components*/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';

/*Bootstrap*/
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { NewsletterComponent } from './newsletter/newsletter.component';



@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NavbarComponent,
    CardsComponent,
    FooterComponent,
    FormComponent,
    NewsletterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
