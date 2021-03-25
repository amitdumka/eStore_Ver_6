/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
//import { Dropdown } from "react-bootstrap";
//import { DropdownCustomToggler, DropdownMenu3 } from "../../dropdowns";

export function EmpInfoWidget({ className, empInfo }) {
  return (
    <>
      <div className={`card card-custom ${className}`}>
        {/* Header */}
        <div className="card-header border-0">
          <h3 className="card-title font-weight-bolder text-dark">
            Employee(s)
          </h3>

          {/* <div className="card-toolbar">
            <Dropdown className="dropdown-inline" alignRight>
              <Dropdown.Toggle
                id="dropdown-toggle-top"
                as={DropdownCustomToggler}
              >
                <i className="ki ki-bold-more-ver" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                <DropdownMenu3 />
              </Dropdown.Menu>
            </Dropdown>
          </div>*/}
        </div> 

        {/* Body */}
        <div className="card-body pt-0">
          {empInfo &&
            empInfo.map((item) => (
              <div className="mb-6">
                <div className="d-flex align-items-center flex-grow-1">
                  <div className="d-flex flex-wrap align-items-center justify-content-between w-100">
                    <div className="d-flex flex-column align-items-right py-2 w-75">
                      <a
                        href="#"
                        className="text-dark-75 font-weight-bold text-hover-primary font-size-lg mb-1"
                      >
                        {item.name}
                      </a>

                      <span className="text-primary font-weight-bold font-size-lg">
                        Present/Absent : {item.presentDays} {}/ {}{" "}
                        {item.absentDays}{ "  "}
                        {item.isSalesman && (
                          <span className="text-success font-weight-bold">
                            Sale/Bill : {item.totalSale} {}/ {} {item.noOfBills}   
                            {"  "} Ratio : {item.ratio}                        
                          </span>
                          
                        )}
                      </span>
                    </div>
                    {item.present == "Present" && (
                      <span className="label label-lg label-light-primary label-inline font-weight-bold py-4">
                        {item.present}
                      </span>
                    )}
                    {item.present == "Absent" && (
                      <span className="label label-lg label-light-danger label-inline font-weight-bold py-4">
                        {item.present}
                      </span>
                    )}
                    {item.present == "Half Day Leave" && (
                      <span className="label label-lg label-light-warning label-inline font-weight-bold py-4">
                        {item.present}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
