import {createSlice} from "@reduxjs/toolkit";



//Bill
//bill


const initialBillsState = {
  listLoading: false,
  actionsLoading: false,
  totalCount: 0,
  entities: null,
  billForEdit: undefined,
  lastError: null, 
  billTypes:null, 
  payModes:null, 
  billedLocations:null
};
export const callTypes = {
  list: "list",
  action: "action"
};

export const billsSlice = createSlice({
  name: "bills",
  initialState: initialBillsState,
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
    payModesFetched: function(state, action){
      const{entities}=action.payload;
      state.actionsLoading=false;
      state.listLoading =false;
      state.error=null;
      state.payModes=entities;
      
    },
    billTypesFetched: function(state, action){
      const{entities}=action.payload;
     state.actionsLoading=false;
     state.listLoading =false;
     state.error=null;
     state.billTypes=entities;
     
    },
    // get All bank List 
    billedLocationsFetched: function(state,action){
      const{entities}=action.payload;
     state.actionsLoading=false;
     state.listLoading =false;
     state.error=null;
     state.billedLocations=entities;
     
    },
    // getBillById
    billFetched: (state, action) => {
      state.actionsLoading = false;
      state.billForEdit = action.payload.billForEdit;
      state.error = null;
    },
    // findBills
    billsFetched: (state, action) => {
      const { totalCount, entities } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.entities = entities;
      state.totalCount = totalCount;
    },
    // createBill
    billCreated: (state, action) => {
      state.ewactionsLoading = false;
      state.error = null;
      state.entities.push(action.payload.bill);
    },
    // updateBill
    billUpdated: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.map(entity => {
        if (entity.billId === action.payload.bill.billId) {
          return action.payload.bill;
        }
        return entity;
      });
    },
    // deleteBill
    billDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(el => el.billId !== action.payload.billId);
    },
    // deleteBills
    billsDeleted: (state, action) => {
      state.error = null;
      state.actionsLoading = false;
      state.entities = state.entities.filter(
        el => !action.payload.ids.includes(el.billId)
      );
    },
    
    // billsUpdateState
    billsStatusUpdated: (state, action) => {
      state.actionsLoading = false;
      state.error = null;
      const { ids, status } = action.payload;
      state.entities = state.entities.map(entity => {
        if (ids.findIndex(id => id === entity.billId) > -1) {
          entity.status = status;
        }
        return entity;
      });
    }
  }
});
