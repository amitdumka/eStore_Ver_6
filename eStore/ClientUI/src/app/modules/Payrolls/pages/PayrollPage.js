import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { EmployeesPage } from "./employees/EmployeesPage";
import { LayoutSplashScreen, ContentRoute } from "../../../../_metronic/layout";

export default function PayrollPage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from payroll root URL to /employees */
          <Redirect 
            exact={true}
            from="/payroll"
            to="/payroll/employees"
          />
        }
        {/* <ContentRoute path="/payroll/stores" component={StoresPage}/> */}
        <ContentRoute path="/payroll/employees" component={EmployeesPage} />
      </Switch>
    </Suspense>
  );
}
