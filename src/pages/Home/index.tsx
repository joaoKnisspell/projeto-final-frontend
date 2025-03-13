import { BaseContainer } from '../../components/BaseContainer';
import Card from '../../components/Card/Card';
import { Row, Col, Table, Spin } from 'antd';
import useHomePage from './hooks/useHomePage';
import SummaryCardsSection from './components/SummaryCardsSection';
import AssideCardsSection from './components/AssideCardsSection';
import { Plus } from 'lucide-react';
import { TransactionsTablecolumns } from '../../utils/tableColumns/transactions-table-columns';

export const HomePage = () => {
  const { summary, isFetchingSummary, transactions, isFetchingTransactions, isFetchedTransactions } = useHomePage();

  return (
    <BaseContainer key="home-page">
      <div className="grid grid-cols-3 gap-4 max-w-[983px] w-full">
        <section className="col-span-2 grid grid-rows-3 gap-4 w-[650px]">
          <Row className="row-span-1 w-full">
            <Col className="w-full flex">
              <Card
                key="dashboard-summary-cards"
                title="Gerenciamento"
                subtitle={`${new Date().toLocaleString('pt-BR')}`}
              >
                {isFetchingSummary ? (
                  <Row className="flex items-center justify-center w-full">
                    <Spin />
                  </Row>
                ) : (
                  <SummaryCardsSection summary={summary} />
                )}
              </Card>
            </Col>
          </Row>
          <Row className="row-span-2 w-full grid grid-rows-1 gap-4">
            <Row className="w-full row-span-">
              <Card
                key="transactions-dashboard-list"
                title="Últimas Transações"
                subtitle="Listagem de Entradas e Saídas"
              >
                <Table
                  columns={TransactionsTablecolumns}
                  dataSource={isFetchedTransactions && transactions}
                  loading={isFetchingTransactions}
                  size="small"
                  className="w-full"
                  pagination={false}
                />
              </Card>
            </Row>
            <Row className="row-span-1 w-full">
              <Card key="dashboard-actions-menu" title="Menu Rápido">
                <div className="flex justify-around items-center">
                  <div className="relative flex items-center justify-center bg-dark-900 w-fit p-4 rounded-[10px] cursor-pointer font-medium text-orange">
                    <h5>Cadastrar Categoria</h5>
                    <Plus size={25} className="absolute right-[-8px] top-[-8px]" />
                  </div>
                  <div className="relative flex items-center justify-center bg-dark-900 w-fit p-4 rounded-[10px] cursor-pointer font-medium text-green">
                    <h5>Cadastrar Produto</h5>
                    <Plus size={25} className="absolute right-[-8px] top-[-8px]" />
                  </div>
                  <div className="relative flex items-center justify-center bg-dark-900 w-fit p-4 rounded-[10px] cursor-pointer font-medium text-blue">
                    <h5>Cadastrar Transação</h5>
                    <Plus size={25} className="absolute right-[-8px] top-[-8px]" />
                  </div>
                </div>
              </Card>
            </Row>
          </Row>
        </section>
        <AssideCardsSection />
      </div>
    </BaseContainer>
  );
};
