import { ProductsCriteria } from '../../models/criterias/products.criteria';
import { api } from '../api';

export const ProdutosService = {
  async GetAll(criteria: ProductsCriteria) {
    return api.get('/produtos', { params: criteria });
  },
};
