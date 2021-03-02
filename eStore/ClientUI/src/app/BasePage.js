import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { MyPage } from "./pages/MyPage";
import { DashboardPage } from "./pages/DashboardPage";
import Counter from "../core/Counter";

//import FetchData from "../core/FetchData";
//import AuthorizeRoute from '../core/api-authorization/AuthorizeRoute';
//import ApiAuthorizationRoutes from '../core/api-authorization/ApiAuthorizationRoutes';
//import { ApplicationPaths } from '../core/api-authorization/ApiAuthorizationConstants';



// const GoogleMaterialPage = lazy(() =>
//     import("./modules/GoogleMaterialExamples/GoogleMaterialPage")
// );
// const ReactBootstrapPage = lazy(() =>
//     import("./modules/ReactBootstrapExamples/ReactBootstrapPage")
// );
const ECommercePage = lazy(() =>
    import("./modules/ECommerce/pages/eCommercePage")
);
// const UserProfilepage = lazy(() =>
//     import("./modules/UserProfile/UserProfilePage")
// );
 //const StoreMainPage = lazy(() =>import("./modules/Admin/pages/StoreMainPage"));
const LPage=lazy(()=>import("./modules/Admin/pages/simplelogin/slogin") )


export default function BasePage() {
    // useEffect(() => {
    //   console.log('Base page');
    // }, []) // [] - is required if you need only one call
    // https://reactjs.org/docs/hooks-reference.html#useeffect

    return (
        <Suspense fallback={<LayoutSplashScreen />}>
            <Switch>
                {
                    /* Redirect from root URL to /dashboard. */
                    <Redirect exact from="/" to="/dashboard" />
                }
                <ContentRoute path="/dashboard" component={DashboardPage} />
                <ContentRoute path="/builder" component={BuilderPage} />
                <ContentRoute path="/my-page" component={MyPage} />
                {/* <Route path="/google-material" component={GoogleMaterialPage} />
                <Route path="/react-bootstrap" component={ReactBootstrapPage} />
                <Route path="/e-commerce" component={ECommercePage} />
                <Route path="/user-profile" component={UserProfilepage} />
                <ContentRoute path="/counter" component={Counter} />
                <Route path="/admin-p" component={AdminPage}/> */}
                <Route path="/e-commerce" component={ECommercePage} />
                <Route path="/slogin" component={LPage}/>
                <Redirect to="error/error-v1" />
                
            
            </Switch>
        </Suspense>
    );
}
