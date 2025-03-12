import { CategoriesModel } from './categoria-model';

export type ProdutoModel = {
  produtoId: number;
  nome: string;
  valor: number;
  categoria: CategoriesModel;
};
