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

// Validation schema
const CustomerEditSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Firstname is required"),
  lastName: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Lastname is required"),
  mobileNo: Yup.string()
    .required("Mobile No  is required"),
  city: Yup.string().required("City is required"),
});

export function CustomerEditForm({
  saveCustomer,
  customer,
  actionsLoading,
  onHide,
}) {
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={customer}
        validationSchema={CustomerEditSchema}
        onSubmit={(values) => {
          saveCustomer(values);
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
                  {/* First Name */}
                  <div className="col-lg-4">
                    <Field
                      name="firstName"
                      component={Input}
                      placeholder="First Name"
                      label="First Name"
                    />
                  </div>
                  {/* Last Name */}
                  <div className="col-lg-4">
                    <Field
                      name="lastName"
                      component={Input}
                      placeholder="Last Name"
                      label="Last Name"
                    />
                  </div>
                  {/* Login */}
                  <div className="col-lg-4">
                    <Field
                      name="mobileNo"
                      component={Input}
                      placeholder="Phone No"
                      label="Phone No"
                    />
                  </div>
                </div>
                {/* Email */}
                <div className="form-group row">
                  <div className="col-lg-4">
                    <Field 
                      name="city"
                      component={Input}
                      placeholder="City"
                      label="City"
                    />
                  </div>
                  {/* Date of birth */}
                  <div className="col-lg-4">
                    <DatePickerField
                    dateFormat="yyyy-mm-ddT00:00:00"
                      name="dateOfBirth"
                      label="Date of Birth"
                    />
                  </div>
                  {/* IP Address */}
                  <div className="col-lg-4">
                    <Field
                      name="age"
                      component={Input}
                      placeholder="Age"
                      label="Age"
                     
                    />
                  </div>
                </div>
                <div className="form-group row">
                  {/* Gender */}
                  <div className="col-lg-4">
                    <Select name="gender" label="Gender">
                     <option value="0">Male</option>
                     <option value="1">Female</option>
                      
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
