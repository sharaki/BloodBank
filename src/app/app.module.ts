import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MyServicesComponent } from './my-services/my-services.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BgHomeComponent } from './bg-home/bg-home.component';
import { LoginComponent } from './login/login.component';
import { ReceiverSignupComponent } from './receiver-signup/receiver-signup.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutUsComponent,
    ContactUsComponent,
    MyServicesComponent,
    FooterComponent,
    HomeComponent,
    GalleryComponent,
    BgHomeComponent,
    LoginComponent,
    ReceiverSignupComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
