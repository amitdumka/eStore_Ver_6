import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/bookings/Actions";
import { EditDialogHeader } from "./EditDialogHeader";
import { EditForm } from "./EditForm";
import { useUIContext } from "../UIContext";

//booking
//Booking

export function EditDialog({ id, show, onHide }) {
  // Bookings UI Context
  const bookingsUIContext = useUIContext();
  const bookingsUIProps = useMemo(() => {
    return {
      initBooking: bookingsUIContext.initBooking,
    };
  }, [bookingsUIContext]);

  // Bookings Redux state
  const dispatch = useDispatch();
  const { actionsLoading, bookingForEdit, taxTypes } = useSelector(
    (state) => ({
      actionsLoading: state.bookings.actionsLoading,
      bookingForEdit: state.bookings.bookingForEdit,
      taxTypes: state.bookings.taxTypes,
    }),
    shallowEqual
  );

  useEffect(() => {
    // server call for getting Booking by id
    dispatch(actions.fetchBooking(id));
    dispatch(actions.fetchTaxType());
  }, [id, dispatch]);

  // server request for saving booking
  const saveBooking = (booking) => {
    booking.category = parseInt(booking.category);

    if (!id) {
      // server request for creating booking
      dispatch(actions.createBooking(booking)).then(() => onHide());
    } else {
      // server request for updating booking
      dispatch(actions.updateBooking(booking)).then(() => onHide());
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
        saveBooking={saveBooking}
        actionsLoading={actionsLoading}
        booking={bookingForEdit || bookingsUIProps.initBooking}
        onHide={onHide}
        taxTypes={taxTypes}
      />
    </Modal>
  );
}
