import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  constructor( private modalCtrl: ModalController ) { }

  @Input() nombre: string;
  @Input() pais: string;

  ngOnInit() {
  }

  noArguments() {
    this.modalCtrl.dismiss();
  }

  arguments() {
    this.modalCtrl.dismiss({
      nombre: 'Alberto',
      pais: 'Normandia'
    });    
  }

}
