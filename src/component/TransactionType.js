import React from "react";

function TransactionType(props) {
  const { onTransactionType, detectChangeTransactionType } = props;
  function handleChangeTransactionType() {
    detectChangeTransactionType();
  }

  return (
    <div className="col-12">
      <input type="radio" className="btn-check" />
      <label
        className={`btn btn-${
          onTransactionType ? "outline-" : ""
        }danger rounded-0 rounded-start`}
        onClick={() => handleChangeTransactionType()}
      >
        Expense
      </label>
      <input type="radio" className="btn-check" />
      <label
        className={`btn btn-${
          !onTransactionType ? "outline-" : ""
        }success rounded-0 rounded-end`}
        onClick={() => handleChangeTransactionType()}
      >
        Income
      </label>
    </div>
  );
}

export default TransactionType;
