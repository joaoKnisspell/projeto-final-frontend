export const endpoints = {
  categorias: {
    get: '/categorias',
    post: '/categorias',
    getById: '/categorias/:id',
    put: '/categorias/:id',
    delete: '/categorias/:id',
  },
  produtos: {
    get: '/produtos',
    post: '/produtos',
    getById: '/produtos/:id',
    put: '/produtos/:id',
    delete: '/produtos/:id',
  },
  pedidos: {
    get: '/pedidos',
    post: '/pedidos',
    getById: '/pedidos/:id',
    put: '/pedidos/:id',
    delete: '/pedidos/:id',
  },
  gerenciamento: {
    get: '/gerenciamento',
  },
};
