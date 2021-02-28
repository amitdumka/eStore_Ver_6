/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";
import ExpenseMenu from "./eStore/Accounting/Accouting-menu";
// import ApplicationMenu from "./metronic/Application-Menu";
// import ComponentsMenu  from "./metronic/ComponentMenu";
// import ErrorPageMenu from './metronic/ErrorPageMenu';
import TailoringMenu from "./eStore/Tailoring/TailoringMenu";
import PayrollMenu from "./eStore/Payroll/PayrollMenu";
import StoreMenu from "./eStore/Stores/StoreMenu";
//import StoreSubMenuList from "./eStore/Stores/StoreSubMenu";


export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
          "menu-item-active"} menu-item-open menu-item-not-hightlighted`
      : "";
  };

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/dashboard">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
            </span>
            <span className="menu-text">Dashboard</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}
        {/*Amit Kumar Addtion */}
        
        <li
          className={`menu-item ${getMenuItemActive("/counter", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/counter">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
            </span>
            <span className="menu-text">Counter</span>
          </NavLink>
        </li>

        {/*Amit Kumar end */}

        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/builder", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/builder">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")} />
            </span>
            <span className="menu-text">Layout Builder</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}
        <ExpenseMenu/>
        <TailoringMenu/>
        <PayrollMenu />
        <StoreMenu/>
        {/* Components */}
        {/* <ComponentsMenu /> */}
        {/* Applications */}
        {/* <ApplicationMenu /> */}
        {/* <ErrorPageMenu/> */}

       
        {/*end::1 Level*/}
      </ul>

      {/* end::Menu Nav */}
    </>
  );
}
