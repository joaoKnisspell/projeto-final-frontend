import { ProductPostCriteria } from '../../criterias/products/product-post.criteria';
import { ProductsCriteria } from '../../models/criterias/products.criteria';
import { api } from '../api';

export const ProductsService = {
  async GetAll(criteria: ProductsCriteria) {
    return api.get('/produtos', { params: criteria });
  },
  async Post(criteria: ProductPostCriteria) {
    return api.post('/produtos', criteria);
  },
};
