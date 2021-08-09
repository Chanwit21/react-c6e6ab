import React from "react";
import FilterNumberOfPage from "./FilterNumberOfPage";
import PageOption from "./PageOption";

function PageManagerContainer() {
  return (
    <div className="mt-4 d-flex justify-content-between">
      <FilterNumberOfPage />
      <PageOption />
    </div>
  );
}

export default PageManagerContainer;
