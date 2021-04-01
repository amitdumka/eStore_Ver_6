// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React from "react";
import { Modal } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Input, Select,DatePickerField } from "../../../../../../_metronic/_partials/controls";

//billpayment
//BillPayment

// Validation schema
const BillPaymentEditSchema = Yup.object().shape({
  onDate: Yup.date().required("Date is required"),
  period: Yup.string().required("Period is required"),
  billpaymentType: Yup.number().required("Select BillPayment Type , is required"),
  billpaymentedLocationId: Yup.number().moreThan(0).required("Select BillPayment Location , is required"),
  mode:Yup.number().required("Select mode is required"),
  amount: Yup.number().moreThan(0).required("Amount is required"),
  remarks:Yup.string().required("Remarks is required"), 
  paymentDetails: Yup.string().required("Payment Details is required")
});

export function EditForm({ saveBillPayment, billpayment, actionsLoading, onHide, locationList, billpaymentTypes, payModes }) {
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={billpayment}
        validationSchema={BillPaymentEditSchema}
        onSubmit={(values) => {
          saveBillPayment(values);
        }}
      >
        {({ handleSubmit }) => (
          <>
            <Modal.Body className="overlay overlay-block cursor-default">
              {actionsLoading && (
                <div className="overlay-layer bg-transpabillpayment">
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

                  {/* Email */}
                  <div className="col-lg-4">
                    <Select name="billpaymentedLocationId" placeholder="Location" label="Location">
                      <option value="">Select Location</option>
                      {locationList.map((item) => (
                        <option key={item.billpaymentedLocationId} value={item.billpaymentedLocationId}>
                          {item.placeName}
                        </option>
                      ))}
                    </Select>
                  </div>
                  {/* Email */}
                  <div className="col-lg-4">
                    <Select name="billpaymentType" placeholder="BillPayment Type" label="BillPayment Type">
                      <option value="">Select Type</option>
                      {billpaymentTypes.map((item) => (
                        <option key={item.value} value={item.value}>
                          {item.name}
                        </option>
                      ))}
                    </Select>
                  </div>
                </div>
               
                <div className="form-group row">
                  
                   {/* Date of BankDeposit */}
                   <div className="col-lg-4">
                    <DatePickerField
                      dateFormat="yyyy-MM-dd"
                      name="onDate"
                      label="On Date"
                    />
                  </div>

                  {/*  Father Name*/}
                  <div className="col-lg-4">
                    <Field
                      name="period"
                      component={Input}
                      placeholder="Period"
                      label="Period"
                    />
                  </div>
                   {/*  State Name*/}
                   <div className="col-lg-4">
                    <Field
                      name="amount"
                      component={Input}
                      placeholder="Amount"
                      label="Amount"
                    />
                  </div>
                </div>
                <div className="form-group row">
                 
                  {/* Email */}
                  <div className="col-lg-4">
                    <Select name="mode" placeholder="Mode" label="Mode">
                      <option value="">Select Mode</option>
                      {payModes.map((item) => (
                        <option key={item.value} value={item.value}>
                          {item.name}
                        </option>
                      ))}
                    </Select>
                  </div>
                   {/*  Father Name*/}
                   <div className="col-lg-4">
                    <Field
                      name="paymentDetails"
                      component={Input}
                      placeholder="Payment Details"
                      label="Payment Details"
                    />
                  </div>
                   {/*  Father Name*/}
                   <div className="col-lg-4">
                    <Field
                      name="remarks"
                      component={Input}
                      placeholder="Remarks"
                      label="Remarks"
                    />
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
