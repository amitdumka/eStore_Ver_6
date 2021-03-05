import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/attendances/Actions";
import { EditDialogHeader } from "./EditDialogHeader";
import { EditForm } from "./EditForm";
import { useUIContext } from "../UIContext";
//attendance
//Attendance

export function EditDialog({ id, show, onHide }) {
  // Attendances UI Context
  const attendancesUIContext = useUIContext();
  const attendancesUIProps = useMemo(() => {
    return {
      initAttendance: attendancesUIContext.initAttendance,
    };
  }, [attendancesUIContext]);

  // Attendances Redux state
  const dispatch = useDispatch();
  const { actionsLoading, attendanceForEdit } = useSelector(
    (state) => ({
      actionsLoading: state.attendances.actionsLoading,
      attendanceForEdit: state.attendances.attendanceForEdit,
    }),
    shallowEqual
  );

  useEffect(() => {
    // server call for getting Attendance by id
    dispatch(actions.fetchAttendance(id));
  }, [id, dispatch]);

  // server request for saving attendance
  const saveAttendance = (attendance) => {
    if (!id) {
      // server request for creating attendance
      dispatch(actions.createAttendance(attendance)).then(() => onHide());
    } else {
      // server request for updating attendance
      dispatch(actions.updateAttendance(attendance)).then(() => onHide());
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
        saveAttendance={saveAttendance}
        actionsLoading={actionsLoading}
        attendance={attendanceForEdit || attendancesUIProps.initAttendance}
        onHide={onHide}
      />
    </Modal>
  );
}
