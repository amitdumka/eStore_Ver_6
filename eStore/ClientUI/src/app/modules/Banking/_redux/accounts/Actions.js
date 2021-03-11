import * as requestFromServer from "./Crud";
import {accountsSlice, callTypes} from "./Slice";


//Account
//account


const {actions} = accountsSlice;

export const fetchBanks =id=>dispatch => {
  
  dispatch(actions.startCall({callType:callTypes.list}));

  return requestFromServer
  .getAllBanks()
  .then(response=>{
    const entities  = response.data; 
    const totalCount=response.data.length;
    console.log(entities);
    dispatch(actions.banksListFetched({totalCount, entities}));
  })
  .catch(error =>{
    console.log(error);
    error.clientMessage="Can't load banks list"; 
    dispatch(actions.catchError({error,callTypes:callTypes.list}));
  });
}

export const fetchAccounts = queryParams => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .findAccounts(queryParams)
    .then(response => {
      const  entities  = response.data;
      const totalCount = response.data.length;
      console.log(response);
      console.log(response.data.length);
      dispatch(actions.accountsFetched({ totalCount, entities }));
    })
    .catch(error => {
      console.log(error);
      error.clientMessage = "Can't find accounts";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchAccount = id => dispatch => {
  if (!id) {
    return dispatch(actions.accountFetched({ accountForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getAccountById(id)
    .then(response => {
      const account = response.data;
      dispatch(actions.accountFetched({ accountForEdit: account }));
    })
    .catch(error => {
      error.clientMessage = "Can't find account";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteAccount = id => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteAccount(id)
    .then(response => {
      dispatch(actions.accountDeleted({ id }));
    })
    .catch(error => {
      
      console.log("CD="+error);
      error.clientMessage = "Can't delete account";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createAccount = accountForCreation => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createAccount(JSON.stringify( accountForCreation))
    .then(response => {
      const  account  = response.data;
      console.log(response.data);
      dispatch(actions.accountCreated({ account }));
    })
    .catch(error => {
      error.clientMessage = "Can't create account";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateAccount = account => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateAccount(account)
    .then(() => {
      console.log(account);
      dispatch(actions.accountUpdated({ account }));
    })
    .catch(error => {
      console.log(error);
      error.clientMessage = "Can't update account";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateAccountsStatus = (ids, status) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateStatusForAccounts(ids, status)
    .then(() => {
      dispatch(actions.accountsStatusUpdated({ ids, status }));
    })
    .catch(error => {
      error.clientMessage = "Can't update accounts status";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteAccounts = ids => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteAccounts(ids)
    .then(() => {

      dispatch(actions.accountsDeleted({ ids }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete accounts";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

