import {all} from "redux-saga/effects";
import {combineReducers} from "redux";

import * as auth from "../app/modules/Auth/_redux/authRedux";
import {customersSlice} from "../app/modules/Stores/_redux/customers/customersSlice";
import {storesSlice} from "../app/modules/Stores/_redux/stores/Slice";
import {employeesSlice} from "../app/modules/Payrolls/_redux/employees/Slice";
import {attendancesSlice} from "../app/modules/Payrolls/_redux/attendances/Slice";
import {salaryPaymentsSlice} from "../app/modules/Payrolls/_redux/salaryPayments/Slice";
//Expense system and Accouting
import {expensesSlice} from "../app/modules/Accounting/_redux/expenses/Slice";

export const rootReducer = combineReducers({
  auth: auth.reducer,
  customers: customersSlice.reducer,
  employees: employeesSlice.reducer, 
  attendances: attendancesSlice.reducer,
  stores:storesSlice.reducer,
  salaryPayments: salaryPaymentsSlice.reducer,

  expenses:expensesSlice.reducer,
});

export function* rootSaga() {
  yield all([auth.saga()]);
}
