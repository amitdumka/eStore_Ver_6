/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../../../_helpers";

export default function PayRollMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
          "menu-item-active"} menu-item-open menu-item-not-hightlighted`
      : "";
  };
  return (
    <>
      <li className="menu-section ">
          <h4 className="menu-text">PayRoll</h4>
          <i className="menu-icon flaticon-more-v2"></i>
        </li>
      {/* Salary-Menu */}
      {/*begin::1 Level*/}
      <li
        className={`menu-item menu-item-submenu ${getMenuItemActive(
          "/payroll-menu",
          true
        )}`}
        aria-haspopup="true"
        data-menu-toggle="hover"
      >
        <NavLink className="menu-link menu-toggle" to="/payroll-menu">
          <span className="svg-icon menu-icon">
            <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Cap-2.svg")} />
          </span>
          <span className="menu-text">Salary</span>
          <i className="menu-arrow" />
        </NavLink>
        <div className="menu-submenu ">
          <i className="menu-arrow" />
          <ul className="menu-subnav">
            <li className="menu-item  menu-item-parent" aria-haspopup="true">
              <span className="menu-link">
                <span className="menu-text">Salary</span>
              </span>
            </li>
            {/**Menu Item Will Follow from Level 2 */}
            {/*begin::2 Level*/}
            <li
              className={`menu-item ${getMenuItemActive("/tailoring/booking")}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to="/tailoring/booking">
                <i className="menu-bullet menu-bullet-dot">
                  <span />
                </i>
                <span className="menu-text">PaySlip</span>
              </NavLink>
            </li>
            {/*end::2 Level*/}
            {/*begin::2 Level*/}
            <li
              className={`menu-item ${getMenuItemActive("/tailoring/delivery")}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to="/tailoring/delivery">
                <i className="menu-bullet menu-bullet-dot">
                  <span />
                </i>
                <span className="menu-text">Current Salary</span>
              </NavLink>
            </li>
            {/*end::2 Level*/}
            {/*begin::2 Level*/}
            <li
              className={`menu-item ${getMenuItemActive("/tailoring/pending")}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to="/tailoring/pending">
                <i className="menu-bullet menu-bullet-dot">
                  <span />
                </i>
                <span className="menu-text">Leaves </span>
              </NavLink>
            </li>
            {/*end::2 Level*/}
             {/*begin::2 Level*/}
             <li
              className={`menu-item ${getMenuItemActive("/tailoring/pending")}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to="/tailoring/pending">
                <i className="menu-bullet menu-bullet-dot">
                  <span />
                </i>
                <span className="menu-text">Receipts</span>
              </NavLink>
            </li>
            {/*end::2 Level*/}
            {/**end of Menu Item */}
          </ul>
        </div>
      </li>{" "}
      {/* Payroll-Menu */}
      {/*begin::1 Level*/}
      <li
        className={`menu-item menu-item-submenu ${getMenuItemActive(
          "/payroll-menu",
          true
        )}`}
        aria-haspopup="true"
        data-menu-toggle="hover"
      >
        <NavLink className="menu-link menu-toggle" to="/payroll-menu">
          <span className="svg-icon menu-icon">
            <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Cap-2.svg")} />
          </span>
          <span className="menu-text">Employee</span>
          <i className="menu-arrow" />
        </NavLink>
        <div className="menu-submenu ">
          <i className="menu-arrow" />
          <ul className="menu-subnav">
            <li className="menu-item  menu-item-parent" aria-haspopup="true">
              <span className="menu-link">
                <span className="menu-text">Employee</span>
              </span>
            </li>
            {/**Menu Item Will Follow from Level 2 */}
            {/*begin::2 Level*/}
            <li
              className={`menu-item ${getMenuItemActive("/tailoring/booking")}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to="/tailoring/booking">
                <i className="menu-bullet menu-bullet-dot">
                  <span />
                </i>
                <span className="menu-text">Employee</span>
              </NavLink>
            </li>
            {/*end::2 Level*/}
            {/*begin::2 Level*/}
            <li
              className={`menu-item ${getMenuItemActive("/tailoring/delivery")}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to="/tailoring/delivery">
                <i className="menu-bullet menu-bullet-dot">
                  <span />
                </i>
                <span className="menu-text">Attendance</span>
              </NavLink>
            </li>
            {/*end::2 Level*/}
            {/*begin::2 Level*/}
            <li
              className={`menu-item ${getMenuItemActive("/tailoring/pending")}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to="/tailoring/pending">
                <i className="menu-bullet menu-bullet-dot">
                  <span />
                </i>
                <span className="menu-text">Salary</span>
              </NavLink>
            </li>
            {/*end::2 Level*/}
             {/*begin::2 Level*/}
             <li
              className={`menu-item ${getMenuItemActive("/tailoring/pending")}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to="/tailoring/pending">
                <i className="menu-bullet menu-bullet-dot">
                  <span />
                </i>
                <span className="menu-text">Wellfare</span>
              </NavLink>
            </li>
            {/*end::2 Level*/}
            {/**end of Menu Item */}
          </ul>
        </div>
      </li>{" "}
      {/*End Of Start Tag*/}
      {/** Menu item List End here */}
    </>
  );
}
