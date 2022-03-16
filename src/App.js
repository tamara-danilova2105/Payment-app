import './App.css';
import Payment from './Payment';
import HomePage from './HomePage';


function App() {
  return (
    <div>
      <div className="container">
        <h1>Оплата мобильной связи</h1>
      </div>

      <HomePage />
      <Payment />
      
    </div>
  );
}

export default App;
