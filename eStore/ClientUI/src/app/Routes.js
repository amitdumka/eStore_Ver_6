/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React from "react";
import { Redirect, Switch, Route, useHistory, Link } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { Layout } from "../_metronic/layout";
import BasePage from "./BasePage";
import { Logout, AuthPage } from "./modules/Auth";
import ErrorsPage from "./modules/ErrorsExamples/ErrorsPage";
import { useOktaAuth } from "@okta/okta-react";

export function Routes() {
  const {oktaAuth, authState } = useOktaAuth();
  if (authState.isPending) return null;

  const logout = async () => oktaAuth.signOut();

  const { isAuthorized } = useSelector(
    ({ auth }) => ({
      isAuthorized: authState.isAuthenticated,
    }),
    shallowEqual
  );

  return (
    <Switch>
      {!isAuthorized ? (
        /*Render auth page when user at `/auth` and not authorized.*/
        <Route>
          <AuthPage />
        </Route>
      ) : (
        /*Otherwise redirect to root page (`/`)*/
        <Redirect from="/auth" to="/" />
      )}

      <Route path="/error" component={ErrorsPage} />
      <Route path="/logout" component={logout} />

      {!isAuthorized ? (
        /*Redirect to `/auth` when user is not authorized*/
        <Redirect to="/auth/login" />
      ) : (
        <Layout>
          <BasePage />
        </Layout>
      )}
    </Switch>
  );
}

// export function Routes() {

//   const { isAuthorized } = useSelector(
//     ({ auth }) => ({
//       isAuthorized: true,//auth.user != null,
//     }),
//     shallowEqual
//   );

//   return (
//     <Switch>
//       {!isAuthorized ? (
//         /*Render auth page when user at `/auth` and not authorized.*/
//         <Route>
//           <AuthPage />
//         </Route>
//       ) : (
//         /*Otherwise redirect to root page (`/`)*/
//         <Redirect from="/auth" to="/" />
//       )}

//       <Route path="/error" component={ErrorsPage} />
//       <Route path="/logout" component={Logout} />

//       {!isAuthorized ? (
//         /*Redirect to `/auth` when user is not authorized*/
//         <Redirect to="/auth/login" />
//       ) : (
//         <Layout>
//           <BasePage />
//         </Layout>
//       )}
//     </Switch>
//   );
// }
