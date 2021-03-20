import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../../../../_metronic/layout";
import {BookingsPage} from "./Booking/BookingsPage";
import {DeliveriesPage} from "./Delivery/DeliveriesPage";

export default function TailoringPage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from payroll root URL to /employees */
          <Redirect exact={true} from="/tailoring" to="/tailoring/booking" />
        }
        <ContentRoute path="/tailoring/booking" component={BookingsPage} />
        <ContentRoute path="/tailoring/delivery" component={DeliveriesPage}/>
       
      </Switch>
    </Suspense>
  );
}
