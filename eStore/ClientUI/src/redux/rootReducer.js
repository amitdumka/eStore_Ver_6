import {all} from "redux-saga/effects";
import {combineReducers} from "redux";

import * as auth from "../app/modules/Auth/_redux/authRedux";
import {customersSlice} from "../app/modules/Stores/_redux/customers/customersSlice";
import {storesSlice} from "../app/modules/Stores/_redux/stores/Slice";
import {employeesSlice} from "../app/modules/Payrolls/_redux/employees/Slice";
import {attendancesSlice} from "../app/modules/Payrolls/_redux/attendances/Slice";
import {salaryPaymentsSlice} from "../app/modules/Payrolls/_redux/salaryPayments/Slice";
//Expense system and Accounting
import {expensesSlice} from "../app/modules/Accounting/_redux/expenses/Slice";
import {paymentsSlice} from "../app/modules/Accounting/_redux/payments/Slice";
import {receiptsSlice} from "../app/modules/Accounting/_redux/receipts/Slice";
import {cashReceiptsSlice} from "../app/modules/Accounting/_redux/cashReceipts/Slice";

import {cashPaymentsSlice} from "../app/modules/Accounting/_redux/cashPayments/Slice";

import {banksSlice} from "../app/modules/Banking/_redux/banks/Slice";



export const rootReducer = combineReducers({
  auth: auth.reducer,
  customers: customersSlice.reducer,
  employees: employeesSlice.reducer, 
  attendances: attendancesSlice.reducer,
  stores:storesSlice.reducer,
  salaryPayments: salaryPaymentsSlice.reducer,
  payments: paymentsSlice.reducer,
  expenses:expensesSlice.reducer,
  receipts: receiptsSlice.reducer,
  cashReceipts: cashReceiptsSlice.reducer,
  cashPayments: cashPaymentsSlice.reducer,
  banks:banksSlice.reducer,

});

export function* rootSaga() {
  yield all([auth.saga()]);
}
