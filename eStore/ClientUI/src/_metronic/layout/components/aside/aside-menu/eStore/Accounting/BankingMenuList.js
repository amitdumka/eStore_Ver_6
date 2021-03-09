/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../../../_helpers";

export default function BankingMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
          "menu-item-active"} menu-item-open menu-item-not-hightlighted`
      : "";
  };
  return (
    <>
      {/* Banking */}
      {/*begin::1 Level*/}
      <li
        className={`menu-item menu-item-submenu ${getMenuItemActive(
          "/accounting/banking",
          true
        )}`}
        aria-haspopup="true"
        data-menu-toggle="hover"
      >
        <NavLink className="menu-link menu-toggle" to="/accounting/banking">
          <span className="svg-icon menu-icon">
            <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Box2.svg")} />
          </span>
          <span className="menu-text">Banking</span>
          <i className="menu-arrow" />
        </NavLink>
        <div className="menu-submenu ">
          <ul className="menu-subnav">
            <ul className="menu-subnav">
              <li className="menu-item  menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">Banking</span>
                </span>
              </li>

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/accounting/banking/banks"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/accounting/banking/banks">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Banks</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/accounting/banking/accounts"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/accounting/banking/accounts">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Accounts</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/accounting/banking/deposits"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/accounting/banking/deposit">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Deposit</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/accounting/banking/withdrawl"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/accounting/banking/dithdrawl">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Withdrawl</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/accounting/banking/chequesLog"
                )}`}
                aria-haspopup="true"
              >
                <NavLink
                  className="menu-link"
                  to="/accounting/banking/chequesLog"
                >
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Cheque Logs</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/accounting/banking/chequesIssue"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/accounting/banking/chequesIssue">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Cheque Issue</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/accounting/banking/bankAccounts"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/accounting/banking/bankAccounts">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Bank Accounts</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/accounting/banking/accountSecurity"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/accounting/banking/accountSecurity">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Account Security</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}
            </ul>
          </ul>
        </div>
      </li>
      {/*end::1 Level*/}
    </>
  );
}
