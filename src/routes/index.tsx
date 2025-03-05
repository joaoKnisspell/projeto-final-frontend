import { BrowserRouter, Routes, Route } from 'react-router';
import { HomePage, ReportsPage, CadastroCategoriaPage, CadastroProdutoPage, CadastroTransactionPage } from '../pages';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/categorias" Component={CadastroCategoriaPage} />
        <Route path="/produtos" Component={CadastroProdutoPage} />
        <Route path="/transacoes" Component={CadastroTransactionPage} />
        <Route path="/relatorios" Component={ReportsPage} />
      </Routes>
    </BrowserRouter>
  );
};
