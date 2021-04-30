import React, { useState, useEffect } from "react";
import React, { useEffect, useMemo, } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/DailySales/Actions";
import * as cActions from "../../../../_redux/Actions";
import { EditDialogHeader } from "./EditDialogHeader";
import { EditForm } from "./EditForm";
import { useUIContext } from "../UIContext";

export default function PaymentsDialog({ id, show, onHide, payMode }) {
  const uiContext = useUIContext();
  const uiProps = useMemo(() => {
    return {
      initDailySale: uiContext.initData,
    };
  }, [uiContext]);

  // DailySales Redux state
  const dispatch = useDispatch();
  const { actionsLoading, dailySaleForEdit, payModes } = useSelector(
    (state) => ({
      actionsLoading: state.dailySales.actionsLoading,
      dailySaleForEdit: state.dailySales.dailySaleForEdit,
      payModes: state.commonTypes.payModes,
    }),
    shallowEqual
  );

  useEffect(() => {
    // server call for getting DailySale by id
    dispatch(actions.fetchDailySale(id));
    dispatch(cActions.fetchEnumValue("payMode"));
  }, [id, dispatch]);

  return <div></div>;
}
export function DialogHeader({ id }) {
    // DailySales Redux state
    const { dailySaleForEdit, actionsLoading } = useSelector(
      (state) => ({
        dailySaleForEdit: state.dailySales.dailySaleForEdit,
        actionsLoading: state.dailySales.actionsLoading,
      }),
      shallowEqual
    );
  
    const [title, setTitle] = useState("");
    // Title couting
    useEffect(() => {
      let _title = id ? "" : "New Payment";
      if (dailySaleForEdit && id) {
        _title = `Payment Sale '${dailySaleForEdit.invNo} ${dailySaleForEdit.saleDate}'`;
      }
  
      setTitle(_title);
      // eslint-disable-next-line
    }, [dailySaleForEdit, actionsLoading]);
  
    return (
      <>
        {actionsLoading && <ModalProgressBar />}
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">{title}</Modal.Title>
        </Modal.Header>
      </>
    );
  }
  