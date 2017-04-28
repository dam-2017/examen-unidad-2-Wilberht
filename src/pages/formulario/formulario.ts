import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Servicio } from '../../providers/servicio';

/**
 * Generated class for the Formulario page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class Formulario {

  rfc: any;

  myForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public servicio: Servicio) {
    this.myForm = this.fb.group({
      'nombre': ["", [Validators.required]],
      'materno': ["", [Validators.required]],
      'paterno': ["", [Validators.required]],
      'nacimiento': ["", Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Formulario');
  }

  validar() {
    var fecha = this.myForm.get('nacimiento').value;
    let fechaSeparada: string[] = fecha.split("/");
    var bandera = false;
    var banderaNombre = false;
    var banderaMaterno = false;
    var banderaPaterno = false;


    if (this.myForm.get('nombre').valid) {
      banderaNombre = true;
    }

    if (this.myForm.get('materno').valid) {
      banderaMaterno = true;
    }

    if (this.myForm.get('paterno').valid) {
      banderaPaterno = true;
    }

    if (this.myForm.get('nacimiento').valid) {
      banderaPaterno = true;
    }
    /*
        if(fechaSeparada[0].length == 4 && parseInt(fechaSeparada[0]) > 2015 && parseInt(fechaSeparada[0]) < 2030 ){
          if(fechaSeparada[1].length == 2 && parseInt(fechaSeparada[1])> 0 && parseInt(fechaSeparada[1]) < 13){
            if(fechaSeparada[2].length == 2 && parseInt(fechaSeparada[2])> 0 && parseInt(fechaSeparada[2]) < 32 ){
              bandera = true;
            }
          }
        }
    */
    if (bandera && banderaNombre && banderaMaterno && banderaPaterno) {
      var aNombre = this.myForm.get('nombre').value.split("");
      var aMaterno = this.myForm.get('materno').value.split("");
      var aPaterno = this.myForm.get('paterno').value.split("");
      console.log(aNombre);
      console.log(aMaterno);
      console.log(aPaterno);

      var cadenaNueva = aPaterno[0] + aPaterno[1] + aMaterno[0] + aNombre[0] + fechaSeparada[0].split("")[0] + fechaSeparada[0].split("")[0]
        + fechaSeparada[1] + fechaSeparada[2];

      this.rfc =cadenaNueva;
    }

  }

}
