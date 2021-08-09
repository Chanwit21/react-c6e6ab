import React from "react";

function TransactionDateCard(props) {
  const { content } = props;
  const { date, month } = content;
  const arrayMonth = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="transaction-date-card border border-1 border-dark rounded-2 bg-warning p-2 text-center">
      <p className="p-0 m-0 fs-7 text-black-50">
        {arrayMonth[month - 1]} {date}
      </p>
      <p className="p-0 m-0">{date}</p>
    </div>
  );
}

export default TransactionDateCard;
