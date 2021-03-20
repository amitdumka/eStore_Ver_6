import * as requestFromServer from "./Crud";
import { duesListsSlice, callTypes } from "./Slice";

//duesList
//duesList

const { actions } = duesListsSlice;

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
      dispatch(actions.duesListsFetched({ totalCount, entities }));
    })
    .catch((error) => {
      console.log(error);
      error.clientMessage = "Can't find duesLists";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchDuesList = (id) => (dispatch) => {
  if (!id) {
    return dispatch(actions.duesListFetched({ duesListForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getDuesListById(id)
    .then((response) => {
      const duesList = response.data;
      dispatch(actions.duesListFetched({ duesListForEdit: duesList }));
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
      dispatch(actions.duesListDeleted({ id }));
    })
    .catch((error) => {
      console.log("CD=" + error);
      error.clientMessage = "Can't delete duesList";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createDuesList = (duesListForCreation) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createDuesList(JSON.stringify(duesListForCreation))
    .then((response) => {
      const duesList = response.data;
      dispatch(actions.duesListCreated({ duesList }));
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
      dispatch(actions.duesListUpdated({ duesList }));
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
      dispatch(actions.duesListsStatusUpdated({ ids, status }));
    })
    .catch((error) => {
      error.clientMessage = "Can't update duesLists status";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteDuesLists = (ids) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteDuesLists(ids)
    .then(() => {
      dispatch(actions.duesListsDeleted({ ids }));
    })
    .catch((error) => {
      error.clientMessage = "Can't delete duesLists";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
