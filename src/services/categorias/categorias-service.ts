import { CategoriaModel } from '../../models';
import { BaseGetAllCriteria } from '../../models/criterias/base-get-all.criteria';
import { api } from '../api';
import { endpoints } from '../endpoints';

export const CategoriasService = {
  async GetAll(criteria: BaseGetAllCriteria) {
    return await api.get(endpoints.categorias.get, { params: criteria });
  },
  async Post(data: CategoriaModel) {
    return await api.post(endpoints.categorias.post, data);
  },
  async GetById() {
    return await api.get(endpoints.categorias.getById);
  },
  async Put(data: CategoriaModel) {
    return await api.put(endpoints.categorias.put, data);
  },
  async Delete() {
    return await api.delete(endpoints.categorias.delete);
  },
};
