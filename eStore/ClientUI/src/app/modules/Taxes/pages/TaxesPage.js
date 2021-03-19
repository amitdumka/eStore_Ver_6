import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../../../../_metronic/layout";
import {SaleTaxesPage} from "./saleTaxes/SaleTaxesPage";
import {PurchaseTaxesPage} from "./purchaseTaxes/PurchaseTaxesPage";

export default function TaxesPage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from payroll root URL to /employees */
          <Redirect exact={true} from="/taxes" to="/taxes/saleTaxes" />
        }
        <ContentRoute path="/taxes/saleTaxes" component={SaleTaxesPage} />
        <ContentRoute path="/taxes/purchaseTaxes" component={PurchaseTaxesPage}/>
       
      </Switch>
    </Suspense>
  );
}
