import React from "react";

function PageOption() {
  return (
    <nav>
      <ul className="pagination pagination-sm">
        <li className="page-item disabled">
          <a href="/" className="page-link">
            <span>&laquo;</span>
          </a>
        </li>
        <li className="page-item active">
          <a href="/" className="page-link">
            <span>1</span>
          </a>
        </li>
        <li className="page-item">
          <a href="/" className="page-link">
            <span>2</span>
          </a>
        </li>
        <li className="page-item">
          <a href="/" className="page-link">
            <span>3</span>
          </a>
        </li>
        <li className="page-item">
          <a href="/" className="page-link">
            <span>&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default PageOption;
