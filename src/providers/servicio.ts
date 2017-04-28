import { Injectable } from '@angular/core';

/*
  Generated class for the Servicio provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Servicio {
  _nombre : string;
  constructor() {
    
  }

  get nombre():string{
    return this._nombre;
  }

  set nombre(nombre: string){
    this._nombre = nombre;
  }

}
