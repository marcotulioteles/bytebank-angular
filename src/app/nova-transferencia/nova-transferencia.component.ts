import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  constructor(private service: TransferenciaService) {

  }

  valor: number;
  destino: number;

  transferir() {
    console.log('Solicitada nova transferência');
    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.aoTransferir.emit(valorEmitir);

    this.limparCampos();
    console.log(this.service.transferencias)
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
