import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {ModalProgressBar} from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../../_redux/billpayments/Actions";
import {useUIContext} from "../UIContext";

//billpayment
//BillPayment

// Delete particular record.
export function DeleteDialog({ id, show, onHide }) {
  // BillPayments UI Context
  const billpaymentsUIContext = useUIContext();
  const billpaymentsUIProps = useMemo(() => {
    return {
      setIds: billpaymentsUIContext.setIds,
      queryParams: billpaymentsUIContext.queryParams
    };
  }, [billpaymentsUIContext]);

  // BillPayments Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.billpayments.actionsLoading }),
    shallowEqual
  );

  // if !id we should close modal
  useEffect(() => {
    if (!id) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // looking for loading/dispatch
  useEffect(() => {}, [isLoading, dispatch]);

  const deleteBillPayment = () => {
    // server request for deleting billpayment by id
    dispatch(actions.deleteBillPayment(id)).then(() => {
      // refresh list after deletion
      dispatch(actions.fetchBillPayments(billpaymentsUIProps.queryParams));
      // clear selections list
      billpaymentsUIProps.setIds([]);
      // closing delete modal
      onHide();
    });
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {/*begin::Loading*/}
      {isLoading && <ModalProgressBar />}
      {/*end::Loading*/}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          BillPayment Delete
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Are you sure to permanently delete this billpayment?</span>
        )}
        {isLoading && <span>BillPayment is deleting...</span>}
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
            onClick={deleteBillPayment}
            className="btn btn-primary btn-elevate"
          >
            Delete
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
