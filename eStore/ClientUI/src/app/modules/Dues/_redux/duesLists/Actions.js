import * as requestFromServer from "./Crud";
import { dueslistsSlice, callTypes } from "./Slice";

//duesList
//duesList

const { actions } = dueslistsSlice;

export const fetchParties = (id) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));

  return requestFromServer
    .getAllParty()
    .then((response) => {
      const entities = response.data;
      const totalCount = response.data.length;
      console.log(entities);
      dispatch(actions.partiesListFetched({ totalCount, entities }));
    })
    .catch((error) => {
      console.log(error);
      error.clientMessage = "Can't load parties/Ledger list";
      dispatch(actions.catchError({ error, callTypes: callTypes.list }));
    });
};
export const fetchBankAccounts = (id) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));

  return requestFromServer
    .getAllBankAccount()
    .then((response) => {
      const entities = response.data;
      const totalCount = response.data.length;
      console.log(entities);
      dispatch(actions.bankAccountsListFetched({ totalCount, entities }));
    })
    .catch((error) => {
      console.log(error);
      error.clientMessage = "Can't load Bank Accounts list";
      dispatch(actions.catchError({ error, callTypes: callTypes.list }));
    });
};
export const fetchEmployees = (id) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));

  return requestFromServer
    .getAllEmployees()
    .then((response) => {
      const entities = response.data;
      const totalCount = response.data.length;
      console.log(entities);
      dispatch(actions.employeesListFetched({ totalCount, entities }));
    })
    .catch((error) => {
      console.log(error);
      error.clientMessage = "Can't load employees list";
      dispatch(actions.catchError({ error, callTypes: callTypes.list }));
    });
};

export const fetchDuesLists = (queryParams) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .findDuesLists(queryParams)
    .then((response) => {
      const entities = response.data;
      const totalCount = response.data.length;
      dispatch(actions.dueslistsFetched({ totalCount, entities }));
    })
    .catch((error) => {
      console.log(error);
      error.clientMessage = "Can't find dueslists";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchDuesList = (id) => (dispatch) => {
  if (!id) {
    return dispatch(actions.dueslistFetched({ dueslistForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getDuesListById(id)
    .then((response) => {
      const duesList = response.data;
      dispatch(actions.dueslistFetched({ dueslistForEdit: duesList }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find duesList";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteDuesList = (id) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteDuesList(id)
    .then((response) => {
      dispatch(actions.dueslistDeleted({ id }));
    })
    .catch((error) => {
      console.log("CD=" + error);
      error.clientMessage = "Can't delete duesList";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createDuesList = (dueslistForCreation) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createDuesList(JSON.stringify(dueslistForCreation))
    .then((response) => {
      const duesList = response.data;
      dispatch(actions.dueslistCreated({ duesList }));
    })
    .catch((error) => {
      console.log(error);
      error.clientMessage = "Can't create duesList";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateDuesList = (duesList) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateDuesList(duesList)
    .then(() => {
      console.log(duesList);
      dispatch(actions.dueslistUpdated({ duesList }));
    })
    .catch((error) => {
      console.log(error);
      error.clientMessage = "Can't update duesList";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateDuesListsStatus = (ids, status) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateStatusForDuesLists(ids, status)
    .then(() => {
      dispatch(actions.dueslistsStatusUpdated({ ids, status }));
    })
    .catch((error) => {
      error.clientMessage = "Can't update dueslists status";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteDuesLists = (ids) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteDuesLists(ids)
    .then(() => {
      dispatch(actions.dueslistsDeleted({ ids }));
    })
    .catch((error) => {
      error.clientMessage = "Can't delete dueslists";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
