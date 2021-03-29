// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React ,{useState} from "react";
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
    sItem:Yup.number().moreThan(0).required("Item is required"), 
    sQty: Yup.number().moreThan(0).required("Qty is required"),
    sPrice: Yup.number().moreThan(0).required("Price is required")
});

export function EditForm({
  saveBooking,
  booking,
  actionsLoading,
  onHide,
  storeList,
}) {
  
  // const {itemList:{sItem, sQty,sPrice}, setItemList}=useState([]);
  
  const handleItemAdd = () => {
  
  };
 const  handleInputChange=(event)=> {
    // const target = event.target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    // const name = target.name;

    // setItemList({
    //   [name]: value
    // });
    // console.log(name+":"+value);
  };
  const columns = [
    { field: 'id', headerName: 'SN', width: 60 },
    { field: 'shirtQty', headerName: 'Shirt', type: 'number',width: 90 },
    { field: 'shirtPrice', headerName: 'Price', type: 'number',width: 90 },
    { field: 'pantQty',headerName: 'Pant',type: 'number',width: 90},
    { field: 'pantPrice',headerName: 'Price',type: 'number',width: 90},
    { field: 'coatQty', headerName: 'Coat',type: 'number', width: 90 },
    { field: 'coatPrice', headerName: 'Price',type: 'number', width: 90 },
    { field: 'bundiQty',headerName: 'Bundi ',type: 'number',width: 90},
    { field: 'bundiPrice',headerName: 'Price',type: 'number',width: 90},
    { field: 'kurtaQty', headerName: 'Kurta',type: 'number', width: 90 },
    { field: 'kurtaPrice', headerName: 'Price',type: 'number', width: 90 },
    { field: 'othersQty',headerName: 'Other',type: 'number',width: 90},
    { field: 'othersPrice',headerName: 'Price',type: 'number',width: 90},  
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
      othersQty: 0,
      othersPrice: 0.0
    }
   
  ];
  

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
                    <Select name="storeId" label="Store" >
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
                    <Select name="sItem" label="Item" onChange={handleInputChange}>
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
                    <Field onChange={handleInputChange}
                      name="sQty"
                      component={Input}
                      placeholder="Quantity"
                      label="Quantity"
                    />
                  </div>
                  <div className="col-lg-4">
                    <Field onChange={handleInputChange}
                      name="sPrice"
                      component={Input}
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
                <DataGrid rows={rows} columns={columns}  />
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
