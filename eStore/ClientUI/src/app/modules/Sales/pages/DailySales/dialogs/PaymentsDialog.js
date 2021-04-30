import React, { useState, useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../../../_redux/DailySales/Actions";
import * as cActions from "../../../../_redux/Actions";
import { useUIContext } from "../UIContext";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Input,
  Select,
  DatePickerField,
} from "../../../../../../_metronic/_partials/controls";
import {ModalProgressBar} from "../../../../../../_metronic/_partials/controls";


export default function PaymentsDialog({ id, show, onHide, payMode }) {
  const uiContext = useUIContext();
  const uiProps = useMemo(() => {
    return {
      initDailySale: uiContext.initData,
    };
  }, [uiContext]);

  // DailySales Redux state
  const dispatch = useDispatch();
  const [curPayMode, setCurPayMode] = useState(0);

  const {
    actionsLoading,
    dailySaleForEdit,
    payModes,
    paymentForEdit,
  } = useSelector(
    (state) => ({
      actionsLoading: state.dailySales.actionsLoading,
      paymentForEdit: state.dailySales.paymentForEdit,
      dailySaleForEdit: state.dailySales.dailySaleForEdit,
      payModes: state.commonTypes.payModes,
    }),
    shallowEqual
  );

  useEffect(() => {
    // server call for getting DailySale by id
    dispatch(actions.fetchDailySale(id));
    dispatch(actions.fetchDailySale(id)); //Payment
    dispatch(cActions.fetchEnumValue("payMode"));
  }, [id, dispatch]);

  dailySaleForEdit && setCurPayMode(dailySaleForEdit.payMode);
  
  const ShowEditForm=(payMode)=>{
//{ Cash, Card, RTGS, NEFT, IMPS, Wallets, Cheques, DemandDraft, Points, Others, Coupons, MixPayments, UPI }
    switch (payMode) {
      case 1:break; //card
      case 2:break; //rtgs
      case 3:break; //rtgs neft
      case 4:break; //rtgs imps
      case 6:break; //cheques
      case 7:break; // dd
      case 8:break; //points
      case 9:break; //others
      case 10:break; //Coupons
      case 11:break; //MixPayments
      case 5: break; //wallets
      case 12:break; //UPI

      default:
        break;
    }  
  };
  return (
    
    <Modal
      size="lg"
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {/* <DialogHeader id={id} />
      <EditForm
        actionsLoading={actionsLoading}
        onHide={onHide}
        payModes={payModes}
      /> */}
        <ShowEditForm payMode={curPayMode} />
    </Modal>
  );
}

