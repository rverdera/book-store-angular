import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { AuthModule } from './auth/auth.module';
// import { UserModule } from './user/user.module';
// import { PublicModule } from './public/public.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AboutUsComponent } from './public-components/about-us/about-us.component';
import { HowItWorksComponent } from './public-components/how-it-works/how-it-works.component';
import { HomeComponent } from './public-components/home/home.component';


import { CounterService } from './shared/services/counter.service';
import { Counter2Service } from './shared/services/counter2.service';
import { TestService } from './shared/services/test.service';



@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HowItWorksComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    // AuthModule,  --- eager loading loads all module even not required
    // UserModule, -- change to lazy loading opposite of eager loading
    // PublicModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule

  ],
  providers: [
    {
      provide: CounterService,
      useFactory: (testService: TestService) => testService.status ? new CounterService() : new Counter2Service(),
      deps: [TestService]
    },
    TestService,
    {
      provide: 'appTitle',
      useValue: {
        title: 'this is the title',
        description: 'This is the title description'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
