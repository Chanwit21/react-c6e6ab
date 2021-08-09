import React from "react";

function SummarizeDetail(props) {
  const { detailName, value, bg } = props;

  return (
    <div className="col-sm-4">
      <div className={`bg-${bg} rounded-2 p-3`}>
        <p className="text-black-50">{detailName}</p>
        <h5 className="text-white">{value}</h5>
      </div>
    </div>
  );
}

export default SummarizeDetail;
