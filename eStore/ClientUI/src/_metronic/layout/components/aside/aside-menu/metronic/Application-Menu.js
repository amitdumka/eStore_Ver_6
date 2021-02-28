/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../../_helpers";

export default function ApplicationMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
          "menu-item-active"} menu-item-open menu-item-not-hightlighted`
      : "";
  };
  return (
    <>
      {/* Applications */}
      {/* begin::section */}
      <li className="menu-section ">
        <h4 className="menu-text">Applications</h4>
        <i className="menu-icon flaticon-more-v2"></i>
      </li>
      {/* end:: section */}

      {/* Sale */}
      {/*begin::1 Level*/}
      <li
        className={`menu-item menu-item-submenu ${getMenuItemActive(
          "/e-commerce",
          true
        )}`}
        aria-haspopup="true"
        data-menu-toggle="hover"
      >
        <NavLink className="menu-link menu-toggle" to="/e-commerce">
          <span className="svg-icon menu-icon">
            <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Bag2.svg")} />
          </span>
          <span className="menu-text">Sales</span>
        </NavLink>
        <div className="menu-submenu">
          <i className="menu-arrow" />
          <ul className="menu-subnav">
            <li className="menu-item menu-item-parent" aria-haspopup="true">
              <span className="menu-link">
                <span className="menu-text">Sale</span>
              </span>
            </li>
            {/*begin::2 Level*/}
            <li
              className={`menu-item ${getMenuItemActive(
                "/e-commerce/customers"
              )}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to="/e-commerce/customers">
                <i className="menu-bullet menu-bullet-dot">
                  <span />
                </i>
                <span className="menu-text">Customers</span>
              </NavLink>
            </li>
            {/*end::2 Level*/}
            {/*begin::2 Level*/}
            <li
              className={`menu-item ${getMenuItemActive(
                "/e-commerce/customers"
              )}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to="/e-commerce/customers">
                <i className="menu-bullet menu-bullet-dot">
                  <span />
                </i>
                <span className="menu-text">Daily Sale</span>
              </NavLink>
            </li>
            {/*end::2 Level*/}
            {/*begin::2 Level*/}
            <li
              className={`menu-item ${getMenuItemActive(
                "/e-commerce/customers"
              )}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to="/e-commerce/customers">
                <i className="menu-bullet menu-bullet-dot">
                  <span />
                </i>
                <span className="menu-text">Regular Invoice</span>
              </NavLink>
            </li>
            {/*end::2 Level*/}
            {/*begin::2 Level*/}
            <li
              className={`menu-item ${getMenuItemActive(
                "/e-commerce/customers"
              )}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to="/e-commerce/customers">
                <i className="menu-bullet menu-bullet-dot">
                  <span />
                </i>
                <span className="menu-text">Online Sale</span>
              </NavLink>
            </li>
            {/*end::2 Level*/}
            {/*begin::2 Level*/}
            <li
              className={`menu-item ${getMenuItemActive(
                "/e-commerce/customers"
              )}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to="/e-commerce/customers">
                <i className="menu-bullet menu-bullet-dot">
                  <span />
                </i>
                <span className="menu-text">Online Sale Return</span>
              </NavLink>
            </li>
            {/*end::2 Level*/}
            {/*begin::2 Level*/}
            <li
              className={`menu-item ${getMenuItemActive(
                "/e-commerce/customers"
              )}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to="/e-commerce/customers">
                <i className="menu-bullet menu-bullet-dot">
                  <span />
                </i>
                <span className="menu-text">Online Vendor</span>
              </NavLink>
            </li>
            {/*end::2 Level*/}
            
            
            {/*begin::2 Level*/}
            <li
              className={`menu-item ${getMenuItemActive(
                "/e-commerce/products"
              )}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to="/e-commerce/products">
                <i className="menu-bullet menu-bullet-dot">
                  <span />
                </i>
                <span className="menu-text">Products</span>
              </NavLink>
            </li>
            {/*end::2 Level*/}
          </ul>
        </div>
      </li>
      {/*end::1 Level*/}
           {/* Purchase */}
      {/*begin::1 Level*/}
      <li
        className={`menu-item menu-item-submenu ${getMenuItemActive(
          "/e-commerce",
          true
        )}`}
        aria-haspopup="true"
        data-menu-toggle="hover"
      >
        <NavLink className="menu-link menu-toggle" to="/e-commerce">
          <span className="svg-icon menu-icon">
            <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Bag2.svg")} />
          </span>
          <span className="menu-text">Purchase</span>
        </NavLink>
        <div className="menu-submenu">
          <i className="menu-arrow" />
          <ul className="menu-subnav">
            <li className="menu-item menu-item-parent" aria-haspopup="true">
              <span className="menu-link">
                <span className="menu-text">Purchase</span>
              </span>
            </li>
            {/*begin::2 Level*/}
            <li
              className={`menu-item ${getMenuItemActive(
                "/e-commerce/customers"
              )}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to="/e-commerce/customers">
                <i className="menu-bullet menu-bullet-dot">
                  <span />
                </i>
                <span className="menu-text">Purchase Invoice</span>
              </NavLink>
            </li>
            {/*end::2 Level*/}
            {/*begin::2 Level*/}
            <li
              className={`menu-item ${getMenuItemActive(
                "/e-commerce/customers"
              )}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to="/e-commerce/customers">
                <i className="menu-bullet menu-bullet-dot">
                  <span />
                </i>
                <span className="menu-text">Purchase Return</span>
              </NavLink>
            </li>
            {/*end::2 Level*/}
            {/*begin::2 Level*/}
            <li
              className={`menu-item ${getMenuItemActive(
                "/e-commerce/customers"
              )}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to="/e-commerce/customers">
                <i className="menu-bullet menu-bullet-dot">
                  <span />
                </i>
                <span className="menu-text">Stock</span>
              </NavLink>
            </li>
            {/*end::2 Level*/}
            {/*begin::2 Level*/}
            <li
              className={`menu-item ${getMenuItemActive(
                "/e-commerce/customers"
              )}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to="/e-commerce/customers">
                <i className="menu-bullet menu-bullet-dot">
                  <span />
                </i>
                <span className="menu-text">Vendors</span>
              </NavLink>
            </li>
            {/*end::2 Level*/}
            {/*begin::2 Level*/}
            <li
              className={`menu-item ${getMenuItemActive(
                "/e-commerce/customers"
              )}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to="/e-commerce/customers">
                <i className="menu-bullet menu-bullet-dot">
                  <span />
                </i>
                <span className="menu-text">Stock Reports</span>
              </NavLink>
            </li>
            {/*end::2 Level*/}                     
            {/*begin::2 Level*/}
            <li
              className={`menu-item ${getMenuItemActive(
                "/e-commerce/products"
              )}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to="/e-commerce/products">
                <i className="menu-bullet menu-bullet-dot">
                  <span />
                </i>
                <span className="menu-text">Products</span>
              </NavLink>
            </li>
            {/*end::2 Level*/}
          </ul>
        </div>
      </li>
      {/*end::1 Level*/}


      {/*begin::1 Level*/}
      <li
        className={`menu-item ${getMenuItemActive("/user-profile", false)}`}
        aria-haspopup="true"
      >
        <NavLink className="menu-link" to="/user-profile">
          <span className="svg-icon menu-icon">
            <SVG
              src={toAbsoluteUrl("/media/svg/icons/Communication/Add-user.svg")}
            />
          </span>
          <span className="menu-text">User Profile</span>
        </NavLink>
      </li>
      {/*end::1 Level*/}
    </>
  );
}
