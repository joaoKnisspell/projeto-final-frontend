import { api } from '../api';
import { endpoints } from '../endpoints';
export const GerenciamentoService = {
  async GetSummary() {
    return await api.get(endpoints.gerenciamento.get);
  },
};
