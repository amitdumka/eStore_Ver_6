// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React from "react";
import { Modal } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Input,
  Select,
  DatePickerField,
} from "../../../../../../_metronic/_partials/controls";

//expense
//Expense

// Validation schema
const ExpenseEditSchema = Yup.object().shape({
  paymentDate: Yup.date().required("Date is required"),
  amount: Yup.number().integer().moreThan(0).positive().min(1).required("Amount is required"),
  employeeId: Yup.number().required("Employee is required"),
  salaryMonth: Yup.string().required("Salary Month is required"),
  payMode: Yup.number().required("Payment Mode is required"),
  details: Yup.string().required("Details is required"),
  salaryComponet: Yup.number().required("Salary Component is required"),
});

export function EditForm({
  saveExpense,
  expense,
  actionsLoading,
  onHide,
  employeeList,
}) {
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={expense}
        validationSchema={ExpenseEditSchema}
        onSubmit={(values) => {
          saveExpense(values);
        }}
      >
        {({ handleSubmit }) => (
          <>
            <Modal.Body className="overlay overlay-block cursor-default">
              {actionsLoading && (
                <div className="overlay-layer bg-transparent">
                  <div className="spinner spinner-lg spinner-success" />
                </div>
              )}
              <Form className="form form-label-right">
                <div className="form-group row">
                  
                   {/* Store */}
                   <div className="col-lg-4">
                    <Select name="storeId" label="Store">
                      <option value="1">Dumka</option>
                      <option value="2">Jamshedpur</option>
                    </Select>
                  </div>
                  
                  {/* Salary Component */}
                  <div className="col-lg-4">
                    <Select name="salaryComponet" label="Salary Component">
                      <option value="0">Net Salary</option>
                      <option value="1">Last Pcs</option>
                    </Select>
                  </div>
                  
                  {/* Email */}
                  <div className="col-lg-4">
                    <Select
                      name="employeeId"
                      placeholder="Employee"
                      label="Employee"
                    >
                      <option value="">Select Employee</option>
                      {employeeList.map((item) => (
                        <option key={item.employeeId} value={item.employeeId}>
                          {item.staffName}
                        </option>
                      ))}
                    </Select>
                  </div>
                </div>
               
                <div className="form-group row">
                  {/* Date of Expense */}
                  <div className="col-lg-4">
                    <DatePickerField
                      dateFormat="yyyy-MM-dd"
                      name="paymentDate"
                      label="On Date"
                    />
                  </div>
                  {/*  Father Name*/}
                  <div className="col-lg-4">
                    <Field
                      name="salaryMonth"
                      component={Input}
                      placeholder="Salary Month"
                      label="Salary Month"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  {/*  State Name*/}
                  <div className="col-lg-4">
                    <Field
                      name="amount"
                      component={Input}
                      placeholder="Amount"
                      label="Amount"
                    />
                  </div>
                 {/*  State Name*/}
                 <div className="col-lg-4">
                    <Field
                      name="details"
                      component={Input}
                      placeholder="Details"
                      label="Details"
                    />
                  </div>
                   {/* PayMode */}
                   <div className="col-lg-4">
                    <Select name="payMode" label="Salary payMode">
                      <option value="0">Cash</option>
                      <option value="1">Card</option>
                    </Select>
                  </div>
                 </div> 
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <button
                type="button"
                onClick={onHide}
                className="btn btn-light btn-elevate"
              >
                Cancel
              </button>
              <> </>
              <button
                type="submit"
                onClick={() => handleSubmit()}
                className="btn btn-primary btn-elevate"
              >
                Save
              </button>
            </Modal.Footer>
          </>
        )}
      </Formik>
    </>
  );
}
