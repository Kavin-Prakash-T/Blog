import { Header, Footer } from './Components';
import './App.css';
import { AllRoutes } from './Routes/AllRoutes';

function App() {
  return (
    <div className="app">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
