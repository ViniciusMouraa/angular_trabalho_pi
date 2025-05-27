import { Injectable } from '@angular/core';
import { Produto } from '../types/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
providedIn: 'root',
})
export class ProdutosService {
  private readonly API = 'http://localhost:3000/Produtos';
  constructor(private http: HttpClient) { }

  //Faz um GET para pegar todos os Produtos.
  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.API);
  }

  //Faz um POST com um novo Produto para adicionar no banco de dados.
  incluir(Produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.API, Produto);
  }

  //Faz um DELETE para excluir um Produto no banco de dados.
  excluir(id: number): Observable<Produto> {
    return this.http.delete<Produto>(this.API + `/${id}`);
  }

  editar(Produto: Produto): Observable<Produto> {
    const url = `${this.API}/${Produto.id}`
    return this.http.put<Produto>(url, Produto)
  }

  buscarPorId(id: number): Observable<Produto | undefined> {
    return this.http.get<Produto>(this.API + `/${id}`);
  }

}