import { createSlice } from "@reduxjs/toolkit";

const initialStoreOperationsState = {
  listLoading: false,
  actionsLoading: false,
  lastError: null,
  totalOpens: 0,
  entitiesOpens: null,
  opensForEdit: undefined,
  totalCloses: 0,
  entitiesCloses: null,
  closesForEdit: undefined,
  totalHoliday: 0,
  entitiesHolidays: null,
  holidaysForEdit: undefined,
};
export const callTypes = {
  list: "list",
  action: "action",
};

export const storeOperationsSlice = createSlice({
  name: "storeOperations",
  initialState: initialStoreOperationsState,
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
  },
});
