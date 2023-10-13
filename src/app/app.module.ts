import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchPipe } from './pipes/search.pipe';
import { AllordersComponent } from './components/allorders/allorders.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CartComponent } from './components/cart/cart.component';
import { CashOnDeliveryComponent } from './components/cash-on-delivery/cash-on-delivery.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { SliderHomeComponent } from './components/slider-home/slider-home.component';
import {  SlidersCategoriesComponent } from './components/sliders-categories/slider-categories.component';
import { SpecificProductComponent } from './components/specific-product/specific-product.component';
import { SpecificcategoryComponent } from './components/specificcategory/specificcategory.component';
import { UpdatepasswordComponent } from './components/updatepassword/updatepassword.component';
import { UpdateuserinfoComponent } from './components/updateuserinfo/updateuserinfo.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { HeadersInterceptor } from './interceptors/headers.interceptor';
import { LoadingInterceptor } from './interceptors/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    AllordersComponent,
    BrandsComponent,
    CartComponent,
    CashOnDeliveryComponent,
    CategoriesComponent,
    CheckoutComponent,
    ForgetpasswordComponent,
    HomeComponent,
    LoginComponent,
    NavBarComponent,
    NotfoundComponent,
    ProductsComponent,
    RegisterComponent,
    SliderHomeComponent,
    SlidersCategoriesComponent,
    SpecificProductComponent,
    SpecificcategoryComponent,
    UpdatepasswordComponent,
    UpdateuserinfoComponent,
    UserInfoComponent,
    WishlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    NgxPaginationModule,
    NgxSpinnerModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HeadersInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent],
})
export class AppModule {}
