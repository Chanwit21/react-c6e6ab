import React from "react";

function FilterNumberOfPage() {
  return (
    <div className="row">
      <div className="col-12">
        <select type="text" className="form-select form-select-sm">
          <option value="">10</option>
          <option value="">25</option>
          <option value="">50</option>
          <option value="">100</option>
        </select>
      </div>
    </div>
  );
}

export default FilterNumberOfPage;
