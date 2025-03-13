import { Input, Button, Table } from 'antd';
import Card from '../../../components/Card/Card';
import { Plus } from 'lucide-react';
import { ToastContainer } from 'react-toastify';
import { BaseContainer } from '../../../components/BaseContainer';
import { TransactionsCompleteTablecolumns } from '../../../utils/tableColumns/transactions-complete-table-columns';
import RegisterDrawer from './registerDrawer';
import { useTransaction } from './hooks/useTransactions';

export const CadastroTransactionPage = () => {
  const {
    transactions,
    isFetchingTransactions,
    totalPages,
    mutation,
    isRegisterDrawerOpen,
    handlePageAction,
    handleOpenModal,
    handleCloseModal,
  } = useTransaction();

  const inputStyle = {
    backgroundColor: '#21222d',
    border: 'none',
  };

  return (
    <>
      <BaseContainer key="transaction-register-page">
        <section className="max-w-[983px] w-full flex flex-col gap-4">
          <header className="flex items-center gap-4">
            <div className="w-full">
              <Input style={inputStyle} placeholder={`Filtrar transações por data...`} />
            </div>
            <div>
              <Button onClick={handleOpenModal} style={{ ...inputStyle, color: '#87888c' }}>
                <span>Nova Transação</span>
                <Plus size={20} />
              </Button>
            </div>
          </header>
          <main className="h-full">
            <Card key="transactions-list" title="Listagem de Transações">
              <Table
                columns={TransactionsCompleteTablecolumns}
                dataSource={transactions}
                loading={isFetchingTransactions}
                size="middle"
                className="h-full"
                pagination={{
                  showSizeChanger: true,
                  pageSizeOptions: [5, 10],
                  total: totalPages,
                  onChange: (page: number, pageSize: number) => handlePageAction(page, pageSize),
                }}
              />
            </Card>
          </main>
          <RegisterDrawer mutation={mutation} isDrawerOpen={isRegisterDrawerOpen} handleCloseModal={handleCloseModal} />
          <ToastContainer autoClose={3000} theme="dark" />
        </section>
      </BaseContainer>
    </>
  );
};
