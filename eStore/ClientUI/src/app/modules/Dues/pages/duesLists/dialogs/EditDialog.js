import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/duesLists/Actions";
import { EditDialogHeader } from "./EditDialogHeader";
import { EditForm } from "./EditForm";
import { useUIContext } from "../UIContext";

//duesList
//DuesList

export function EditDialog({ id, show, onHide }) {
  // DuesLists UI Context
  const duesListsUIContext = useUIContext();
  const duesListsUIProps = useMemo(() => {
    return {
      initDuesList: duesListsUIContext.initDuesList,
    };
  }, [duesListsUIContext]);

  // DuesLists Redux state
  const dispatch = useDispatch();
  const { actionsLoading, duesListForEdit ,employeeList, partiesList, bankAccountsList} = useSelector(
    (state) => ({
      actionsLoading: state.duesLists.actionsLoading,
      duesListForEdit: state.duesLists.duesListForEdit,
      employeeList:state.duesLists.employeeEntities,
      partiesList:state.duesLists.partiesEntities, 
      bankAccountsList:state.duesLists.bankaccEntities
    }),
    shallowEqual
  );

  useEffect(() => {
    // server call for getting DuesList by id
    dispatch(actions.fetchDuesList(id));
    dispatch(actions.fetchParties());
    dispatch(actions.fetchBankAccounts());
    dispatch(actions.fetchEmployees());
  }, [id, dispatch]);

  // server request for saving duesList
  const saveDuesList = (duesList) => {
    duesList.payMode=parseInt(duesList.payMode);
    if (!id) {
      // server request for creating duesList
      dispatch(actions.createDuesList(duesList)).then(() => onHide());
    } else {
      // server request for updating duesList
      dispatch(actions.updateDuesList(duesList)).then(() => onHide());
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
        saveDuesList={saveDuesList}
        actionsLoading={actionsLoading}
        duesList={duesListForEdit || duesListsUIProps.initDuesList}
        onHide={onHide}
        employeeList={employeeList}
        partiesList={partiesList}
        bankAccountsList={bankAccountsList}
      />
    </Modal>
  );
}
