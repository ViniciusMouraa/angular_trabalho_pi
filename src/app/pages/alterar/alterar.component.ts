import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProdutosService } from '../../core/services/produtos.service';
import { CommonModule } from '@angular/common';
import { Produto } from '../../core/types/types';

@Component({
  selector: 'app-alterar',
  standalone: true,
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class AlterarComponent implements OnInit {
  form!: FormGroup;
  idProduto!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private produtosService: ProdutosService
  ) {}

  ngOnInit(): void {
    this.idProduto = Number(this.route.snapshot.paramMap.get('id'));

    this.form = this.fb.group({
      nome: [''],
      desc: [''],
      preco: ['']
    });

    this.produtosService.buscarPorId(this.idProduto).subscribe(produto => {
      if (produto) {
        this.form.patchValue({
          nome: produto.nome,
          desc: produto.desc,
          preco: produto.preco
        });
      }
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const produtoAtualizado: Produto = {
        id: this.idProduto,
        ...this.form.value
      };

      this.produtosService.editar(produtoAtualizado).subscribe(() => {
        this.router.navigate(['/listagem']);
      });
    }
  }
}
