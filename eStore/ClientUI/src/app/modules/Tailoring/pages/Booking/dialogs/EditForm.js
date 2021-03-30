// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Input,
  Select,
  DatePickerField,
  Checkbox,
} from "../../../../../../_metronic/_partials/controls";
import { DataGrid } from "@material-ui/data-grid";


//booking
//Booking

// Validation schema
const BookingEditSchema = Yup.object().shape({
  taxName: Yup.string().required("Tax Name is required"),
  taxType: Yup.number().required("Tax Type   is required"),
  compositeRate: Yup.number()
    .moreThan(0)
    .required("Composite Rate is required"),
  item: Yup.number()
    .moreThan(0)
    .required("Item is required"),
  qty: Yup.number()
    .moreThan(0)
    .required("Qty is required"),
  price: Yup.number()
    .moreThan(0)
    .required("Price is required"),
});

export function EditForm({
  saveBooking,
  booking,
  actionsLoading,
  onHide,
  storeList,
}) {
  const [ item, setItem ] = useState(0);
  const [ qty, setQty ] = useState(0);
  const [ price, setPrice ] = useState(0);
  const columns = [
    { field: "id", headerName: "SN", width: 60 },
    { field: "shirtQty", headerName: "Shirt", type: "number", width: 90 },
    { field: "shirtPrice", headerName: "Price", type: "number", width: 90 },
    { field: "pantQty", headerName: "Pant", type: "number", width: 90 },
    { field: "pantPrice", headerName: "Price", type: "number", width: 90 },
    { field: "coatQty", headerName: "Coat", type: "number", width: 90 },
    { field: "coatPrice", headerName: "Price", type: "number", width: 90 },
    { field: "bundiQty", headerName: "Bundi ", type: "number", width: 90 },
    { field: "bundiPrice", headerName: "Price", type: "number", width: 90 },
    { field: "kurtaQty", headerName: "Kurta", type: "number", width: 90 },
    { field: "kurtaPrice", headerName: "Price", type: "number", width: 90 },
    { field: "otherqty", headerName: "Other", type: "number", width: 90 },
    { field: "otherprice", headerName: "Price", type: "number", width: 90 },
  ];
  const rows = [
    {
      id: 1,
      shirtQty: 0,
      shirtPrice: 0.0,
      pantQty: 0,
      pantPrice: 0.0,
      coatQty: 0,
      coatPrice: 0.0,
      kurtaQty: 0,
      kurtaPrice: 0.0,
      bundiQty: 0,
      bundiPrice: 0.0,
      otherqty: 0,
      otherprice: 0.0,
    },
  ];
const updateRowData=()=>{

  rows[0].shirtPrice=booking.shirtPrice;
  rows[0].pantPrice=booking.pantPrice;
  rows[0].coatPrice=booking.coatPrice;
  rows[0].kurtaPrice=booking.kurtaPrice;
  rows[0].bundiPrice=booking.bundiPrice;
  rows[0].othersPrice=booking.otherprice;

  rows[0].shirtQty=booking.shirtQty;
  rows[0].pantQty=booking.pantQty;
  rows[0].coatQty=booking.coatQty;
  rows[0].kurtaQty=booking.kurtaQty;
  rows[0].bundiQty=booking.bundiQty;
  rows[0].othersqty=booking.others;
  
}
  const handleItemAdd = () => {
    console.log(item+" "+qty+" "+price+" ");
    switch (item) {
      case "1":
        booking.shirtPrice = price;
        booking.shirtQty = qty;
        booking.totalAmount=booking.totalAmount+price;
        booking.totalQty=booking.totalQty+qty;
        updateRowData();
        break;
      case "2":
        booking.pantPrice = price;
        booking.pantQty = qty;
        booking.totalAmount=booking.totalAmount+price;
        booking.totalQty=booking.totalQty+qty;
        updateRowData();
        break;
      case "3":
        booking.coatPrice = price;
        booking.coatQty = qty;
        booking.totalAmount=booking.totalAmount+price;
        booking.totalQty=booking.totalQty+qty;
        updateRowData();
        break;
      case "4":
        booking.bundiPrice = price;
        booking.bundiQty = qty;
        booking.totalAmount=booking.totalAmount+price;
        booking.totalQty=booking.totalQty+qty;
        updateRowData();
        break;
      case "5":
        booking.kurtaPrice = price;
        booking.kurtaQty = qty;
        booking.totalAmount=booking.totalAmount+price;
        booking.totalQty=booking.totalQty+qty;
       updateRowData();
        break;
      case "6":
        booking.othersPrice = price;
        booking.others = qty;
        booking.totalAmount=booking.totalAmount+price;
        booking.totalQty=booking.totalQty+qty;
        updateRowData();
        break;
      default:
        console.log("Option Not Found");
    }
    console.log("Booking");
    console.log(booking);
    console.log(rows[0]);
  };
  // const handleInputChange = (event) => {
  //   const target = event.target;
  //   const value = target.type === "checkbox" ? target.checked : target.value;
  //   const name = target.name;
   
  //   switch (name) {
  //     case "qty":
  //       setQty(value);

  //       break;
  //     case "price":
  //       setPrice(value);
  //       break;
  //     case "item":
  //       setItem(value);
  //       //setItem(value);
  //       break;
  //     default:
  //       break;
  //   }

  //    console.log(name + ":" + value);
  //   console.log(item+" "+qty+" "+price+" ");
  // };
 
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={booking}
        validationSchema={BookingEditSchema}
        onSubmit={(values) => {
          saveBooking(values);
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
                  {/* Booking Date*/}
                  <div className="col-lg-4">
                    <DatePickerField
                      name="bookingDate"
                      placeholder="Booking Date"
                      label="Booking Date"
                    />
                  </div>
                  {/* Delivery Date Date*/}
                  <div className="col-lg-4">
                    <DatePickerField
                      name="deliveryDate"
                      placeholder="Delivery Date"
                      label="Delivery Date"
                    />
                  </div>
                  {/* Delivery Date Date*/}
                  <div className="col-lg-4">
                    <DatePickerField
                      name="tryDate"
                      placeholder="Trial Date"
                      label="             Trial Date  "
                    />
                  </div>
                </div>
                <div className="form-group row">
                  {/* Store */}
                  <div className="col-lg-4">
                    <Select name="storeId" label="Store">
                      {storeList &&
                        storeList.map((item) => (
                          <option key={item.storeId} value={item.storeId}>
                            {item.storeName}
                          </option>
                        ))}
                    </Select>
                  </div>
                  {/* Last Name */}
                  <div className="col-lg-4">
                    <Field
                      name="custName"
                      component={Input}
                      placeholder="Customer Name"
                      label="Customer Name"
                    />
                  </div>
                  {/* Last Name */}
                  <div className="col-lg-4">
                    <Field
                      name="bookingSlipNo"
                      component={Input}
                      placeholder="Booking Slip No"
                      label="Booking Slip"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  {/* Last Name */}
                  <div className="col-lg-4">
                    <Field
                      name="totalAmount"
                      component={Input}
                      placeholder="Total Amount"
                      label="Total Amount"
                    />
                  </div>
                  {/* Last Name */}
                  <div className="col-lg-4">
                    <Field
                      name="totalQty"
                      component={Input}
                      placeholder="Total Quantity"
                      label="Total Quantity"
                    />
                  </div>
                  <div className="col-lg-4">
                    Deliveried{" "}
                    <Checkbox name="isDelivered" label="Deliveried" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-12">Select/Add Tailoring Item</label>
                  <div className="col-lg-4">
                    <Select
                      name="item"
                      label="Item"
                      onChange={e=>{setItem(e.target.value);}}
                    >
                      <option>Select an Item</option>
                      <option value="1">Shirt</option>
                      <option value="2">Pant</option>
                      <option value="3">Suit</option>
                      <option value="4">Bundi</option>
                      <option value="5">Kurta</option>
                      <option value="6">Others</option>
                    </Select>
                  </div>
                  <div className="col-lg-4">
                    <Field
                      onChange={e=>{setQty(parseInt(e.target.value));}}
                      name="qty"
                      component={Input}
                      placeholder="Quantity"
                      label="Quantity"
                      type="number"
                    />
                  </div>
                  <div className="col-lg-4">
                    <Field
                      onChange={e=>{setPrice(parseInt(e.target.value));}}
                      name="price"
                      component={Input}
                      type="number"
                      placeholder="Amount"
                      label="Amount"
                    />
                    <button
                      type="button"
                      onClick={() => handleItemAdd()}
                      className="btn btn-light btn-elevate"
                    >
                      Add
                    </button>
                  </div>
                </div>

                <div style={{ height: 200, width: "100%" }}>
                  <DataGrid rows={rows} columns={columns} />
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
