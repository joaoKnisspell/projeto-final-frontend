import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './services/queryClient';
import { Router } from './routes';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
