/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React, { useState, useEffect } from "react";
import { Redirect, Switch, Route, useHistory, Link } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { Layout } from "../_metronic/layout";
import BasePage from "./BasePage";
import { Logout, AuthPage } from "./modules/Auth";
import ErrorsPage from "./modules/ErrorsExamples/ErrorsPage";
//import { useOktaAuth } from "@okta/okta-react";
//import CustomLoginComponent from "./modules/okta/Login";
//import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
//import CustomLoginComponent from "./modules/okta/Login";
//import Messages from "./modules/okta/Messages";




export function Routes() {

  // const { authState, authService } = useOktaAuth();
  // const [userInfo, setUserInfo] = useState(null);

  // useEffect(() => {
  //   if (!authState.isAuthenticated) {
  //     // When user isn't authenticated, forget any user info
  //     setUserInfo(null);
  //   } else {
  //     authService.getUser().then((info) => {
  //       setUserInfo(info);
  //       //console.log(info);
  //     });
  //   }
  // }, [authState, authService]); // Update if authState changes

  const { isAuthorized } = useSelector(
    ({ auth }) => ({
      isAuthorized: true//authState.isAuthenticated, //auth.user != null,
      //userInfo:userInfo,
    }),
    shallowEqual
  );
 
  // const login = async () => {
  //   authService.login("/");
  // };
  // const logout = async () => {
  //   authService.logout("/");
  // };

  // if (authState.isPending) {
  //   return <div>Loading...</div>;
  // }

  return (
    <Switch>
      {!isAuthorized ? (
        /*Render auth page when user at `/auth` and not authorized.*/
        <Route>
          {/* <CustomLoginComponent /> */}
          <AuthPage/>
        </Route>
      ) : (
        /*Otherwise redirect to root page (`/`)*/
        <Redirect from="/login" to="/" />
      )}

      <Route path="/error" component={ErrorsPage} />
      <Route path="/logout" component={Logout} />
      {/* <Route path="/implicit/callback" component={LoginCallback} />
      <Route path="/login" component={CustomLoginComponent} /> */}

      {!isAuthorized ? (
        /*Redirect to `/auth` when user is not authorized*/
        <Redirect to="/login" />
      ) : (
        <Layout>
          <BasePage />
        </Layout>
      )}
    </Switch>
  );
}
