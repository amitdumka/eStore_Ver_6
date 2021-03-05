import {all} from "redux-saga/effects";
import {combineReducers} from "redux";

import * as auth from "../app/modules/Auth/_redux/authRedux";
import {customersSlice} from "../app/modules/Stores/_redux/customers/customersSlice";
import {storesSlice} from "../app/modules/Stores/_redux/stores/Slice";
import {employeesSlice} from "../app/modules/Payrolls/_redux/employees/Slice";
import {attendancesSlice} from "../app/modules/Payrolls/_redux/attendances/Slice";

export const rootReducer = combineReducers({
  auth: auth.reducer,
  customers: customersSlice.reducer,
  employees: employeesSlice.reducer, 
  attendances: attendancesSlice.reducer,
  stores:storesSlice.reducer,
});

export function* rootSaga() {
  yield all([auth.saga()]);
}
