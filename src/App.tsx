import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './services/queryClient';
import { Router } from './routes';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          token: {
            colorBgContainer: 'transparent',
            colorBgElevated: '#171821',
            colorTextPlaceholder: '#87888c',
            colorIcon: '#ffffff',
            colorIconHover: '#feb95a',
            controlOutlineWidth: 0,
            colorText: '#ffffff',
          },
          components: {
            Table: {
              headerBg: 'transparent',
              headerSplitColor: '#21222d',
              colorText: '#ffffff',
              headerColor: '#87888c',
              borderColor: '#87888c',
              colorIcon: '#87888c',
              expandIconBg: '#87888c',
              rowHoverBg: '#171821',
            },
            Input: {
              colorText: '#ffffff',
              colorBorder: 'transparent',
            },
            Select: {
              colorBorder: 'transparent',
              optionSelectedBg: '#20aef3',
              multipleItemBg: '#20aef3',
              colorTextDisabled: '#ffffff',
            },
          },
        }}
      >
        <Router />
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
