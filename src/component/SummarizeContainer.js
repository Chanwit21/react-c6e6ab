import React from "react";
import FilterContainer from "./FilterContainer";
import PageManagerContainer from "./PageManagerContainer";
import SummarizeDetailContainer from "./SummarizeDetailContainer";

function SummarizeContainer(props) {
  const { transactionList, detectFilterTransaction } = props;
  return (
    <>
      <SummarizeDetailContainer transactionList={transactionList} />
      <FilterContainer
        transactionList={transactionList}
        detectFilterTransaction={detectFilterTransaction}
      />
      <PageManagerContainer />
    </>
  );
}

export default SummarizeContainer;
