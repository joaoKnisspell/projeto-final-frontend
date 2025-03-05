import { api } from '../api';

export const ProdutosService = {
  async GetAll() {
    return api.get('/produtos');
  },
};
