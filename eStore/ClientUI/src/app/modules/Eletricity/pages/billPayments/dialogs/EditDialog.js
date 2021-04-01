import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/billpayments/Actions";
import { EditDialogHeader } from "./EditDialogHeader";
import { EditForm } from "./EditForm";
import { useUIContext } from "../UIContext";
//billpayment
//BillPayment

export function EditDialog({ id, show, onHide }) {
  // BillPayments UI Context
  const billpaymentsUIContext = useUIContext();
  const billpaymentsUIProps = useMemo(() => {
    return {
      initBillPayment: billpaymentsUIContext.initBillPayment,
    };
  }, [billpaymentsUIContext]);

  // BillPayments Redux state
  const dispatch = useDispatch();
  const { actionsLoading, billpaymentForEdit ,payModes,billpaymentTypes, billpaymentedLocations} = useSelector(
    (state) => ({
      actionsLoading: state.billpayments.actionsLoading,
      billpaymentForEdit: state.billpayments.billpaymentForEdit,
      payModes:state.billpayments.payModes,
      billpaymentTypes:state.billpayments.billpaymentTypes,
      billpaymentedLocations:state.billpayments.billpaymentedLocations
    }),
    shallowEqual
  );

  useEffect(() => {
    // server call for getting BillPayment by id
    dispatch(actions.fetchBillPayment(id));
    dispatch(actions.fetchLocations());
    dispatch(actions.fetchBillPaymentTypes());
    dispatch(actions.fetchPayModes());

  }, [id, dispatch]);

  // server request for saving billpayment
  const saveBillPayment = (billpayment) => {
    
    billpayment.accountType=parseInt(billpayment.accountType);

    if (!id) {
      // server request for creating billpayment
      dispatch(actions.createBillPayment(billpayment)).then(() => onHide());
    } else {
      // server request for updating billpayment
      dispatch(actions.updateBillPayment(billpayment)).then(() => onHide());
    }
  };

  return (
    <Modal
      size="lg"
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <EditDialogHeader id={id} />
      <EditForm
        saveBillPayment={saveBillPayment}
        actionsLoading={actionsLoading}
        billpayment={billpaymentForEdit || billpaymentsUIProps.initBillPayment}
        onHide={onHide}
        payModes={payModes}
        billpaymentTypes={billpaymentTypes}
        locationList={billpaymentedLocations}
      />
    </Modal>
  );
}
