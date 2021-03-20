import * as requestFromServer from "./Crud";
import { dueRecoveredsSlice, callTypes } from "./Slice";

//DueRecovered
//dueRecovered

const { actions } = dueRecoveredsSlice;

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

export const fetchDueRecovereds = (queryParams) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .findDueRecovereds(queryParams)
    .then((response) => {
      const entities = response.data;
      const totalCount = response.data.length;
      console.log(response.data);
      
      dispatch(actions.dueRecoveredsFetched({ totalCount, entities }));
    })
    .catch((error) => {
      console.log(error);
      error.clientMessage = "Can't find dueRecovereds";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchDueRecovered = (id) => (dispatch) => {
  if (!id) {
    return dispatch(actions.dueRecoveredFetched({ dueRecoveredForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getDueRecoveredById(id)
    .then((response) => {
      const dueRecovered = response.data;
      dispatch(actions.dueRecoveredFetched({ dueRecoveredForEdit: dueRecovered }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find dueRecovered";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteDueRecovered = (id) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteDueRecovered(id)
    .then((response) => {
      dispatch(actions.dueRecoveredDeleted({ id }));
    })
    .catch((error) => {
      console.log("CD=" + error);
      error.clientMessage = "Can't delete dueRecovered";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createDueRecovered = (dueRecoveredForCreation) => (dispatch) => {
  console.log(dueRecoveredForCreation);
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createDueRecovered(JSON.stringify(dueRecoveredForCreation))
    .then((response) => {
      const dueRecovered = response.data;
      dispatch(actions.dueRecoveredCreated({ dueRecovered }));
    })
    .catch((error) => {
      console.log(error);
      error.clientMessage = "Can't create dueRecovered";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateDueRecovered = (dueRecovered) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateDueRecovered(dueRecovered)
    .then(() => {
      console.log(dueRecovered);
      dispatch(actions.dueRecoveredUpdated({ dueRecovered }));
    })
    .catch((error) => {
      console.log(error);
      error.clientMessage = "Can't update dueRecovered";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateDueRecoveredsStatus = (ids, status) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateStatusForDueRecovereds(ids, status)
    .then(() => {
      dispatch(actions.dueRecoveredsStatusUpdated({ ids, status }));
    })
    .catch((error) => {
      error.clientMessage = "Can't update dueRecovereds status";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteDueRecovereds = (ids) => (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteDueRecovereds(ids)
    .then(() => {
      dispatch(actions.dueRecoveredsDeleted({ ids }));
    })
    .catch((error) => {
      error.clientMessage = "Can't delete dueRecovereds";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
