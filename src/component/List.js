import React from "react";
import TransactionContent from "./TransactionContent";
import TransactionDateCard from "./TransactionDateCard";

function List(props) {
  const { content, detectClickButtonDelete } = props;
  const { id, amount } = content;

  const handleClickButtonDelete = id => {
    detectClickButtonDelete(id);
  };

  return (
    <>
      <li
        className={`list-group-item d-flex justify-content-between align-items-center bd-callout bd-callout-${
          +amount < 0 ? "danger" : "success"
        }`}
      >
        <div className="transaction-detail d-flex flex-fill me-4">
          <TransactionDateCard content={content} />
          <TransactionContent content={content} />
        </div>
        <button
          className="btn btn-link text-secondary p-0 border-0"
          onClick={() => handleClickButtonDelete(id)}
        >
          <i className="bi-x-circle" />
        </button>
      </li>
    </>
  );
}

export default List;
