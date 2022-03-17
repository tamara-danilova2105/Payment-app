import './App.css';
import Payment from './Payment';
import HomePage from './HomePage';
import { data } from './data'
import { useState } from 'react'


function App() {

  const [operator] = useState(data)
  const [choose, setChoose] = useState(data)
  console.log(choose[0].operator);

  const ChooseOperator = (id) => {
    let myChoose = operator.filter(item => item.id === id)
    setChoose(myChoose)
  }

  return (
    <div>
      <div className='container'>
        <h1>Оплата мобильной связи</h1>
      </div>

      <div className='payment-form'>
        <div className='payment-step'>
          <h2>Шаг 1: Выбери оператора</h2>
          <HomePage
          ChooseOperator={ChooseOperator}
          operator={operator}/>
        </div>
        <div className='payment-step'>
          <h2>Шаг 2: Заполни форму оплаты</h2>
          <Payment 
          imagesOperotor={choose[0].image}
          nameOperator={choose[0].operator}/>
        </div>
      </div>
    </div>
  );
}

export default App;
