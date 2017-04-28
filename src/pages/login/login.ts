import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bienvenido } from '../bienvenido/bienvenido';
import { Servicio } from '../../providers/servicio';
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {


  myForm: FormGroup;
  public bandContra: boolean;
  public banUsuario: boolean;

  

  constructor(public navCtrl: NavController, public fb: FormBuilder, public servicio: Servicio) {
    this.myForm = this.fb.group({
      'usuario': ["", Validators.compose([Validators.required, Validators.pattern(/^([a-z])+$/), Validators.minLength(6)])],
      'contraseña': ["", Validators.compose([Validators.required, Validators.minLength(8)])]
    });
    this.bandContra = false;
    this.banUsuario = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  validar() {

    this.bandContra = false;
    this.banUsuario = false;
    if (this.myForm.get("usuario").valid) {
      this.banUsuario = false;
    } else {
      this.banUsuario = true;
    }

    if (this.myForm.get("contraseña").valid) {
      this.bandContra = false;
    } else {
      this.bandContra = true;
    }

    let arreglo: string = this.myForm.get('contraseña').value.toString();
    console.log(this.bandContra);
    if ((this.bandContra == false) && (arreglo.indexOf("|") > 0 || arreglo.indexOf("@") > 0 || arreglo.indexOf("#") > 0 || arreglo.indexOf("%") > 0
      || arreglo.indexOf("&") > 0)) {
      this.bandContra = false;
      console.log("entro1");
    } else {
      this.bandContra = true;
    }

    if ((this.bandContra == false) && (arreglo.indexOf("1") > 0 || arreglo.indexOf("2") > 0 || arreglo.indexOf("0") > 0 || arreglo.indexOf("3") > 0
      || arreglo.indexOf("4") > 0 || arreglo.indexOf("5") > 0 || arreglo.indexOf("6") > 0 || arreglo.indexOf("7") > 0
      || arreglo.indexOf("9") > 0)) {
      this.bandContra = false;
      console.log("entro2");
    } else {
      this.bandContra = true;
    }

    if (!this.bandContra && !this.banUsuario) {

      if ((this.myForm.get('usuario').value.toString() + '@ittepic') == 'wijebernalag@ittepic') {
        if (arreglo == '13400392@1') {
          this.servicio.nombre = "Wilberht Jesus Bernal Aguirre";
          this.navCtrl.push(Bienvenido);
        }
      }
    }
  }
}