export function DialogHeader({ id }) {
  // DailySales Redux state
  const { dailySaleForEdit, actionsLoading, paymentForEdit } = useSelector(
    (state) => ({
      dailySaleForEdit: state.dailySales.dailySaleForEdit,
      paymentForEdit: state.dailySales.paymentForEdit,
      actionsLoading: state.dailySales.actionsLoading,
    }),
    shallowEqual
  );

  const [title, setTitle] = useState("");
  // Title
  useEffect(() => {
    let _title = id ? "" : "New Payment";
    if (dailySaleForEdit && _title == "New Payment") {
      _title = _title + `  For Sale Inv: ${dailySaleForEdit.invNo}`;
    }
    if (dailySaleForEdit && paymentForEdit && id) {
      _title = `Payment for Sale '${dailySaleForEdit.invNo}'`;
    }

    setTitle(_title);
    // eslint-disable-next-line
  }, [dailySaleForEdit, actionsLoading, paymentForEdit]);


  

  return (
    <>
      {actionsLoading && <ModalProgressBar />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">{title}</Modal.Title>
      </Modal.Header>
    </>
  );
}

export function EditForm({
  actionsLoading,
  payment,
  onHide,
  payModes,
  saveData,
}) {
  // Validation schema
  const PaymentEditSchema = Yup.object().shape({
    saleDate: Yup.date().required("Date is required"),
    amount: Yup.number()
      .integer()
      .moreThan(0)
      .positive()
      .min(1)
      .required("Amount is required"),
    salesmanId: Yup.number()
      .moreThan(0)
      .required("Salesman is required"),
    invNo: Yup.string().required("Invoice No is required"),
    payMode: Yup.number().required("Payment Mode is required"),
    cashAmount: Yup.number()
      .integer()
      .moreThan(0)
      .positive()
      .min(1)
      .required("Cash Amount is required"),
    remarks: Yup.string().required("DailySale details is required"),
   
  });

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={payment}
        validationSchema={PaymentEditSchema}
        onSubmit={(values) => {
          saveData(values);
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
                  {/* Date of DailySale */}
                  <div className="col-lg-4">
                    <DatePickerField
                      dateFormat="yyyy-MM-dd"
                      name="saleDate"
                      label="Date"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  {/*  particulars Name*/}
                  <div className="col-lg-4">
                    <Field
                      name="invNo"
                      component={Input}
                      placeholder="Invoice No"
                      label="Invoice No"
                      disabled={true}
                    />
                  </div>
                  {/*  particulars Name*/}
                  <div className="col-lg-4">
                    <Field
                      name="amount"
                      component={Input}
                      placeholder="Amount"
                      label="Amount"
                      disabled={true}
                    />
                  </div>
                  {/* PayMode */}
                  <div className="col-lg-4">
                    <Select name="payMode" label="Payment Mode">
                      {payModes &&
                        payModes.map((item) => (
                          <option key={item.value} value={item.value}>
                            {item.name}
                          </option>
                        ))}
                    </Select>
                  </div>
                </div>
                <div className="form-group row">
                  {/*  Paid To Name*/}
                  <div className="col-lg-4">
                    <Field
                      name="cashAmount"
                      component={Input}
                      placeholder="Cash Amount"
                      label="Cash Amount"
                    />
                  </div>
                  {/*  State Name*/}
                  <div className="col-lg-4">
                    <Field
                      name="remarks"
                      component={Input}
                      placeholder="Remarks"
                      label="Remarks"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  {/*  State Name*/}
                  <div className="col-lg-4">
                    <Field name="isDue" type="checkbox" /> Due
                    <span className="text-danger ml-3 mr-3">
                      <Field name="isSaleReturn" type="checkbox" /> Sales Return
                    </span>
                  </div>
                  <div className="col-lg-4">
                    <Field name="isManualBill" type="checkbox" /> Manual Bill
                    <span className="text-primary ml-3 mr-3">
                      <Field name="isTailoringBill" type="checkbox" /> Tailoring{" "}
                    </span>
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

export function BankPaymentForm({
  actionsLoading,
  payment,
  onHide,
  payModes,
  saveData,
}) {
  const PaymentEditSchema = Yup.object().shape({
    amount: Yup.number()
      .integer()
      .moreThan(0)
      .positive()
      .min(1)
      .required("Amount is required"),
    remarks: Yup.string().required("DailySale details is required"),
    referenceNumber: Yup.string().required("Reference Number  is required"),
   
  });
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={payment}
        validationSchema={PaymentEditSchema}
        onSubmit={(values) => {
          saveData(values);
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
                  {/* Date of DailySale */}
                  <div className="col-lg-4">
                    <label className="">On Date {payment.saleDate}</label>
                  </div>
                  {/* Invoice No */}
                  <div className="col-lg-4">
                    <label className="">Invoice No {payment.invNo}</label>
                  </div>
                  {/* Payment Mode */}
                  <div className="col-lg-4">
                    <label className="">Payment Mode {payment.payMode}</label>
                  </div>
                </div>

                <div className="form-group row">
                  {/* PayMode */}
                  <div className="col-lg-4">
                    <Select name="payMode" label="Payment Mode">
                      {payModes &&
                        payModes.map((item) => (
                          <option key={item.value} value={item.value}>
                            {item.name}
                          </option>
                        ))}
                    </Select>
                  </div>
                  {/*  particulars Name*/}
                  <div className="col-lg-4">
                    <Field
                      name="amount"
                      component={Input}
                      placeholder="Amount"
                      label="Amount"
                      disabled={true}
                    />
                  </div>
                  {/*  particulars Name*/}
                  <div className="col-lg-4">
                    <Field
                      name="referenceNumber"
                      component={Input}
                      placeholder="ReferenceNumber"
                      label="ReferenceNumber"
                      disabled={true}
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

export function CouponPaymentForm({
  actionsLoading,
  payment,
  onHide,
  payModes,
  saveData,
}) {
  const PaymentEditSchema = Yup.object().shape({
    amount: Yup.number()
      .integer()
      .moreThan(0)
      .positive()
      .min(1)
      .required("Amount is required"),
    remarks: Yup.string().required("DailySale details is required"),
    couponNumber: Yup.string().required("Coupon Number is required"),
   
  });
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={payment}
        validationSchema={PaymentEditSchema}
        onSubmit={(values) => {
          saveData(values);
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
                  {/* Date of DailySale */}
                  <div className="col-lg-4">
                    <label className="">On Date {payment.saleDate}</label>
                  </div>
                  {/* Invoice No */}
                  <div className="col-lg-4">
                    <label className="">Invoice No {payment.invNo}</label>
                  </div>
                  {/* Payment Mode */}
                  <div className="col-lg-4">
                    <label className="">Payment Mode {payment.payMode}</label>
                  </div>
                </div>

                <div className="form-group row">
                  {/* PayMode */}
                  <div className="col-lg-4">
                    <Select name="payMode" label="Payment Mode">
                      {payModes &&
                        payModes.map((item) => (
                          <option key={item.value} value={item.value}>
                            {item.name}
                          </option>
                        ))}
                    </Select>
                  </div>
                  {/*  particulars Name*/}
                  <div className="col-lg-4">
                    <Field
                      name="amount"
                      component={Input}
                      placeholder="Amount"
                      label="Amount"
                      disabled={true}
                    />
                  </div>
                  {/*  particulars Name*/}
                  <div className="col-lg-4">
                    <Field
                      name="couponNumber"
                      component={Input}
                      placeholder="CouponNumber"
                      label="CouponNumber"
                      disabled={true}
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

export function PointRedeemedForm({
  actionsLoading,
  payment,
  onHide,
  payModes,
  saveData,
}) {
  const PaymentEditSchema = Yup.object().shape({
    amount: Yup.number()
      .integer()
      .moreThan(0)
      .positive()
      .min(1)
      .required("Amount is required"),
    remarks: Yup.string().required("DailySale details is required"),
    customerMobileNumber: Yup.string().required(
      "Customer Mobile Number  is required"
    ),
   
  });
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={payment}
        validationSchema={PaymentEditSchema}
        onSubmit={(values) => {
          saveData(values);
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
                  {/* Date of DailySale */}
                  <div className="col-lg-4">
                    <label className="">On Date {payment.saleDate}</label>
                  </div>
                  {/* Invoice No */}
                  <div className="col-lg-4">
                    <label className="">Invoice No {payment.invNo}</label>
                  </div>
                  {/* Payment Mode */}
                  <div className="col-lg-4">
                    <label className="">Payment Mode {payment.payMode}</label>
                  </div>
                </div>

                <div className="form-group row">
                  {/* PayMode */}
                  <div className="col-lg-4">
                    <Select name="payMode" label="Payment Mode">
                      {payModes &&
                        payModes.map((item) => (
                          <option key={item.value} value={item.value}>
                            {item.name}
                          </option>
                        ))}
                    </Select>
                  </div>
                  {/*  particulars Name*/}
                  <div className="col-lg-4">
                    <Field
                      name="amount"
                      component={Input}
                      placeholder="Amount"
                      label="Amount"
                      disabled={true}
                    />
                  </div>
                  {/*  particulars Name*/}
                  <div className="col-lg-4">
                    <Field
                      name="customerMobileNumber"
                      component={Input}
                      placeholder="Customer Mobile Number"
                      label="Customer Mobile Number"
                      disabled={true}
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
export function WalletPaymentForm({
  actionsLoading,
  payment,
  onHide,
  payModes,
  saveData,
}) {
  const PaymentEditSchema = Yup.object().shape({
    walletType: Yup.number().required("Wallet Type is required"),
    amount: Yup.number()
      .integer()
      .moreThan(0)
      .positive()
      .min(1)
      .required("Amount is required"),
    remarks: Yup.string().required("DailySale details is required"),
    customerMobileNoRef: Yup.string().required(
      "Customer Mobile Number with ref is  is required"
    ),
   
  });
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={payment}
        validationSchema={PaymentEditSchema}
        onSubmit={(values) => {
          saveData(values);
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
                  {/* Date of DailySale */}
                  <div className="col-lg-4">
                    <label className="">On Date {payment.saleDate}</label>
                  </div>
                  {/* Invoice No */}
                  <div className="col-lg-4">
                    <label className="">Invoice No {payment.invNo}</label>
                  </div>
                  {/* Payment Mode */}
                  <div className="col-lg-4">
                    <label className="">Payment Mode {payment.payMode}</label>
                  </div>
                </div>

                <div className="form-group row">
                  {/* PayMode */}
                  <div className="col-lg-4">
                    <Select name="payMode" label="Payment Mode">
                      {payModes &&
                        payModes.map((item) => (
                          <option key={item.value} value={item.value}>
                            {item.name}
                          </option>
                        ))}
                    </Select>
                  </div>
                  {/*  particulars Name*/}
                  <div className="col-lg-4">
                    <Field
                      name="amount"
                      component={Input}
                      placeholder="Amount"
                      label="Amount"
                      disabled={true}
                    />
                  </div>
                  {/*  particulars Name*/}
                  <div className="col-lg-4">
                    <Field
                      name="customerMobileNoRef"
                      component={Input}
                      placeholder="with reference Number"
                      label="Wallet Mobile Number"
                      disabled={true}
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

export function CardPaymentForm({
  actionsLoading,
  payment,
  onHide,
  payModes,
  saveData,
  edcList,cardModes
}) {
  const PaymentEditSchema = Yup.object().shape({
    amount: Yup.number()
      .integer()
      .moreThan(0)
      .positive()
      .min(1)
      .required("Amount is required"),
   eDCId: Yup.number().integer().moreThan(0).positive().required("Select EDC") , 
   cardTypes: Yup.number().positive().required("Select Card Types"), 
   onDate:Yup.date().required("Date is required"),
   cardEndingNumber:Yup.number().positive().required("Card Last Digit is required"),

  });
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={payment}
        validationSchema={PaymentEditSchema}
        onSubmit={(values) => {
          saveData(values);
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
                  {/* Date of DailySale */}
                  <div className="col-lg-4">
                    <label className="">On Date {payment.saleDate}</label>
                  </div>
                  {/* Invoice No */}
                  <div className="col-lg-4">
                    <label className="">Invoice No {payment.invNo}</label>
                  </div>
                  {/* Payment Mode */}
                  <div className="col-lg-4">
                    <label className="">Payment Mode {payment.payMode}</label>
                  </div>
                </div>

                <div className="form-group row">
                  {/* PayMode */}
                  <div className="col-lg-4">
                    <Select name="payMode" label="Payment Mode">
                      {payModes &&
                        payModes.map((item) => (
                          <option key={item.value} value={item.value}>
                            {item.name}
                          </option>
                        ))}
                    </Select>
                  </div>
                  {/*  particulars Name*/}
                  <div className="col-lg-4">
                    <Field
                      name="amount"
                      component={Input}
                      placeholder="Amount"
                      label="Amount"
                      disabled={true}
                    />
                  </div>
                  {/* Date of DailySale */}
                  <div className="col-lg-4">
                    <DatePickerField
                      dateFormat="yyyy-MM-dd"
                      name="onDate"
                      label="Payment Date"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  {/* PayMode */}
                  <div className="col-lg-4">
                    <Select name="EDCId" label="EDC">
                      {edcList &&
                        edcList.map((item) => (
                          <option key={item.eDCId} value={item.eDCId}>
                            {item.eDCName}
                          </option>
                        ))}
                    </Select>
                  </div>
                  {/* PayMode */}
                  <div className="col-lg-4">
                    <Select name="cardTypes" label="Card Types">
                      {cardModes &&
                        cardModes.map((item) => (
                          <option key={item.value} value={item.value}>
                            {item.name}
                          </option>
                        ))}
                    </Select>
                  </div>
                   {/*  particulars Name*/}
                   <div className="col-lg-4">
                    <Field
                      name="cardEndingNumber"
                      component={Input}
                      placeholder="Card Ending Number"
                      label="Card Ending Number"
                      disabled={true}
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


// public int EDCTranscationId { get; set; }
// public int EDCId { get; set; }
// public virtual EDC CardMachine { get; set; }
// [DataType(DataType.Currency), Column(TypeName = "money")]
// public decimal Amount { get; set; }
// [DataType(DataType.Date), DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
// public DateTime OnDate { get; set; }
// public string CardEndingNumber { get; set; }
// public CardMode CardTypes { get; set; }
// public string InvoiceNumber { get; set; }
// public int DailySaleId { get; set; }
// public virtual DailySale DailySale { get; set; }
// public string InvoiceNumber { get; set; }
// [DataType(DataType.Date), DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
// public DateTime OnDate { get; set; }
// [DataType(DataType.Currency), Column(TypeName = "money")]
// public decimal Amount { get; set; }
// public string Remarks { get; set; }
// public PayMode Mode { get; set; }
// public int StoreId { get; set; }
// public virtual Store Store { get; set; }
// public string UserId { get; set; }
// public bool IsReadOnly { get; set; }

const intitCard={
  eDCTranscationId:0, 
  eDCId:0, 
  eDC:null, 
  amount:0.0, 
  onDate: new Date(), 
  cardEndingNumber:"",
  cardTypes:0, 
  invoiceNumber:"", 
  storeId:1, 
  store: null,
  userId:"webUI", 
  isReadOnly: false,

}; 

const initBank={
  bankPaymentId:0,
  dailySaleId:0, 
  dailySale:null,
  invoiceNumber:null, 
  onDate: new Date(), 
  amount:0.0, remarks:null, mode:0,
  referenceNumber:null,
  storeId:1, 
  store: null,
  userId:"webUI", 
  isReadOnly: false,
 
  
}; 
const intitPoint={
  pointRedeemedId:0,
  dailySaleId:0, 
  dailySale:null,
  invoiceNumber:null, 
  onDate: new Date(), 
  amount:0.0, remarks:null, mode:0,
  customerMobileNumber:null,
  storeId:1, 
  store: null,
  userId:"webUI", 
  isReadOnly: false,
};
const initWallet={
  walletPaymentId:0,
  dailySaleId:0, 
  dailySale:null,
  invoiceNumber:null, 
  onDate: new Date(), 
  amount:0.0, remarks:null, mode:0,
  customerMobileNoRef:null,
  walletType:0,
  storeId:1, 
  store: null,
  userId:"webUI", 
  isReadOnly: false,
}; 
const initCoupon={
  couponPaymentId:0,
  dailySaleId:0, 
  dailySale:null,
  invoiceNumber:null, 
  onDate: new Date(), 
  amount:0.0, remarks:null, mode:0,
  couponNumber:null,
  storeId:1, 
  store: null,
  userId:"webUI", 
  isReadOnly: false,
}; 