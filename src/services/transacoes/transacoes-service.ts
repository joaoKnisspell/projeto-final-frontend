import { api } from '../api';
import { endpoints } from '../endpoints';

export const TransacoesService = {
  async GetAll() {
    return await api.get(endpoints.transacoes.get);
  },
  async Post(transacao: any) {
    return await api.post(endpoints.transacoes.post, transacao);
  },
  async GetById() {
    return await api.get(endpoints.transacoes.getById);
  },
  async Update(transacao: any) {
    return await api.get(endpoints.transacoes.put);
  },
  async Delete(transacao: any) {
    return await api.delete(endpoints.transacoes.delete);
  },
};
