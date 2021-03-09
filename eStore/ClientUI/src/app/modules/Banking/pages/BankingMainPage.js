import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { EmployeesPage } from "../../Payrolls/pages/employees/EmployeesPage";
import { LayoutSplashScreen, ContentRoute } from "../../../../_metronic/layout";

export default function BankingPage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from payroll root URL to /employees */
          <Redirect
            exact={true}
            from="/accounting/banking"
            to="/accounting/banking/banks"
          />
        }
        <ContentRoute path="/accounting/banking/banks" component={EmployeesPage} />
      </Switch>
    </Suspense>
  );
}
