/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../../../_helpers";

export default function ExpensesMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
          "menu-item-active"} menu-item-open menu-item-not-hightlighted`
      : "";
  };
  return (
    <>
      {/* Expenses-Menu */}
      {/*begin::1 Level*/}
      <li
        className={`menu-item menu-item-submenu ${getMenuItemActive(
          "/accouting/expense",
          true
        )}`}
        aria-haspopup="true"
        data-menu-toggle="hover"
      >
        <NavLink className="menu-link menu-toggle" to="/accouting/expense">
          <span className="svg-icon menu-icon">
            <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Cap-2.svg")} />
          </span>
          <span className="menu-text">Expenses</span>
          <i className="menu-arrow" />
        </NavLink>
        <div className="menu-submenu ">
          <i className="menu-arrow" />
          <ul className="menu-subnav">
            <li className="menu-item  menu-item-parent" aria-haspopup="true">
              <span className="menu-link">
                <span className="menu-text">Expenses</span>
              </span>
            </li>

            {/* Rent */}
            {/*begin::2 Level*/}
            <li
              className={`menu-item menu-item-submenu ${getMenuItemActive(
                "/accouting/expense/rents",
                true
              )}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
            >
              <NavLink
                className="menu-link menu-toggle"
                to="/accouting/expense/rents"
              >
                <i className="menu-bullet menu-bullet-dot">
                  <span />
                </i>
                <span className="menu-text">Rents</span>
                <i className="menu-arrow" />
              </NavLink>
              <div className="menu-submenu ">
                <i className="menu-arrow" />
                <ul className="menu-subnav">
                  {/*begin::3 Level*/}
                  <li
                    className={`menu-item  ${getMenuItemActive(
                      "/accouting/expense/rents/rentlocations"
                    )}`}
                    aria-haspopup="true"
                  >
                    <NavLink
                      className="menu-link"
                      to="/accouting/expense/rents/rentlocations"
                    >
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Rent Location</span>
                    </NavLink>
                  </li>
                  {/*end::3 Level*/}

                  {/*begin::3 Level*/}
                  <li
                    className={`menu-item ${getMenuItemActive(
                      "/accouting/expense/rents/rentpayments"
                    )}`}
                    aria-haspopup="true"
                  >
                    <NavLink
                      className="menu-link"
                      to="/accouting/expense/rents/rentpayments"
                    >
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Rent</span>
                    </NavLink>
                  </li>
                  {/*end::3 Level*/}
       
                </ul>
              </div>
            </li>
            {/*end::2 Level*/}

            {/* Electricity */}
            {/*begin::2 Level*/}
            <li
              className={`menu-item menu-item-submenu  ${getMenuItemActive(
                "/accouting/expense/electicity",
                true
              )}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
            >
              <NavLink
                className="menu-link menu-toggle"
                to="/accouting/expense/electicity"
              >
                <i className="menu-bullet menu-bullet-dot">
                  <span />
                </i>
                <span className="menu-text">Electricity</span>
                <i className="menu-arrow" />
              </NavLink>
              <div className="menu-submenu">
                <i className="menu-arrow" />
                <ul className="menu-subnav">
                  {/*begin::3 Level*/}
                  <li
                    className={`menu-item ${getMenuItemActive(
                      "/accouting/expense/electicity/connections"
                    )}`}
                    aria-haspopup="true"
                  >
                    <NavLink
                      className="menu-link"
                      to="/accouting/expense/electicity/connections"
                    >
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Connections</span>
                    </NavLink>
                  </li>
                  {/*end::3 Level*/}

                  {/*begin::3 Level*/}
                  <li
                    className={`menu-item ${getMenuItemActive(
                      "/accouting/expense/electicity/bills"
                    )}`}
                    aria-haspopup="true"
                  >
                    <NavLink
                      className="menu-link"
                      to="/accouting/expense/electicity/bills"
                    >
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Bills</span>
                    </NavLink>
                  </li>
                  {/*end::3 Level*/}

                  {/*begin::3 Level*/}
                  <li
                    className={`menu-item ${getMenuItemActive(
                      "/accouting/expense/electicity/ebilpayments"
                    )}`}
                    aria-haspopup="true"
                  >
                    <NavLink
                      className="menu-link"
                      to="/accouting/expense/electicity/ebilpayments"
                    >
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Payments</span>
                    </NavLink>
                  </li>
                  {/*end::3 Level*/}

                    
                  {/*end::3 Level*/}
                </ul>
              </div>
            </li>
            {/*end::2 Level*/}

            {/* Surfaces */}
            {/*begin::2 Level*/}
            <li
              className={`menu-item menu-item-submenu ${getMenuItemActive(
                "/accouting/expense",
                true
              )}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
            >
              <NavLink
                className="menu-link menu-toggle"
                to="/accouting/expense"
              >
                <i className="menu-bullet menu-bullet-dot">
                  <span />
                </i>
                <span className="menu-text">Payments</span>
                <i className="menu-arrow" />
              </NavLink>
              <div className="menu-submenu">
                <i className="menu-arrow" />
                <ul className="menu-subnav">
                  {/*begin::3 Level*/}
                  <li
                    className={`menu-item ${getMenuItemActive(
                      "/accouting/expense/payments"
                    )}`}
                    aria-haspopup="true"
                  >
                    <NavLink
                      className="menu-link"
                      to="/accouting/expense/payments"
                    >
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Payments Voucher</span>
                    </NavLink>
                  </li>
                  {/*end::3 Level*/}

                  {/*begin::3 Level*/}
                  <li
                    className={`menu-item ${getMenuItemActive(
                      "/accouting/expense/cashpayments"
                    )}`}
                    aria-haspopup="true"
                  >
                    <NavLink
                      className="menu-link"
                      to="/accouting/expense/cashpayments"
                    >
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Cash Payments</span>
                    </NavLink>
                  </li>
                  {/*end::3 Level*/}

                  {/*begin::3 Level*/}
                  <li
                    className={`menu-item ${getMenuItemActive(
                      "/accouting/expense/expenses"
                    )}`}
                    aria-haspopup="true"
                  >
                    <NavLink
                      className="menu-link"
                      to="/accouting/expense/expenses"
                    >
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Expense Voucher</span>
                    </NavLink>
                  </li>
                  {/*end::3 Level*/}

                  
                </ul>
              </div>
            </li>
            {/*end::2 Level*/}

            {/* Feedback */}
            {/*begin::2 Level*/}
            <li
              className={`menu-item menu-item-submenu ${getMenuItemActive(
                "/accouting/receipt",
                true
              )}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
            >
              <NavLink
                className="menu-link menu-toggle"
                to="/accouting/receipt"
              >
                <i className="menu-bullet menu-bullet-dot">
                  <span />
                </i>
                <span className="menu-text">Receipts</span>
                <i className="menu-arrow" />
              </NavLink>
              <div className="menu-submenu">
                <i className="menu-arrow" />
                <ul className="menu-subnav">
                  {/*begin::3 Level*/}
                  <li
                    className={`menu-item ${getMenuItemActive(
                      "/accouting/receipt/cashreceipts"
                    )}`}
                    aria-haspopup="true"
                  >
                    <NavLink
                      className="menu-link"
                      to="/accouting/receipt/cashreceipts"
                    >
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Cash Receipts</span>
                    </NavLink>
                  </li>
                  {/*end::3 Level*/}

                  {/*begin::3 Level*/}
                  <li
                    className={`menu-item ${getMenuItemActive(
                      "/accouting/expense/feedback/dialogs"
                    )}`}
                    aria-haspopup="true"
                  >
                    <NavLink
                      className="menu-link"
                      to="/accouting/expense/feedback/dialogs"
                    >
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Dialogs</span>
                    </NavLink>
                  </li>
                  {/*end::3 Level*/}

                  {/*begin::3 Level*/}
                  <li
                    className={`menu-item ${getMenuItemActive(
                      "/accouting/receipt/receipts"
                    )}`}
                    aria-haspopup="true"
                  >
                    <NavLink
                      className="menu-link"
                      to="/accouting/receipt/receipts"
                    >
                      <i className="menu-bullet menu-bullet-dot">
                        <span />
                      </i>
                      <span className="menu-text">Receipts Voucher</span>
                    </NavLink>
                  </li>
                  {/*end::3 Level*/}
                </ul>
              </div>
            </li>
            {/*end::2 Level*/}
          </ul>
        </div>
      </li>
      {/*end::1 Level*/}
    </>
  );
}
