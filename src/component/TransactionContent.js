import React from "react";

function TransactionContent(props) {
  const { content } = props;
  const { payee, category, amount } = content;

  const renderAmount =
    +amount > 0
      ? Intl.NumberFormat("th-TH", {
          style: "currency",
          currency: "THB",
        }).format(amount)
      : Intl.NumberFormat("th-TH", {
          style: "currency",
          currency: "THB",
        })
          .format(amount)
          .slice(1);

  return (
    <div className="d-flex justify-content-between align-items-center flex-fill ps-4">
      <div>
        <p className="mb-1 f-5 fw-bold">{payee}</p>
        <p className="mb-0 text-black-50 fs-7">{category}</p>
      </div>
      <span className={`badge bg-${amount > 0 ? "success" : "danger"}`}>
        {renderAmount}
      </span>
    </div>
  );
}

export default TransactionContent;
