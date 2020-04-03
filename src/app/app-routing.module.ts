import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
	{ path: '', redirectTo: '/home.html', pathMatch: 'full' },
  	{ path: 'home.html', component: HomeComponent },
  	{ path: 'about.html', component: AboutComponent },
  	{ path: 'contact.html', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
