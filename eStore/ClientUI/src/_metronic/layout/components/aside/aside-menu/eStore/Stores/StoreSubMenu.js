/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../../../_helpers";

export default function StoreSubMenuList({ layoutProps }) {
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
          "/react-bootstrap",
          true
        )}`}
        aria-haspopup="true"
        data-menu-toggle="hover"
      >
        <NavLink className="menu-link menu-toggle" to="/react-bootstrap">
          <span className="svg-icon menu-icon">
            <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Box2.svg")} />
          </span>
          <span className="menu-text">Store Opertaions</span>
          <i className="menu-arrow" />
        </NavLink>
        <div className="menu-submenu ">
          <ul className="menu-subnav">
            <ul className="menu-subnav">
              <li className="menu-item  menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">Holiday</span>
                </span>
              </li>

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/alert"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/react-bootstrap/alert">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Openning</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/badge"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/react-bootstrap/badge">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Closing</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/breadcrumb"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/react-bootstrap/breadcrumb">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">End of Days</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/buttons"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/react-bootstrap/buttons">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Month End</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/react-bootstrap/button-group"
                )}`}
                aria-haspopup="true"
              >
                <NavLink
                  className="menu-link"
                  to="/react-bootstrap/button-group"
                >
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Store Closed</span>
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
