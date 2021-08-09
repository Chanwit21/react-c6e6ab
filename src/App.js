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
  const [textFilter, setTextFilter] = useState('');

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

    // ยัง  Add พร้อมกับ Filter
    const newFilterTransactionList = [...filterTransactionList];
    let compareMonthYear = false;
    for (let val of newFilterTransactionList) {
      if (objectToAdd.month === val.month || objectToAdd.year === val.year) {
        compareMonthYear = true;
      }
    }
    let compareText = false;
    for (let val of newFilterTransactionList) {
      for (let key in val) {
        if (key !== 'id' && key !== 'month' && key !== 'year') {
          for (let key1 in objectToAdd) {
            for (let i of objectToAdd[key1]) {
              if (val[key].toLowerCase().includes(i.toLowerCase())) {
                compareText = true;
              }
            }
          }
        }
      }
    }

    console.log(compareMonthYear);
    console.log(compareText);

    if (textFilter) {
      if (compareMonthYear || compareText) {
        setFilterTransactionList([
          ...filterTransactionList,
          { id: runId(transactionList), ...objectToAdd }
        ]);
      } else {
        setFilterTransactionList([...filterTransactionList]);
      }
    } else {
      if (compareMonthYear) {
        setFilterTransactionList([
          ...filterTransactionList,
          { id: runId(transactionList), ...objectToAdd }
        ]);
      } else {
        setFilterTransactionList([...filterTransactionList]);
      }
    }

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
  const detectFilterTransaction = (newTransaction, text) => {
    setFilterTransactionList(newTransaction);
    setTextFilter(text);
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
