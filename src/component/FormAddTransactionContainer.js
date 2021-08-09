import React from "react";
import FormAddTransaction from "./FormAddTransaction";

function FormAddTransactionContainer(props) {
  const { detectClickSaveButtonInForm } = props;
  return (
    <div className="border bg-white rounded-2 p-3">
      <FormAddTransaction
        detectClickSaveButtonInForm={detectClickSaveButtonInForm}
      />
    </div>
  );
}

export default FormAddTransactionContainer;
