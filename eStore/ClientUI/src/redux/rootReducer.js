import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

import * as auth from "../app/modules/Auth/_redux/authRedux";
import { customersSlice } from "../app/modules/Stores/_redux/customers/customersSlice";
import { storesSlice } from "../app/modules/Stores/_redux/stores/Slice";
import { employeesSlice } from "../app/modules/Payrolls/_redux/employees/Slice";
import { attendancesSlice } from "../app/modules/Payrolls/_redux/attendances/Slice";
import { salaryPaymentsSlice } from "../app/modules/Payrolls/_redux/salaryPayments/Slice";
//Expense system and Accounting
import { expensesSlice } from "../app/modules/Accounting/_redux/expenses/Slice";
import { paymentsSlice } from "../app/modules/Accounting/_redux/payments/Slice";
import { receiptsSlice } from "../app/modules/Accounting/_redux/receipts/Slice";
import { cashReceiptsSlice } from "../app/modules/Accounting/_redux/cashReceipts/Slice";

import { cashPaymentsSlice } from "../app/modules/Accounting/_redux/cashPayments/Slice";

import { banksSlice } from "../app/modules/Banking/_redux/banks/Slice";
import { bankAccountsSlice } from "../app/modules/Banking/_redux/bankAccounts/Slice";
import { bankDepositsSlice } from "../app/modules/Banking/_redux/bankDeposits/Slice";
import { bankWithdrawalsSlice } from "../app/modules/Banking/_redux/bankWithdrawals/Slice";
import {ledgerTypesSlice} from "../app/modules/legders/_redux/ledgerTypes/Slice";
import {partiesSlice} from "../app/modules/legders/_redux/parties/Slice";
import {purchaseTaxesSlice} from "../app/modules/Taxes/_redux/purchaseTaxes/Slice";
import {saleTaxesSlice} from "../app/modules/Taxes/_redux/saleTaxes/Slice";
import {duesListsSlice} from "../app/modules/Dues/_redux/duesLists/Slice";
import {dueRecoveredsSlice} from "../app/modules/Dues/_redux/dueRecovereds/Slice";

export const rootReducer = combineReducers({
  auth: auth.reducer,
  ledgerTypes: ledgerTypesSlice.reducer,
  customers: customersSlice.reducer,
  employees: employeesSlice.reducer,
  attendances: attendancesSlice.reducer,
  stores: storesSlice.reducer,
  salaryPayments: salaryPaymentsSlice.reducer,
  payments: paymentsSlice.reducer,
  expenses: expensesSlice.reducer,
  receipts: receiptsSlice.reducer,
  cashReceipts: cashReceiptsSlice.reducer,
  cashPayments: cashPaymentsSlice.reducer,
  banks: banksSlice.reducer,
  bankAccounts: bankAccountsSlice.reducer,
  bankDeposits: bankDepositsSlice.reducer,
  bankWithdrawals: bankWithdrawalsSlice.reducer,
  parties: partiesSlice.reducer,
  saleTaxes: saleTaxesSlice.reducer,
  purchaseTaxes: purchaseTaxesSlice.reducer, 
  duesLists: duesListsSlice.reducer,
  dueRecovereds: dueRecoveredsSlice.reducer,

});

export function* rootSaga() {
  yield all([auth.saga()]);
}
