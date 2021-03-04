import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { CustomersPage } from "./customers/CustomersPage";
import {StoresPage} from "./stores/StoresPage";
//import { ProductsPage } from "./products/ProductsPage";
//import { ProductEdit } from "./products/product-edit/ProductEdit";
import { LayoutSplashScreen, ContentRoute } from "../../../../_metronic/layout";

export default function StoreMainPage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from eCommerce root URL to /customers */
          <Redirect 
            exact={true}
            from="/store"
            to="/store/stores"
          />
        }
        <ContentRoute path="/store/stores" component={StoresPage}/>
        <ContentRoute path="/store/customers" component={CustomersPage} />
      </Switch>
    </Suspense>
  );
}
