import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {Bienvenido} from '../pages/bienvenido/bienvenido'; 
import { Formulario} from '../pages/formulario/formulario';
import { Servicio } from '../providers/servicio';

import { MyApp } from './app.component';
import { Login } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    Login,
    Bienvenido,
    Formulario
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    Bienvenido,
    Formulario
  ],
  providers: [
    StatusBar,
    Servicio,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
