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
<<<<<<< HEAD
import { ReceiverSignupComponent } from './receiver-signup/receiver-signup.component';
import { SignUpComponent } from './sign-up/sign-up.component';
=======

import { SignUpComponent } from './sign-up/sign-up.component';
import { ReceiverSignupComponent } from './receiver-signup/receiver-signup.component';

>>>>>>> 8c7b7c2669c36b8c8f854bd850d77d44d12eaa4a


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
