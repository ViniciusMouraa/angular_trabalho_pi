import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // necessário para usar [(ngModel)]
import { ProdutosService } from '../../core/services/produtos.service';
import { Produto } from '../../core/types/types';
@Component({
selector: 'app-consultar',
standalone: true,
templateUrl: './consultar.component.html',
styleUrls: ['./consultar.component.css'],
imports: [CommonModule, FormsModule],
})
export class ConsultarComponent {
idBusca: number | null = null; // ID digitado no input
ProdutoEncontrado: Produto | null = null; // Produto encontrado
erroBusca: string = ''; // Mensagem de erro
constructor(private ProdutosService: ProdutosService) { }
buscarProduto(): void {
this.erroBusca = '';
this.ProdutoEncontrado = null;
if (this.idBusca != null) {
//Chama o serviço ProdutosService, que faz um GET na API:GET http://localhost:3000/Produtos/:id
this.ProdutosService.buscarPorId(this.idBusca).subscribe({
//verifica se o Produto foi retornado corretamente
next: (Produto) => {
//Se encontrar o Produto, salva em this.ProdutoEncontrado.
//Isso automaticamente mostra os dados no HTML (*ngIf="ProdutoEncontrado").
if (Produto) {
this.ProdutoEncontrado = Produto;
} else {
this.erroBusca = 'Produto não encontrado.';
}
},
//Se o Produto não existir (for null ou undefined — dependendo da API), mostra a mensagem abaixo
error: () => {
this.erroBusca = 'Erro ao buscar Produto.';
}
});
}
}
}