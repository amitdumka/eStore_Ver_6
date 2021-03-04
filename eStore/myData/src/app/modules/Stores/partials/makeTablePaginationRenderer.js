<<<<<<< HEAD
import React from "react";

export const makeTablePaginationRenderer = ({
  isLoading,
  totalCount,
  pageSize
}) => props => {
  console.log(props, isLoading, totalCount);
  const { pages, onPageChange } = props;
  return (
    <div className="custom-pagination">
      {pages && pages.length > 0 && isLoading && (
        <span className={"spinner spinner-md spinner-primary"}></span>
      )}
      {pages.map(p => (
        <button
          key={p.page}
          className="btn btn-success"
          onClick={() => onPageChange(p.page)}
        >
          {p.page}
        </button>
      ))}
    </div>
  );
};
=======
import React from "react";

export const makeTablePaginationRenderer = ({
  isLoading,
  totalCount,
  pageSize
}) => props => {
  console.log(props, isLoading, totalCount);
  const { pages, onPageChange } = props;
  return (
    <div className="custom-pagination">
      {pages && pages.length > 0 && isLoading && (
        <span className={"spinner spinner-md spinner-primary"}></span>
      )}
      {pages.map(p => (
        <button
          key={p.page}
          className="btn btn-success"
          onClick={() => onPageChange(p.page)}
        >
          {p.page}
        </button>
      ))}
    </div>
  );
};
>>>>>>> b7b54ae91bc076d49d998cdb8c5571fa8e3cf47b
