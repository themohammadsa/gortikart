import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import { HomeProvider } from './context/HomeContext';
import { ProductProvider } from './context/ProductContext';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <HomeProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </HomeProvider>
      </Router>
    </AuthProvider>
  </StrictMode>,
  rootElement
);
