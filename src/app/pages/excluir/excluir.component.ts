import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; // Importações corretas
import { ProdutosService } from '../../core/services/produtos.service';
@Component({
selector: 'app-excluir',
standalone: true,
templateUrl: './excluir.component.html',
styleUrls: ['./excluir.component.css'],
imports: [CommonModule, FormsModule, RouterModule],
})
export class ExcluirComponent {

idExcluir: number | null = null;
mensagemSucesso: string = '';
erroMensagem: string = '';
// CONSTRUCTOR correto com Router injetado
constructor(
private ProdutosService: ProdutosService,
private router: Router // <- AQUI!
) { }
excluirProduto(): void {
this.mensagemSucesso = '';
this.erroMensagem = '';
if (this.idExcluir != null) {
this.ProdutosService.excluir(this.idExcluir).subscribe({
next: () => {
this.router.navigate(['/listagem']); // Navega após excluir
//this.mensagemSucesso = `Produto com ID ${this.idExcluir} excluído com sucesso.`;
//this.idExcluir = null;
},
error: () => {
this.erroMensagem = `Erro ao excluir o Produto.`;
}
});
}
}
}
