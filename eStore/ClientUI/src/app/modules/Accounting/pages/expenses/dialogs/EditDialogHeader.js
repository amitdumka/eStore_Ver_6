import React, { useState, useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import {ModalProgressBar} from "../../../../../../_metronic/_partials/controls";

//expense
//Expense

export function EditDialogHeader({ id }) {
  // Expenses Redux state
  const { expenseForEdit, actionsLoading } = useSelector(
    (state) => ({
      expenseForEdit: state.expenses.expenseForEdit,
      actionsLoading: state.expenses.actionsLoading,
    }),
    shallowEqual
  );

  const [title, setTitle] = useState("");
  // Title couting
  useEffect(() => {
    let _title = id ? "" : "New Expense";
    if (expenseForEdit && id) {
      _title = `Edit expense '${expenseForEdit.firstName} ${expenseForEdit.lastName}'`;
    }

    setTitle(_title);
    // eslint-disable-next-line
  }, [expenseForEdit, actionsLoading]);

  return (
    <>
      {actionsLoading && <ModalProgressBar />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">{title}</Modal.Title>
      </Modal.Header>
    </>
  );
}
