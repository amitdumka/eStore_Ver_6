import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listLoading: false,
  actionsLoading: false,
  lastError: null,

  payModes: null,
  rentTypes: null,
  accountType: null,
  paymentMode: null,
  attendanceUnits: null,
  employeeType: null,
  ledgerEntryType: null,
  ledgerCategoryType: null,
  taxType: null,
  gender: null,
  connectionType: null,
  units: null,
  sizes: null,
  productCategory: null,
  entryStatus: null,
  cardType: null,
  cardMode: null,
  vPayMode: null,
  salaryComponet: null,
  bankPayMode: null,
  voucherType: null,
  loginRole: null,
  arvindAccounts: null,
  storeList: null,
};
export const callTypes = {
  list: "list",
  action: "action",
};

export const commonTypesSlice = createSlice({
  name: "commonTypes",
  initialState: initialState,
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
    entryStatusFetched: (state, action) =>function(state, action) {
        const { entities } = action.payload;
        state.actionsLoading = false;
        state.listLoading = false;
        state.error = null;
        state.entryStatus = entities;
      },
      // get All parties List
      productCategoryFetched: function(state, action) {
        const {  entities } = action.payload;
        state.actionsLoading = false;
        state.listLoading = false;
        state.error = null;
        state.productCategory = entities;
       
      },
      // get All bank account List
      sizesFetched: function(state, action) {
        const { entities } = action.payload;
        state.actionsLoading = false;
        state.listLoading = false;
        state.error = null;
        state.sizes = entities;
        
      },
   
    vPayModesFetched: function(state, action) {
      const { entities } = action.payload;
      state.actionsLoading = false;
      state.listLoading = false;
      state.error = null;
      state.vPayModes = entities;
    },
    // get All parties List
    cardModeFetch: function(state, action) {
      const { entities } = action.payload;
      state.actionsLoading = false;
      state.listLoading = false;
      state.error = null;
      state.cardMode = entities;
    },
    // get All bank account List
    cardTypeFetch: function(state, action) {
      const { entities } = action.payload;
      state.actionsLoading = false;
      state.listLoading = false;
      state.error = null;
      state.cardType = entities;
    },

    voucherTypeFetched: function(state, action) {
      const { entities } = action.payload;
      state.actionsLoading = false;
      state.listLoading = false;
      state.error = null;
      state.voucherType = entities;
    },
    // get All parties List
    bankPayModeFetched: function(state, action) {
      const { entities } = action.payload;
      state.actionsLoading = false;
      state.listLoading = false;
      state.error = null;
      state.bankPayMode = entities;
    },
    // get All bank account List
    salaryComponentFetched: function(state, action) {
      const { entities } = action.payload;
      state.actionsLoading = false;
      state.listLoading = false;
      state.error = null;
      state.salaryComponet = entities;
    },

    payModesFetched: function(state, action) {
      const { entities } = action.payload;
      state.actionsLoading = false;
      state.listLoading = false;
      state.error = null;
      state.payModes = entities;
    },
    // get All parties List
    arvindAccountsFetched: function(state, action) {
      const { entities } = action.payload;
      state.actionsLoading = false;
      state.listLoading = false;
      state.error = null;
      state.arvindAccounts = entities;
    },
    // get All bank account List
    loginRoleFetched: function(state, action) {
      const { entities } = action.payload;
      state.actionsLoading = false;
      state.listLoading = false;
      state.error = null;
      state.loginRole = entities;
    },
  },
});
