import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/rents/Actions";
import { EditDialogHeader } from "./EditDialogHeader";
import { EditForm } from "./EditForm";
import { useUIContext } from "../UIContext";
//rent
//Rent

export function EditDialog({ id, show, onHide }) {
  // Rents UI Context
  const rentsUIContext = useUIContext();
  const rentsUIProps = useMemo(() => {
    return {
      initRent: rentsUIContext.initRent,
    };
  }, [rentsUIContext]);

  // Rents Redux state
  const dispatch = useDispatch();
  const { actionsLoading, rentForEdit ,bankList} = useSelector(
    (state) => ({
      actionsLoading: state.rents.actionsLoading,
      rentForEdit: state.rents.rentForEdit,
      bankList:state.rents.bankEntities
    }),
    shallowEqual
  );

  useEffect(() => {
    // server call for getting Rent by id
    dispatch(actions.fetchRent(id));
    dispatch(actions.fetchBanks());
  }, [id, dispatch]);

  // server request for saving rent
  const saveRent = (rent) => {
    
    rent.accountType=parseInt(rent.accountType);

    if (!id) {
      // server request for creating rent
      dispatch(actions.createRent(rent)).then(() => onHide());
    } else {
      // server request for updating rent
      dispatch(actions.updateRent(rent)).then(() => onHide());
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
        saveRent={saveRent}
        actionsLoading={actionsLoading}
        rent={rentForEdit || rentsUIProps.initRent}
        onHide={onHide}
        bankList={bankList}
      />
    </Modal>
  );
}