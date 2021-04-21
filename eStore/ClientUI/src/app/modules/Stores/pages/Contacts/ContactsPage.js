import React from "react";
import { Route } from "react-router-dom";
import { ContactsLoadingDialog } from "./dialogs/LoadingDialog";
import { EditDialog } from "./dialogs/EditDialog";

import { DeleteDialog } from "./dialogs/DeleteDialog";

import { DeletesDialog } from "./dialogs/DeletesDialog";

import { FetchDialog } from "./dialogs/FetchDialog";
import { UpdateStateDialog } from "./dialogs/UpdateStateDialog";
import { UIProvider } from "./UIContext";
import { ContactsCard } from "./ContactsCard";

//Contact
//contact

export function ContactsPage({ history }) {
  const contactsUIEvents = {
    newContactButtonClick: () => {
      history.push("/contacting/contacts/new");
    },
    openEditContactDialog: (id) => {
      history.push(`/contacting/contacts/${id}/edit`);
    },
    openDeleteContactDialog: (id) => {
      history.push(`/contacting/contacts/${id}/delete`);
    },
    openDeleteContactsDialog: () => {
      history.push(`/contacting/contacts/deleteContacts`);
    },
    openFetchContactsDialog: () => {
      history.push(`/contacting/contacts/fetch`);
    },
    openUpdateContactsStatusDialog: () => {
      history.push("/contacting/contacts/updateStatus");
    }
  }

  return (
    <UIProvider UIEvents={contactsUIEvents}>
      <ContactsLoadingDialog />
      <Route path="/contacting/contacts/new">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            onHide={() => {
              history.push("/contacting/contacts");
            }}
          />
        )}
      </Route>
      <Route path="/contacting/contacts/:id/edit">
        {({ history, match }) => (
          <EditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/contacting/contacts");
            }}
          />
        )}
      </Route>
      <Route path="/contacting/contacts/deleteContacts">
        {({ history, match }) => (
          <DeletesDialog
            show={match != null}
            onHide={() => {
              history.push("/contacting/contacts");
            }}
          />
        )}
      </Route>
      <Route path="/contacting/contacts/:id/delete">
        {({ history, match }) => (
          <DeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/contacting/contacts");
            }}
          />
        )}
      </Route>
      <Route path="/contacting/contacts/fetch">
        {({ history, match }) => (
          <FetchDialog
            show={match != null}
            onHide={() => {
              history.push("/contacting/contacts");
            }}
          />
        )}
      </Route>
      <Route path="/contacting/contacts/updateStatus">
        {({ history, match }) => (
          <UpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/contacting/contacts");
            }}
          />
        )}
      </Route>
      <ContactsCard />
    </UIProvider>
  );
}
