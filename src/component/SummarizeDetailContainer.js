import React from "react";
import SummarizeDetail from "./SummarizeDetail";

function SummarizeDetailContainer(props) {
  const { transactionList } = props;

  function calNetWorth(array) {
    let result = 0;
    for (let { amount } of array) {
      result += +amount;
    }
    return Intl.NumberFormat("th-TH", {
      style: "currency",
      currency: "THB",
    }).format(result);
  }

  function calIncome(array) {
    let result = 0;
    for (let { amount } of array) {
      if (+amount > 0) {
        result += +amount;
      }
    }
    return Intl.NumberFormat("th-TH", {
      style: "currency",
      currency: "THB",
    }).format(result);
  }

  function calExpense(array) {
    let result = 0;
    for (let { amount } of array) {
      if (+amount < 0) {
        result += +amount;
      }
    }
    return Intl.NumberFormat("th-TH", {
      style: "currency",
      currency: "THB",
    })
      .format(result)
      .slice(1);
  }

  return (
    <div className="row mt-4">
      <SummarizeDetail
        detailName="Net Worth"
        value={calNetWorth(transactionList)}
        bg="info"
      />
      <SummarizeDetail
        detailName="Income"
        value={calIncome(transactionList)}
        bg="success"
      />
      <SummarizeDetail
        detailName="Expense"
        value={calExpense(transactionList)}
        bg="danger"
      />
    </div>
  );
}

export default SummarizeDetailContainer;
