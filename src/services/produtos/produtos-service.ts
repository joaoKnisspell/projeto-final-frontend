import { ProductPostCriteria } from '../../criterias/products/product-post.criteria';
import { ProductsCriteria } from '../../models/criterias/products.criteria';
import { api } from '../api';

export const ProductsService = {
  async GetAll(criteria: ProductsCriteria) {
    return api.get('/produtos', { params: criteria });
  },
  async GetById(productId: number) {
    return api.get(`/produtos/${productId}`);
  },
  async Post(data: ProductPostCriteria) {
    return api.post('/produtos', data);
  },
  async Delete(productId: number) {
    return api.delete(`/produtos/${productId}`);
  },
};
