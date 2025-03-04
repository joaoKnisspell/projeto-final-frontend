import { BrowserRouter, Routes, Route } from 'react-router';
import { TransactionsPage, HomePage, ReportsPage, CadastroCategoriaPage } from '../pages';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/categorias" Component={CadastroCategoriaPage} />
        <Route path="/transacoes" Component={TransactionsPage} />
        <Route path="/relatorios" Component={ReportsPage} />
      </Routes>
    </BrowserRouter>
  );
};
