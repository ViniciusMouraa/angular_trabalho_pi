import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Produto } from '../core/types/types';
import { ProdutosService } from '../core/services/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
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
