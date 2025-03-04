import { api } from '../api';
import { endpoints } from '../endpoints';

export const PedidosService = {
  async GetAll() {
    return await api.get(endpoints.pedidos.get);
  },
  async Post(transacao: any) {
    return await api.post(endpoints.pedidos.post, transacao);
  },
  async GetById() {
    return await api.get(endpoints.pedidos.getById);
  },
  async Update(transacao: any) {
    return await api.get(endpoints.pedidos.put);
  },
  async Delete(transacao: any) {
    return await api.delete(endpoints.pedidos.delete);
  },
};
