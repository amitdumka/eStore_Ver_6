import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";

import { DuesListsPage } from "./duesLists/DuesListsPage";
import {DueRecoveredPage} from "./dueRecovered/DueRecoveredPage";

import { LayoutSplashScreen, ContentRoute } from "../../../../_metronic/layout";

export default function DuesPage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from accounting root URL to /expense/expenses */
          <Redirect 
            exact={true}
            from="/due"
            to="/due/duesLists"
          />
        }
        <ContentRoute path="/due/duesLists" component={DuesListsPage}/>
        <ContentRoute path="/due/dueRecovered" component={DueRecoveredPage}/> 
        
      </Switch>
    </Suspense>
  );
}
