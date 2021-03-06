import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/salaryPayments/Actions";
import { EditDialogHeader } from "./EditDialogHeader";
import { EditForm } from "./EditForm";
import { useUIContext } from "../UIContext";

//salaryPayment
//SalaryPayment

export function EditDialog({ id, show, onHide }) {
  // SalaryPayments UI Context
  const salaryPaymentsUIContext = useUIContext();
  const salaryPaymentsUIProps = useMemo(() => {
    return {
      initSalaryPayment: salaryPaymentsUIContext.initSalaryPayment,
    };
  }, [salaryPaymentsUIContext]);

  // SalaryPayments Redux state
  const dispatch = useDispatch();
  const { actionsLoading, salaryPaymentForEdit ,employeeList} = useSelector(
    (state) => ({
      actionsLoading: state.salaryPayments.actionsLoading,
      salaryPaymentForEdit: state.salaryPayments.salaryPaymentForEdit,
      employeeList:state.salaryPayments.employeeEntities
    }),
    shallowEqual
  );

  useEffect(() => {
    // server call for getting SalaryPayment by id
    dispatch(actions.fetchSalaryPayment(id));
    dispatch(actions.fetchEmployees());
  }, [id, dispatch]);

  // server request for saving salaryPayment
  const saveSalaryPayment = (salaryPayment) => {
    if (!id) {
      // server request for creating salaryPayment
      dispatch(actions.createSalaryPayment(salaryPayment)).then(() => onHide());
    } else {
      // server request for updating salaryPayment
      dispatch(actions.updateSalaryPayment(salaryPayment)).then(() => onHide());
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
        saveSalaryPayment={saveSalaryPayment}
        actionsLoading={actionsLoading}
        salaryPayment={salaryPaymentForEdit || salaryPaymentsUIProps.initSalaryPayment}
        onHide={onHide}
        employeeList={employeeList}
      />
    </Modal>
  );
}
