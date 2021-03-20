import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";

import { BanksPage } from "./banks/BanksPage";
import {BankAccountsPage} from "./bankAccounts/BankAccountsPage";


import { LayoutSplashScreen, ContentRoute } from "../../../../_metronic/layout";

export default function RentMainPage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from payroll root URL to /employees */
          <Redirect
            exact={true}
            from="/renting"
            to="/renting/rents"
          />
        }
        <ContentRoute path="/renting/rents" component={BanksPage} />
        <ContentRoute path="/renting/rentedLocations"  component={BankAccountsPage}/>
        
      </Switch>
    </Suspense>
  );
}
