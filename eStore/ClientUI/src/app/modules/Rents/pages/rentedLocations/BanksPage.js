import React from "react";
import { Route } from "react-router-dom";
import { RentedLocationsLoadingDialog } from "./dialogs/LoadingDialog";
import { EditDialog } from "./dialogs/EditDialog";

import { DeleteDialog } from "./dialogs/DeleteDialog";

import { DeletesDialog } from "./dialogs/DeletesDialog";

import { FetchDialog } from "./dialogs/FetchDialog";
import { UpdateStateDialog } from "./dialogs/UpdateStateDialog";
import { UIProvider } from "./UIContext";
import { RentedLocationsCard } from "./RentedLocationsCard";

//RentedLocation
//rentedLocation

export function RentedLocationsPage({ history }) {
  const rentedLocationsUIEvents = {
    newRentedLocationButtonClick: () => {
      history.push("/accounting/rentedLocationing/rentedLocations/new");
    },
    openEditRentedLocationDialog: (id) => {
      history.push(`/accounting/rentedLocationing/rentedLocations/${id}/edit`);
    },
    openDeleteRentedLocationDialog: (id) => {
      history.push(`/accounting/rentedLocationing/rentedLocations/${id}/delete`);
    },
    openDeleteRentedLocationsDialog: () => {
      history.push(`/accounting/rentedLocationing/rentedLocations/deleteRentedLocations`);
    },
    openFetchRentedLocationsDialog: () => {
      history.push(`/accounting/rentedLocationing/rentedLocations/fetch`);
    },
    openUpdateRentedLocationsStatusDialog: () => {
      history.push("/accounting/rentedLocationing/rentedLocations/updateStatus");
    }
  }

  return (
    <UIProvider UIEvents={rentedLocationsUIEvents}>
      <RentedLocationsLoadingDialog />
      <Route path="/accounting/rentedLocationing/rentedLocations/new">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            onHide={() => {
              history.push("/accounting/rentedLocationing/rentedLocations");
            }}
          />
        )}
      </Route>
      <Route path="/accounting/rentedLocationing/rentedLocations/:id/edit">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/accounting/rentedLocationing/rentedLocations");
            }}
          />
        )}
      </Route>
      <Route path="/accounting/rentedLocationing/rentedLocations/deleteRentedLocations">
        {({ history, match }) => (
          <DeletesDialog
            show={match != null}
            onHide={() => {
              history.push("/accounting/rentedLocationing/rentedLocations");
            }}
          />
        )}
      </Route>
      <Route path="/accounting/rentedLocationing/rentedLocations/:id/delete">
        {({ history, match }) => (
          <DeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/accounting/rentedLocationing/rentedLocations");
            }}
          />
        )}
      </Route>
      <Route path="/accounting/rentedLocationing/rentedLocations/fetch">
        {({ history, match }) => (
          <FetchDialog
            show={match != null}
            onHide={() => {
              history.push("/accounting/rentedLocationing/rentedLocations");
            }}
          />
        )}
      </Route>
      <Route path="/accounting/rentedLocationing/rentedLocations/updateStatus">
        {({ history, match }) => (
          <UpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/accounting/rentedLocationing/rentedLocations");
            }}
          />
        )}
      </Route>
      <RentedLocationsCard />
    </UIProvider>
  );
}
