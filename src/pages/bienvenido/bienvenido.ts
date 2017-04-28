import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Servicio } from '../../providers/servicio';
import { Formulario } from '../formulario/formulario';
/**
 * Generated class for the Bienvenido page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-bienvenido',
  templateUrl: 'bienvenido.html',
})
export class Bienvenido {

  constructor(public navCtrl: NavController, public navParams: NavParams, public servicio: Servicio) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bienvenido');
  }

  validar(){
    this.navCtrl.push(Formulario);
  }

}
