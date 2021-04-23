import React, { useEffect, useMemo, useState } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/PettyCashBooks/Actions";
import * as commonActions from "../../../../_redux/Actions";
import { EditForm } from "./EditForm";
import { useUIContext } from "../UIContext";

export function EditDialog({ id, show, onHide }) {
  // PettyCashBooks UI Context
  const uiContext = useUIContext();
  const uiProps = useMemo(() => {
    return {
      initData: uiContext.intiData,
      initNHoliday: uiContext.initHoliday,
      initStoreHoliday: uiContext.StoreHoliday,
    };
  }, [uiContext]);

  // PettyCashBooks Redux state
  const dispatch = useDispatch();
  const { actionsLoading, storeList } = useSelector(
    (state) => ({
      actionsLoading: state.pettyCashBooks.actionsLoading,
      storeList: state.commonTypes.storeList,
    }),
    shallowEqual
  );

  useEffect(() => {
    // server call for getting PettyCashBook by id
    dispatch(actions.fetchPettyCashBook(id));
    dispatch(commonActions.fetchStores());
  }, [id, dispatch]);

  // server request for saving pettyCashBook
  const saveData = (CurData) => {
    let holiday = uiProps.storeHoliday;

    holiday.onDate = CurData.onDate;
    holiday.reason = CurData.reason;
    holiday.remarks = CurData.remarks;
    holiday.approvedBy = CurData.approvedBy;

    const isNday = CurData.nDays;
    if (isNday) {
      // Multiple Days
      let data = uiProps.initNHoliday;
      data.holiday = holiday;
      data.endDate = CurData.endDate;
      dispatch(actions.createNDaysHoliday(data)).then(() => onHide());
    } else {
      //Single Days
      dispatch(actions.createStoreHoliday(holiday)).then(() => onHide());
    }
  };

  return (
    <Modal
      size="lg"
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <EditDialogHeader />
      <EditForm
        saveData={saveData}
        actionsLoading={actionsLoading}
        initData={uiProps.initData}
        onHide={onHide}
        storeList={storeList}
      />
    </Modal>
  );
}

export function EditDialogHeader({ id }) {
  const [title, setTitle] = useState("");
  // Title couting
  useEffect(() => {
    setTitle("New Holiday");
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">{title}</Modal.Title>
      </Modal.Header>
    </>
  );
}
