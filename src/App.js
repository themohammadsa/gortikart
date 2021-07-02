import './styles.css';
import { Header } from './components/header/Header';
import { Router } from './components/router/Router';
import { Toast } from './components/toast/Toast';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Toast />
    </div>
  );
}
