import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FullpageComponent } from './fullpage/fullpage.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './services/product.service';
import { PersonalLoanComponent } from './personal-loan/personal-loan.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

const myRoots: Routes = [
  {path:'', component:HomeComponent, pathMatch:'full'},
  {path:'ploan', component:PersonalLoanComponent},
  {path:'home', component:HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FullpageComponent,
    FooterComponent,
    ProductsComponent,
    PersonalLoanComponent,
    CarouselComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, RouterModule.forRoot(myRoots)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
