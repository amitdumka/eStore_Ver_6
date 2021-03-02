import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import * as auth from "../../_redux/login/authRedux";
import { login } from "../../_redux/login/authCrud";


const initialValues = {
    email: "user",
    password: "user@1234",
  };

  
  export default function LogInMe(){
    const [loading, setLoading] = useState(false);
    const LoginSchema = Yup.object().shape({
        userName: Yup.string()
          .min(4, "Minimum 4 symbols")
          .max(30, "Maximum 30 symbols")
          .required(
            "username"
          ),
        password: Yup.string()
          .min(8, "Minimum 8 symbols")
          .max(25, "Maximum 25 symbols")
          .required(
            "password"
          ),
      });
      const formik = useFormik({
        initialValues,
        validationSchema: LoginSchema,
        onSubmit: (values, { setStatus, setSubmitting }) => {
          setTimeout(() => {
            login(values.userName, values.password)
              .then(({ data: { accessToken } }) => {
              })
              .catch(() => {
                setSubmitting(false);
                
              });
          }, 1000);
        },
      });

      return (
        <div className="login-form login-signin" id="kt_login_signin_form">
          {/* begin::Head */}
          <div className="text-center mb-10 mb-lg-20">
            <h3 className="font-size-h1">
              <FormattedMessage id="AUTH.LOGIN.TITLE" />
            </h3>
            <p className="text-muted font-weight-bold">
              Enter your username and password
            </p>
          </div>
          {/* end::Head */}
    
          {/*begin::Form*/}
          <form
            onSubmit={formik.handleSubmit}
            className="form fv-plugins-bootstrap fv-plugins-framework"
          >
    
            <div className="form-group fv-plugins-icon-container">
              <input
                placeholder="UserName"
                type="text"
                className={`form-control form-control-solid h-auto py-5 px-6`}
                name="userName"
                {...formik.getFieldProps("userName")}
              />
              {formik.touched.userName && formik.errors.userName ? (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">{formik.errors.userName}</div>
                </div>
              ) : null}
            </div>
            <div className="form-group fv-plugins-icon-container">
              <input
                placeholder="Password"
                type="password"
                className={`form-control form-control-solid h-auto py-5 px-6`}
                name="password"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">{formik.errors.password}</div>
                </div>
              ) : null}
            </div>
            <div className="form-group d-flex flex-wrap justify-content-between align-items-center">
              <Link
                to="/auth/forgot-password"
                className="text-dark-50 text-hover-primary my-3 mr-2"
                id="kt_login_forgot"
              >
                <FormattedMessage id="AUTH.GENERAL.FORGOT_BUTTON" />
              </Link>
              <button
                id="kt_login_signin_submit"
                type="submit"
                disabled={formik.isSubmitting}
                className={`btn btn-primary font-weight-bold px-9 py-4 my-3`}
              >
                <span>Sign In</span>
                {loading && <span className="ml-3 spinner spinner-white"></span>}
              </button>
            </div>
          </form>
          {/*end::Form*/}
        </div>
      );
    
  }