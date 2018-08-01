import { Component, OnInit } from '@angular/core';
import { ServicosService } from './service/servicos.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  dados: any;

  constructor(private servicos: ServicosService) {
  }

  ngOnInit() {
    this.servicos.getAll().subscribe(d => {
      this.dados = d;
      console.log('Dados: ', this.dados);
    });
  }

}
