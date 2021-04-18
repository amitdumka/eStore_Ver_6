import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/pettyCashBooks/Actions";
import * as commonActions from "../../../../_redux/Actions";
import { EditDialogHeader } from "./EditDialogHeader";
import { EditForm } from "./EditForm";
import { useUIContext } from "../UIContext";
//pettyCashBook
//PettyCashBook

export function EditDialog({ id, show, onHide }) {
  // PettyCashBooks UI Context
  const pettyCashBooksUIContext = useUIContext();
  const pettyCashBooksUIProps = useMemo(() => {
    return {
      initPettyCashBook: pettyCashBooksUIContext.initPettyCashBook,
    };
  }, [pettyCashBooksUIContext]);

  // PettyCashBooks Redux state
  const dispatch = useDispatch();
  const { actionsLoading, pettyCashBookForEdit ,payModes,pettyCashBookTypes, pettyCashBookedLocations, storeList, PettyCashSlip} = useSelector(
    (state) => ({
      actionsLoading: state.pettyCashBooks.actionsLoading,
      pettyCashBookForEdit: state.pettyCashBooks.pettyCashBookForEdit,
      // payModes:state.pettyCashBooks.payModes,
      // pettyCashBookTypes:state.pettyCashBooks.pettyCashBookTypes,
      // pettyCashBookedLocations:state.pettyCashBooks.pettyCashBookedLocations, 
      storeList: state.commonTypes.storeList,
      PettyCashSlip:state.pettyCashBook.sysGenPettyCashSlip,
    }),
    shallowEqual
  );

  useEffect(() => {
    // server call for getting PettyCashBook by id
    dispatch(actions.fetchPettyCashBook(id));
    // dispatch(actions.fetchLocations());
    // dispatch(actions.fetchPettyCashBookTypes());
    // dispatch(actions.fetchPayModes());
    dispatch(actions.fetchSysGenPettyCashSlip());
    dispatch(commonActions.fetchStores());

  }, [id, dispatch]);

  // server request for saving pettyCashBook
  const savePettyCashBook = (pettyCashBook) => {
    pettyCashBook.storeId=parseInt(pettyCashBook.storeId);
    pettyCashBook.pettyCashBookedLocationId=parseInt(pettyCashBook.pettyCashBookedLocationId);
    pettyCashBook.pettyCashBookType=parseInt(pettyCashBook.pettyCashBookType);
    pettyCashBook.mode=parseInt(pettyCashBook.mode);

    if (!id) {
      // server request for creating pettyCashBook
      dispatch(actions.createPettyCashBook(pettyCashBook)).then(() => onHide());
    } else {
      // server request for updating pettyCashBook
      dispatch(actions.updatePettyCashBook(pettyCashBook)).then(() => onHide());
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
        savePettyCashBook={savePettyCashBook}
        actionsLoading={actionsLoading}
        pettyCashBook={pettyCashBookForEdit || pettyCashBooksUIProps.initPettyCashBook}
        onHide={onHide}
        // payModes={payModes}
        // pettyCashBookTypes={pettyCashBookTypes}
        // locationList={pettyCashBookedLocations}
        storeList={storeList}
        PettyCashSlip={PettyCashSlip}
      />
    </Modal>
  );
}
