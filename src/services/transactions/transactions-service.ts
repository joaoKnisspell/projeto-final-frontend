import { TransactionCriteria } from '../../models/criterias/transaction.criteria';
import { api } from '../api';
import { endpoints } from '../endpoints';

export const TransactionsService = {
  async GetAll(criteria?: any) {
    return await api.get(endpoints.transactions.get, { params: criteria });
  },
  async Post(transaction: TransactionCriteria) {
    const jsonData = JSON.stringify(transaction);
    console.log(jsonData);
    return await api.post(endpoints.transactions.post, jsonData);
  },
  async GetById() {
    return await api.get(endpoints.transactions.getById);
  },
  async Update(transacao: any) {
    return await api.get(endpoints.transactions.put);
  },
  async Delete(transactionId: number) {
    return await api.delete(`/pedidos/${transactionId}`);
  },
};
