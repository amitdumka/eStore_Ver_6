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

//bankWithdrawal
//BankWithdrawal


// Validation schema
const BankWithdrawalEditSchema = Yup.object().shape({
  attDate: Yup.date().required("Date is required"),
  status: Yup.string().required("Status is required"),
  storeId: Yup.number().required("Store is required"),
});

export function EditForm({
  saveBankWithdrawal,
  bankWithdrawal,
  actionsLoading,
  onHide,bankList,
}) {

  
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={bankWithdrawal}
        validationSchema={BankWithdrawalEditSchema}
        onSubmit={(values) => {
          saveBankWithdrawal(values);
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
                  
                  {/* Bank */}
                  <div className="col-lg-4">
                    <Select
                      name="bankId"
                      placeholder="Bank"
                      label="Bank"
                    >
                      <option value="">Select Bank</option>
                      {bankList.map((item) => (
                        <option key={item.bankId} value={item.bankId}>
                          {item.bankName}
                        </option>
                      ))}
                    </Select>
                  </div>
                </div>
                <div className="form-group row">
                  {/* Date of BankWithdrawal */}
                  <div className="col-lg-4">
                    <DatePickerField
                      dateFormat="yyyy-MM-dd"
                      name="attDate"
                      label="On Date"
                    />
                  </div>
                  {/*  Father Name*/}
                  <div className="col-lg-4">
                    <Field
                      name="entryTime"
                      component={Input}
                      placeholder="Entry Time"
                      label="Entry Time"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  {/*  State Name*/}
                  <div className="col-lg-4">
                    <Field
                      name="remarks"
                      component={Input}
                      placeholder="Remarks"
                      label="Remarks"
                    />
                  </div>
                  {/* Tailoring Division */}
                  <div className="col-lg-4">
                    <Field name="isTailoring" type="checkbox" />
                    {} Tailoring Division
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
