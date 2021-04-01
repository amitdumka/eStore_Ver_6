import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useSelector } from "react-redux";

import { useUIContext } from "../UIContext";

//billpayment
//BillPayment


const selectedBillPayments = (entities, ids) => {
  const _billpayments = [];
  ids.forEach((id) => {
    const billpayment = entities.find((el) => el.id === id);
    if (billpayment) {
      _billpayments.push(billpayment);
    }
  });
  return _billpayments;
};

export function FetchDialog({ show, onHide }) {
  // BillPayments UI Context
  const billpaymentsUIContext = useUIContext();
  const billpaymentsUIProps = useMemo(() => {
    return {
      ids: billpaymentsUIContext.ids,
    };
  }, [billpaymentsUIContext]);

  // BillPayments Redux state
  const { billpayments } = useSelector(
    (state) => ({
      billpayments: selectedBillPayments(
        state.billpayments.entities,
        billpaymentsUIProps.ids
      ),
    }),
    shallowEqual
  );

  // if billpayments weren't selected we should close modal
  useEffect(() => {
    if (!billpaymentsUIProps.ids || billpaymentsUIProps.ids.length === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [billpaymentsUIProps.ids]);

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Fetch selected elements
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table className="table table table-head-custom table-vertical-center overflow-hidden">
          <thead>
            <tr>
              <th>ID</th>
              <th>STATUS</th>
              <th>CUSTOMER</th>
            </tr>
          </thead>
          <tbody>
            {billpayments.map((billpayment) => (
              <tr key={`id${billpayment.id}`}>
                <td>{billpayment.id}</td>
                <td>
                  <span className="ml-3">
                    {billpayment.lastName}, {billpayment.firstName}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={onHide}
            className="btn btn-light btn-elevate"
          >
            Cancel
          </button>
          <> </>
          <button
            type="button"
            onClick={onHide}
            className="btn btn-primary btn-elevate"
          >
            Ok
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
