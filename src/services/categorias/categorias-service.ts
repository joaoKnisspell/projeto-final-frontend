import { CategoriaModel } from '../../data/models/categoria-models';
import { api } from '../api';
import { endpoints } from '../endpoints';

export const CategoriasService = {
  async GetAll() {
    return await api.get(endpoints.categorias.get);
  },
  async Post(data: CategoriaModel) {
    return await api.post(endpoints.categorias.getById, data);
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
