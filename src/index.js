import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import UtilsProvider from './contexts/UtilsProvider';
import './styles/index.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UtilsProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </AuthProvider>
    </UtilsProvider>
  </React.StrictMode>
);
