import {createSlice} from "@reduxjs/toolkit";
import { stubTrue } from "lodash-es";


//duesList
//duesList

const initialDuesListsState = {
  listLoading: false,
  actionsLoading: false,
  totalCount: 0,
  entities: null,
  duesListForEdit: undefined,
  lastError: null, 
  employeeEntities: null, 
  totalCountEmp:0,
  partiesEntities:null,
  bankaccEntities:null,
  totalCountbankacc:undefined, 
  totalCountparty:undefined
};
export const callTypes = {
  list: "list",
  action: "action"
};

export const duesListsSlice = createSlice({
  name: "duesLists",
  initialState: initialDuesListsState,
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
    // get All employee List 
    employeesListFetched: function(state,action){
      const{totalCount,entities}=action.payload;
     state.actionsLoading=false;
     state.listLoading =false;
     state.error=null;
     state.employeeEntities=entities;
     state.totalCountEmp=totalCount;

    },
    // get All parties List 
    partiesListFetched: function(state,action){
      const{totalCount,entities}=action.payload;
     state.actionsLoading=false;
     state.listLoading =false;
     state.error=null;
     state.partiesEntities=entities;
     state.totalCountparty=totalCount;

    },
    // get All bank account List 
    bankAccountsListFetched: function(state,action){
      const{totalCount,entities}=action.payload;
     state.actionsLoading=false;
     state.listLoading =false;
     state.error=null;
     state.bankaccEntities=entities;
     state.totalCountbankacc=totalCount;

    },
    // getDuesListById
    duesListFetched: (state, action) => {
      state.actionsLoading = false;
      state.duesListForEdit = action.payload.duesListForEdit;
      state.error = null;
    },
    // findDuesLists
    duesListsFetched: (state, action) => {
      const { totalCount, entities } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.entities = entities;
      state.totalCount = totalCount;
    },
    // createDuesList
    duesListCreated: (state, action) => {
      state.ewactionsLoading = false;
      state.error = null;
      state.entities.push(action.payload.duesList);
    },
    // updateDuesList
    duesListUpdated: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.map(entity => {
        if (entity.duesListId === action.payload.duesList.duesListId) {
          return action.payload.duesList;
        }
        return entity;
      });
    },
    // deleteDuesList
    duesListDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(el => el.duesListId !== action.payload.duesListId);
    },
    // deleteDuesLists
    duesListsDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(
        el => !action.payload.ids.includes(el.duesListId)
      );
    },

    
    // duesListsUpdateState
    duesListsStatusUpdated: (state, action) => {
      state.actionsLoading = false;
      state.error = null;
      const { ids, status } = action.payload;
      state.entities = state.entities.map(entity => {
        if (ids.findIndex(id => id === entity.duesListId) > -1) {
          entity.status = status;
        }
        return entity;
      });
    }
  }
});
