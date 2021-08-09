import React from "react";
import List from "./List";

function ListContainer(props) {
  const { filterTransactionList, detectClickButtonDelete } = props;

  const renderList = filterTransactionList.map(item => {
    return (
      <List
        key={item.id}
        content={item}
        detectClickButtonDelete={detectClickButtonDelete}
      />
    );
  });

  return (
    <>
      <ul className="list-group">{renderList}</ul>
    </>
  );
}

export default ListContainer;
