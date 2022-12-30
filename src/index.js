import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import App from './App';
import store from './app/store';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import UtilsProvider from './contexts/UtilsProvider';
import './styles/index.css';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <UtilsProvider>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </AuthProvider>
      </UtilsProvider>
    </Provider>
  </React.StrictMode>
);
