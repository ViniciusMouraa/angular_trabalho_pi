import { Component, OnInit } from '@angular/core';
import { Produto } from '../../core/types/types';
import { ProdutosService } from '../../core/services/produtos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem',
  imports: [],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})
export class ListagemComponent implements OnInit{
listaProdutos: Produto[] = [];
constructor(
private service: ProdutosService,
private router: Router
) { }
ngOnInit(): void {
this.service.listar().subscribe((Produtos) => {
this.listaProdutos = Produtos;
});
}
//Esse método serve para excluir um Produto da lista e atualizar a tela automaticamente, sem recarregar a
excluir(id: number) {
if (id) {
this.service.excluir(id).subscribe(() => {
// Remove o Produto com o id correspondente da lista
this.listaProdutos = this.listaProdutos.filter(Produto => Produto.id !== id);
});
}
}
}