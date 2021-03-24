/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_helpers";
import {
  Table,
  TableRow,
  TableCell,
  TablePagination,
  TableFooter,
  TableHead,
  TableBody,
} from "@material-ui/core";

export function OverDueTablesWidget({ className, overDue }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const rCount = overDue.length;
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rCount - page * rowsPerPage);

  return (
    <>
      {/* begin::Advance Table Widget 9 */}
      <div className={`card card-custom ${className}`}>
        {/* begin::Header */}
        <div className="card-header border-0 py-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label font-weight-bolder text-dark">
              Delivery Over Due
            </span>
            <span className="text-muted mt-3 font-weight-bold font-size-sm">
              Total Over Due: {rCount}
            </span>
          </h3>
          <div className="card-toolbar">
            <a
              href="/tailoring/booking"
              className="btn btn-info font-weight-bolder font-size-sm mr-3"
            >
              Booking
            </a>
            <a
              href="/tailoring/delivery"
              className="btn btn-danger font-weight-bolder font-size-sm"
            >
              Delivery
            </a>
          </div>
        </div>
        {/* end::Header */}

        {/* begin::Body */}
        <div className="card-body pt-0 pb-3">
          <div className="tab-content">
            {/* begin::Table */}
            <div className="table-responsive">
              <Table className="table table-head-custom table-vertical-center table-head-bg table-borderless">
                <TableHead>
                  <tr className="text-left">
                    <th style={{ minWidth: "150px" }} className="pl-7">
                      <span className="text-dark-75">Customer</span>
                    </th>
                    <th style={{ minWidth: "50px" }}>Date</th>
                    <th style={{ minWidth: "50px" }}>Quantity</th>
                    <th style={{ minWidth: "50px" }}>Days</th>
                  </tr>
                </TableHead>
                <TableBody>
                  {overDue &&
                    Array.from(overDue)
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => (
                        <TableRow key={row.bookingId} className="text-left">
                          <TableCell className="pl-0 py-8">
                            <div className="d-flex align-items-center">
                              <div className="symbol symbol-50 symbol-light mr-4">
                                <span className="symbol-label">
                                  <SVG
                                    className="h-75 align-self-end"
                                    src={toAbsoluteUrl(
                                      "/media/svg/avatars/001-boy.svg"
                                    )}
                                  ></SVG>
                                </span>
                              </div>
                              <div>
                                <a
                                  href="#"
                                  className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                >
                                  {row.customerName}
                                </a>
                                <span className="text-muted font-weight-bold d-block">
                                  {row.slipNo}
                                </span>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell style={{ minWidth: "50px" }}>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              {row.delveryDate}
                            </span>
                            <span className="text-muted font-weight-bold">
                              {row.bookingDate}
                            </span>
                          </TableCell>
                          <TableCell style={{ minWidth: "50px" }}>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              {row.quantity}
                            </span>
                          </TableCell>
                          <TableCell style={{ minWidth: "50px" }}>
                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                              {row.noDays}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 42 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                <TableFooter>
                  <TablePagination
                    rowsPerPageOptions={[5, 7, 12]}
                    component="div"
                    count={rCount}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                  />
                </TableFooter>
              </Table>
            </div>
            {/* end::Table */}
          </div>
        </div>
        {/* end::Body */}
      </div>
      {/* end::Advance Table Widget 9 */}
    </>
  );
}
