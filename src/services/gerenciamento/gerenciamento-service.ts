import { api } from '../api';
import { endpoints } from '../endpoints';
export const GerenciamentoService = {
  async GetSummary(date: string) {
    return await api.get(endpoints.gerenciamento.get, {
      params: {
        date: date,
      },
    });
  },
};
