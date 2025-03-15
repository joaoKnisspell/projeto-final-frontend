import { CategoriesModel } from '../../models';
import { BaseGetAllCriteria } from '../../models/criterias/base-get-all.criteria';
import { api } from '../api';
import { endpoints } from '../endpoints';

export const CategoriesService = {
  async GetAll(criteria: BaseGetAllCriteria) {
    return await api.get(endpoints.categorias.get, { params: criteria });
  },
  async Post(data: CategoriesModel) {
    return await api.post(endpoints.categorias.post, data);
  },
  async GetById() {
    return await api.get(endpoints.categorias.getById);
  },
  async Put(data: CategoriesModel) {
    return await api.put(endpoints.categorias.put, data);
  },
  async Delete(categoryId: number) {
    return await api.delete(`/categorias/${categoryId}`);
  },
};
