import React, { useState } from 'react';
import TransactionType from './TransactionType';

function FormAddTransaction(props) {
  const { detectClickSaveButtonInForm } = props;
  //  0 = Expense 1 = Income
  const [onTransactionType, setOnTransactionType] = useState(0);
  const [inputStatus, setInputStatus] = useState([
    {
      name: 'payee',
      value: '',
      'show require': false
    },
    {
      name: 'category',
      value: '',
      'show require': false
    },
    {
      name: 'amount',
      value: '',
      'show require': false
    },
    {
      name: 'date',
      value: '',
      'show require': false
    },
    {
      name: 'comment',
      value: ''
    }
  ]);
  const categoryOfExpenses = [
    'Housing',
    'Transportation',
    'Food',
    'Utilities',
    'Clothing',
    'Medical/Healthcare',
    'Insurance',
    'Household Items/Supplies',
    'Personal',
    'Debt',
    'Education',
    'Savings',
    'Gifts/Donations',
    'Entertainment'
  ];
  const categoryOfIncome = [
    'Wages',
    'Salary',
    'Commission',
    'Interest',
    'Selling something you create or own',
    'Investments',
    'Gifts',
    'Allowance/Pocket Money',
    'Government Payments'
  ];

  function detectChangeTransactionType() {
    setOnTransactionType(current => (current ? 0 : 1));
  }

  const handleChangeInput = (e, name) => {
    const newinputStatus = [...inputStatus];
    const idx = newinputStatus.findIndex(item => item.name === name);
    newinputStatus[idx].value = e.target.value;
    newinputStatus[idx]['show require'] = false;
    setInputStatus(newinputStatus);
  };
  // console.log(inputStatus);

  function handleClickButtonSave(e) {
    e.preventDefault();
    const newinputStatus = [...inputStatus];
    let isAllInputHaveValue = true;
    for (let item of newinputStatus) {
      if (item.name !== 'comment' && !item.value) {
        console.log(item.value);
        item['show require'] = true;
        isAllInputHaveValue = false;
        // console.log("Test");
      }
    }

    if (isAllInputHaveValue) {
      const arrayYearMonthDate = inputStatus
        .filter(item => item.name === 'date')[0]
        .value.split('-');
      const payee = inputStatus.filter(item => item.name === 'payee')[0].value;

      const category = inputStatus.filter(item => item.name === 'category')[0]
        .value;

      let amount = inputStatus.filter(item => item.name === 'amount')[0].value;
      if (onTransactionType) {
        amount = '+' + amount;
      } else {
        amount = '-' + amount;
      }

      const comment = inputStatus.filter(item => item.name === 'comment')[0]
        .value;

      const objToAdd = {
        date: arrayYearMonthDate[2],
        month: arrayYearMonthDate[1],
        year: arrayYearMonthDate[0],
        payee,
        category,
        amount,
        comment
      };
      detectClickSaveButtonInForm(objToAdd);
    } else {
      setInputStatus(newinputStatus);
    }
    setInputStatus([
      {
        name: 'payee',
        value: '',
        'show require': false
      },
      {
        name: 'category',
        value: '',
        'show require': false
      },
      {
        name: 'amount',
        value: '',
        'show require': false
      },
      {
        name: 'date',
        value: '',
        'show require': false
      },
      {
        name: 'comment',
        value: ''
      }
    ]);
  }

  const renderCatagory = (!onTransactionType
    ? categoryOfExpenses
    : categoryOfIncome
  ).map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  const requirePayeeInputStatus = inputStatus.filter(
    item => item.name === 'payee'
  )[0]['show require'];

  const requireCategoryInputStatus = inputStatus.filter(
    item => item.name === 'category'
  )[0]['show require'];

  const requireAmountInputStatus = inputStatus.filter(
    item => item.name === 'amount'
  )[0]['show require'];

  const requireDateInputStatus = inputStatus.filter(
    item => item.name === 'date'
  )[0]['show require'];

  return (
    <>
      <form className="row g-3">
        <TransactionType
          detectChangeTransactionType={detectChangeTransactionType}
          onTransactionType={onTransactionType}
        />
        <div className="col-sm-6">
          <label className="form-label">Payee</label>
          <input
            type="text"
            className={`form-control${
              requirePayeeInputStatus ? ' is-invalid' : ''
            }`}
            value={inputStatus.filter(item => item.name === 'payee')[0].value}
            onChange={e => handleChangeInput(e, 'payee')}
          />
          <div className="invalid-feedback">Payee is require</div>
        </div>
        <div className="col-sm-6">
          <label className="form-label">Category</label>
          <select
            className={`form-select${
              requireCategoryInputStatus ? ' is-invalid' : ''
            }`}
            value={
              inputStatus.filter(item => item.name === 'category')[0].value
            }
            onChange={e => handleChangeInput(e, 'category')}
          >
            <option value="">Choose Category</option>
            {renderCatagory}
          </select>
          <div className="invalid-feedback">Category is require</div>
        </div>
        <div className="col-sm-6">
          <label className="form-label">Amount</label>
          <input
            type="number"
            className={`form-control${
              requireAmountInputStatus ? ' is-invalid' : ''
            }`}
            value={inputStatus.filter(item => item.name === 'amount')[0].value}
            onChange={e => handleChangeInput(e, 'amount')}
          />
          <div className="invalid-feedback">Amount is require</div>
        </div>
        <div className="col-sm-6">
          <label className="form-label">Date</label>
          <input
            type="date"
            className={`form-control${
              requireDateInputStatus ? ' is-invalid' : ''
            }`}
            value={inputStatus.filter(item => item.name === 'date')[0].value}
            onChange={e => handleChangeInput(e, 'date')}
          />
          <div className="invalid-feedback">Date is require</div>
        </div>
        <div className="col-12">
          <label className="form-label">Comment</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-12 mt-4 d-grid">
          <button
            className="btn btn-primary"
            onClick={e => handleClickButtonSave(e)}
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}

export default FormAddTransaction;
