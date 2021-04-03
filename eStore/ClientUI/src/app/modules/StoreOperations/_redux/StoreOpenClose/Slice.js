import { createSlice } from "@reduxjs/toolkit";

const initialStoreOperationsState = {
  listLoading: false,
  actionsLoading: false,
  lastError: null,
  totalOpens: 0,
  entitiesOpens: null,
  openForEdit: undefined,
  totalCloses: 0,
  entitiesCloses: null,
  closeForEdit: undefined,
  totalHoliday: 0,
  entitiesHolidays: null,
  holidayForEdit: undefined,
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

    //storeOpensById
    storeOpenFetched: (state, action) => {
      state.actionsLoading = false;
      state.openForEdit = action.payload.openForEdit;
      state.error = null;
    },
    // findAttendances
    storeOpensFetched: (state, action) => {
      const { totalCount, entities } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.entitiesOpens = entities;
      state.totalOpens = totalCount;
    },
    //storeOpensById
    storeCloseFetched: (state, action) => {
      state.actionsLoading = false;
      state.closeForEdit = action.payload.closeForEdit;
      state.error = null;
    },
    // findAttendances
    storeClosesFetched: (state, action) => {
      const { totalCount, entities } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.entitiesCloses = entities;
      state.totalCloses = totalCount;
    },
    //storeOpensById
    storeHolidayFetched: (state, action) => {
        state.actionsLoading = false;
        state.holidayForEdit = action.payload.holidayForEdit;
        state.error = null;
      },
      // findAttendances
      storeHolidaysFetched: (state, action) => {
        const { totalCount, entities } = action.payload;
        state.listLoading = false;
        state.error = null;
        state.entitiesHolidays = entities;
        state.totalHolidays = totalCount;
      },

  }, //End of Reduers
});
