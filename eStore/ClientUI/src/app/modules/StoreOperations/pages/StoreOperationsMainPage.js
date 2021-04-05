import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { StoreOperationsPage } from "./StoreOperations/StoreOperationsPage";
import { LayoutSplashScreen, ContentRoute } from "../../../../_metronic/layout";

export default function StoreOperationsMainPage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from payroll root URL to /employees */
          <Redirect
            exact={true}
            from="/storeOperations"
            to="/storeOperations/opens"
          />
        }
        <ContentRoute path="/storeOperations/open" component={StoreOperationsPage} />
        
      </Switch>
    </Suspense>
  );
}
