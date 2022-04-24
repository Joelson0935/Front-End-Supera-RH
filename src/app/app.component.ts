
import { TransferenciaService } from './Transferencia.Service';
import { Transferencia } from './Transferencia';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Banco-Supera';

  nome: string | undefined;


  data: string | undefined;


  transferencias: Transferencia[] | undefined;

  constructor(private transferenciaService: TransferenciaService) { }

  buscar() {
    this.transferenciaService.readByDateOrName(this.data, this.nome).subscribe(transferencia => {
      this.transferencias = transferencia
    })
  }
}
