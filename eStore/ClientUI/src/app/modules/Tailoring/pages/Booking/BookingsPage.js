import React from "react";
import { Route } from "react-router-dom";
import { BookingsLoadingDialog } from "./dialogs/LoadingDialog";
import { EditDialog } from "./dialogs/EditDialog";

import { DeleteDialog } from "./dialogs/DeleteDialog";

import { DeletesDialog } from "./dialogs/DeletesDialog";

import { FetchDialog } from "./dialogs/FetchDialog";
import { UpdateStateDialog } from "./dialogs/UpdateStateDialog";
import { UIProvider } from "./UIContext";
import { BookingsCard } from "./BookingsCard";

//booking
//Booking


export function BookingsPage({ history }) {
  const bookingsUIEvents = {
    newBookingButtonClick: () => {
      history.push("/taxes/booking/new");
    },
    openEditBookingDialog: (id) => {
      history.push(`/taxes/booking/${id}/edit`);
    },
    openDeleteBookingDialog: (id) => {
      history.push(`/taxes/booking/${id}/delete`);
    },
    openDeleteBookingsDialog: () => {
      history.push(`/taxes/booking/deleteBookings`);
    },
    openFetchBookingsDialog: () => {
      history.push(`/taxes/booking/fetch`);
    },
    openUpdateBookingsStatusDialog: () => {
      history.push("/taxes/booking/updateStatus");
    }
  }

  return (
    <UIProvider UIEvents={bookingsUIEvents}>
      <BookingsLoadingDialog />
      <Route path="/taxes/booking/new">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            onHide={() => {
              history.push("/taxes/booking");
            }}
          />
        )}
      </Route>
      <Route path="/taxes/booking/:id/edit">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/taxes/booking");
            }}
          />
        )}
      </Route>
      <Route path="/taxes/booking/deleteBookings">
        {({ history, match }) => (
          <DeletesDialog
            show={match != null}
            onHide={() => {
              history.push("/taxes/booking");
            }}
          />
        )}
      </Route>
      <Route path="/taxes/booking/:id/delete">
        {({ history, match }) => (
          <DeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/taxes/booking");
            }}
          />
        )}
      </Route>
      <Route path="/taxes/booking/fetch">
        {({ history, match }) => (
          <FetchDialog
            show={match != null}
            onHide={() => {
              history.push("/taxes/booking");
            }}
          />
        )}
      </Route>
      <Route path="/taxes/booking/updateStatus">
        {({ history, match }) => (
          <UpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/taxes/booking");
            }}
          />
        )}
      </Route>
      <BookingsCard />
    </UIProvider>
  );
}
