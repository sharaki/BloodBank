import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BgHomeComponent } from './bg-home/bg-home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReceiverSignupComponent } from './receiver-signup/receiver-signup.component';
import { CampsComponent } from './camps/camps.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MyServicesComponent } from './my-services/my-services.component';


const routes: Routes = [

  {path:"", redirectTo:'home', pathMatch:'full'},
  {path:"home", component:BgHomeComponent},
  {path:"about", component:AboutUsComponent},
  {path:"gallery", component:GalleryComponent},
  {path:"services", component:MyServicesComponent},
  {path:"sign-in", component:LoginComponent},
  {path:"sign-up", component:ReceiverSignupComponent},
  {path:"camps", component:CampsComponent},
  {path:"**", component:NotFoundComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
