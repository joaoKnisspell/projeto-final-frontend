import { CategoriaModel } from './categoria-model';

export type ProdutoModel = {
  produtoId: number;
  nome: string;
  valor: number;
  categoria: CategoriaModel;
};
