import React, { useEffect, useState, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/billpayments/Actions";
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

export function UpdateStateDialog({ show, onHide }) {
  // BillPayments UI Context
  const billpaymentsUIContext = useUIContext();
  const billpaymentsUIProps = useMemo(() => {
    return {
      ids: billpaymentsUIContext.ids,
      setIds: billpaymentsUIContext.setIds,
      queryParams: billpaymentsUIContext.queryParams,
    };
  }, [billpaymentsUIContext]);

  // BillPayments Redux state
  const { billpayments, isLoading } = useSelector(
    (state) => ({
      billpayments: selectedBillPayments(
        state.billpayments.entities,
        billpaymentsUIProps.ids
      ),
      isLoading: state.billpayments.actionsLoading,
    }),
    shallowEqual
  );

  // if !id we should close modal
  useEffect(() => {
    if (!billpaymentsUIProps.ids || billpaymentsUIProps.ids.length === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [billpaymentsUIProps.ids]);

  const [status, setStatus] = useState(0);

  const dispatch = useDispatch();
  const updateStatus = () => {
    // server request for update billpayments status by selected ids
    dispatch(actions.updateBillPaymentsStatus(billpaymentsUIProps.ids, status)).then(
      () => {
        // refresh list after deletion
        dispatch(actions.fetchBillPayments(billpaymentsUIProps.queryParams)).then(
          () => {
            // clear selections list
            billpaymentsUIProps.setIds([]);
            // closing delete modal
            onHide();
          }
        );
      }
    );
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Status has been updated for selected billpayments
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="overlay overlay-block cursor-default">
        {/*begin::Loading*/}
        {isLoading && (
          <div className="overlay-layer">
            <div className="spinner spinner-lg spinner-primary" />
          </div>
        )}
        {/*end::Loading*/}
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
      <Modal.Footer className="form">
        <div className="form-group">
          <select
            className="form-control"
            value={status}
            onChange={(e) => setStatus(+e.target.value)}
          >
            <option value="0">Suspended</option>
            <option value="1">Active</option>
            <option value="2">Pending</option>
          </select>
        </div>
        <div className="form-group">
          <button
            type="button"
            onClick={onHide}
            className="btn btn-light btn-elevate mr-3"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={updateStatus}
            className="btn btn-primary btn-elevate"
          >
            Update Status
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
