import { api } from '../api';
import { endpoints } from '../endpoints';

export const TransactionsService = {
  async GetAll(criteria: any) {
    return await api.get(endpoints.transactions.get, { params: criteria });
  },
  async Post(transacao: any) {
    return await api.post(endpoints.transactions.post, transacao);
  },
  async GetById() {
    return await api.get(endpoints.transactions.getById);
  },
  async Update(transacao: any) {
    return await api.get(endpoints.transactions.put);
  },
  async Delete(transacao: any) {
    return await api.delete(endpoints.transactions.delete);
  },
};
