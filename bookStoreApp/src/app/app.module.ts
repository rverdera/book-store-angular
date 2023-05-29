import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { AuthModule } from './auth/auth.module';
// import { UserModule } from './user/user.module';
// import { PublicModule } from './public/public.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,    
    // AuthModule,  --- eager loading loads all module even not required
    // UserModule, -- change to lazy loading opposite of eager loading
    // PublicModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
