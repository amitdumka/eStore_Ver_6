import React, { useState, useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import {ModalProgressBar} from "../../../../../../_metronic/_partials/controls";

//billpayment
//BillPayment

export function EditDialogHeader({ id }) {
  // BillPayments Redux state
  const { billpaymentForEdit, actionsLoading } = useSelector(
    (state) => ({
      billpaymentForEdit: state.billpayments.billpaymentForEdit,
      actionsLoading: state.billpayments.actionsLoading,
    }),
    shallowEqual
  );

  const [title, setTitle] = useState("");
  // Title couting
  useEffect(() => {
    let _title = id ? "" : "New BillPayment Payment";
    if (billpaymentForEdit && id) {
      _title = `Edit BillPayment Payment '${billpaymentForEdit.account}'`;
    }

    setTitle(_title);
    // eslint-disable-next-line
  }, [billpaymentForEdit, actionsLoading]);

  return (
    <>
      {actionsLoading && <ModalProgressBar />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">{title}</Modal.Title>
      </Modal.Header>
    </>
  );
}
