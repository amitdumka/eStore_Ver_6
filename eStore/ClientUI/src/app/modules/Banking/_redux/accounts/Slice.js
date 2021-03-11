import {createSlice} from "@reduxjs/toolkit";
import { stubTrue } from "lodash-es";


//Account
//account
//Note: There will be unique slice patterns for each tables. 



const initialObjectState = {
  listLoading: false,
  actionsLoading: false,
  totalCount: 0,
  entities: null,
  objectForEdit: undefined,
  lastError: null
};

export const callTypes = {
  list: "list",
  action: "action"
};

export const accountsSlice = createSlice({
  name: "accounts",
  initialState: initialAccountsState,
  reducers: {
    catchError: (state, action) => {
      state.error = `${action.type}: ${action.payload.error}`;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
      } else {
        state.actionsLoading = false;
      }
    },
    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionsLoading = true;
      }
    },
    // get All bank List 
    banksListFetched: function(state,action){
      const{totalCount,entities}=action.payload;
     state.actionsLoading=false;
     state.listLoading =false;
     state.error=null;
     state.bankEntities=entities;
     state.totalCountEmp=totalCount;

    },
    // getAccountById
    accountFetched: (state, action) => {
      state.actionsLoading = false;
      state.accountForEdit = action.payload.accountForEdit;
      state.error = null;
    },
    // findAccounts
    accountsFetched: (state, action) => {
      const { totalCount, entities } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.entities = entities;
      state.totalCount = totalCount;
    },
    // createAccount
    accountCreated: (state, action) => {
      state.ewactionsLoading = false;
      state.error = null;
      state.entities.push(action.payload.account);
    },
    // updateAccount
    accountUpdated: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.map(entity => {
        if (entity.accountId === action.payload.account.accountId) {
          return action.payload.account;
        }
        return entity;
      });
    },
    // deleteAccount
    accountDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(el => el.accountId !== action.payload.accountId);
    },
    // deleteAccounts
    accountsDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(
        el => !action.payload.ids.includes(el.accountId)
      );
    },

    
    // accountsUpdateState
    accountsStatusUpdated: (state, action) => {
      state.actionsLoading = false;
      state.error = null;
      const { ids, status } = action.payload;
      state.entities = state.entities.map(entity => {
        if (ids.findIndex(id => id === entity.accountId) > -1) {
          entity.status = status;
        }
        return entity;
      });
    }
  }
});
