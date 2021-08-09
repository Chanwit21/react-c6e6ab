import React, { useState } from 'react';
import './App.css';
import FormAddTransactionContainer from './component/FormAddTransactionContainer';
import ListContainer from './component/ListContainer';
import SummarizeContainer from './component/SummarizeContainer';

function App() {
  const TEST = [
    {
      id: 1,
      date: '11',
      month: '08',
      year: '1998',
      payee: '7-11',
      category: 'Food',
      amount: '-17.00',
      comment: ''
    },
    {
      id: 2,
      date: '30',
      month: '10',
      year: '2021',
      payee: 'Monster Inc. Company',
      category: 'Salary',
      amount: '+5200.50',
      comment: ''
    },
    {
      id: 3,
      date: '20',
      month: '10',
      year: '2021',
      payee: 'BTS',
      category: 'Transport',
      amount: '-37.00',
      comment: ''
    },
    {
      id: 4,
      date: '20',
      month: '08',
      year: '2021',
      payee: 'Test',
      category: 'Test',
      amount: '-37.00',
      comment: ''
    }
  ];
  const [transactionList, setTransactionList] = useState(TEST);
  const [filterTransactionList, setFilterTransactionList] = useState(
    transactionList
  );

  function runId(array) {
    if (array.length !== 0) {
      return array[array.length - 1].id + 1;
    } else {
      return 1;
    }
  }

  const detectClickSaveButtonInForm = objectToAdd => {
    setTransactionList([
      ...transactionList,
      { id: runId(transactionList), ...objectToAdd }
    ]);

    // ยัง  Add พร้อมกับ Filter ไม่สมบูรณ์
    setFilterTransactionList([
      ...transactionList,
      { id: runId(transactionList), ...objectToAdd }
    ]);
    // console.log(objectToAdd);
  };

  const detectClickButtonDelete = id => {
    const newTransactionList = transactionList.filter(item => item.id !== id);
    const newFilterTransactionList = filterTransactionList.filter(
      item => item.id !== id
    );
    setTransactionList(newTransactionList);
    setFilterTransactionList(newFilterTransactionList);
  };

  // รับ Filter มา Set ค่า
  const detectFilterTransaction = newTransaction => {
    setFilterTransactionList(newTransaction);
  };

  // console.log(transactionList);

  return (
    <div className="container">
      <div className="content">
        <FormAddTransactionContainer
          detectClickSaveButtonInForm={detectClickSaveButtonInForm}
        />

        <SummarizeContainer
          transactionList={transactionList}
          detectFilterTransaction={detectFilterTransaction}
        />

        <ListContainer
          filterTransactionList={filterTransactionList}
          detectClickButtonDelete={detectClickButtonDelete}
        />
      </div>
    </div>
  );
}

export default App;
