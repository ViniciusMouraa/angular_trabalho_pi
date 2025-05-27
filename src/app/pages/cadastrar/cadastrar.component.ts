import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Produto } from '../../core/types/types';
import { ProdutosService } from '../../core/services/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent {
  titulo = 'Cadastro de Produtos';
  Produto: Produto = {} as Produto;

  constructor(
    private service: ProdutosService,
    private router: Router
  ) { }

  submeter() {
    this.service.incluir(this.Produto).subscribe(() => {
      this.router.navigate(['/listagem']);
    });
  }

}