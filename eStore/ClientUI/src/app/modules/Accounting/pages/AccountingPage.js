import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { ExpensesPage } from "./expenses/ExpensesPage";
import {PaymentsPage} from "./payments/PaymentsPage";
//import {SalaryPaymentsPage} from "./salaryPayments/SalaryPaymentsPage";
import { LayoutSplashScreen, ContentRoute } from "../../../../_metronic/layout";

export default function AccountingPage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from acctouning root URL to /expense/expenses */
          <Redirect 
            exact={true}
            from="/accounting"
            to="/accounting/expense/expenses"
          />
        }
        {/* <ContentRoute path="/payroll/stores" component={StoresPage}/> */}
        <ContentRoute path="/accounting/expense/expenses" component={ExpensesPage} />
        <ContentRoute path="/accounting/expense/payments" component={PaymentsPage} />
        {/* //<ContentRoute path="/payroll/employee/attendances" component={AttendancesPage} />
         */}
      </Switch>
    </Suspense>
  );
}
