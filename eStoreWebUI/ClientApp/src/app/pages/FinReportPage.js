import {
  Select,
  Table,
  TableCell,
  TableRow,
  MenuItem,
  Checkbox,FormControl
} from "@material-ui/core";
import React, { useState } from "react";
import { useSubheader } from "../../_metronic/layout";
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
  Notice,
} from "../../_metronic/_partials/controls";
import { usePromiseTracker } from "react-promise-tracker";

import axios from "axios";

export const FinReportPage = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Fin Year Report");

  return (
    <>
      {" "}
      <RequestCard />{" "}
    </>
  );
};

export const RequestCard = () => {
  const curYear = new Date().getFullYear() + 1;
  const [yearArray, setYearArray] = useState([]);
  const [finYear, setFinYear] = useState("");
  const [repoMode, setRepoMode] = useState(2);
  const [store, setStore] = useState(1);
  const [refreshData,setRefreshData] = useState(false);
  let count = 0;
  for (let index = 2015; index < curYear; index++) {
    yearArray[count++] = "" + index + "-" + (index + 1);
  }
  const handleYearChange = (event) => {
    setFinYear(event.target.value);
    console.log(finYear); 
    console.log(event.target.value);
  };
  const handleModeChange = (event) => {
    setRepoMode(event.target.value);
  };
  const handleRefreshChange = (event) => {
    setRefreshData(event.target.checked);
  };
  const handleStoreChange = (event) => {
    setStore(event.target.value);
  };
  const handleButton = (event) => {
    const yrs = finYear.split("-");
    console.log(yrs);
    const finReq = {
        storeId: store,
        startYead: parseInt(yrs[0]),
      endYear: parseInt(yrs[1]),
      startMonth: 0,
      endMonth: 0,
      mode: parseInt(repoMode),
      forcedRefresh: refreshData, 
      isPdf:true
    };
    console.log(finReq);
    GetReport(finReq);
  };

  return (
    <Card>
      <CardHeader title="Financial  Year Report Download">
        <CardHeaderToolbar></CardHeaderToolbar>
      </CardHeader>
      <CardBody>
      {/* {loading ? <LoadingSpinner /> : <ResultsTable results={data} />} */}
        <Table>
          <TableRow>
            <TableCell className="text-primary">Store</TableCell>
            <TableCell>
              <Select value={store} onChange={handleStoreChange} id="storeIdSelect">
                <MenuItem value={1}>Dumka</MenuItem>
                <MenuItem value={2}>Jamshedpur</MenuItem>
              </Select>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-danger">Financial Year</TableCell>
            <TableCell>
              <Select value={finYear} displayEmpty onChange={handleYearChange} id="finYearSelect">
              <MenuItem value="" disabled>Select Fin Year</MenuItem>
                {yearArray.map((item) => (
                  <MenuItem key={item} value={item}>{item}</MenuItem>
                ))}
              </Select>
            </TableCell>
            <TableCell className="text-info">Report</TableCell>
            <TableCell>
              <Select value={repoMode} onChange={handleModeChange} id="modeSelect">
                <MenuItem value={1}>Sale Data</MenuItem>
                <MenuItem value={2}>Salary Data</MenuItem>
                <MenuItem value={3}>Cash Book</MenuItem>
                <MenuItem value={4}>Expenses Data</MenuItem>
                <MenuItem value={5}>Payment Data</MenuItem>
                <MenuItem value={6}>Receipts Data</MenuItem>
                <MenuItem value={7}>Bank Data</MenuItem>
                <MenuItem value={8} disabled>Purchase Data</MenuItem>
              </Select>
            </TableCell>
            <TableCell className="text-danger">Refreshed Data</TableCell>
            <TableCell>
              <Checkbox
                value={refreshData}
                onChange={handleRefreshChange}
                id="refreshDataCB"
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />{" "}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleButton}
              >
                Generate Report
              </button>
            </TableCell>
          </TableRow>
        </Table>
        <label className="text-danger">*Note: Kindly wait for few mins to open PDF file in new windows!.</label>
      </CardBody>
    </Card>
  );
};

export const API_URL = "https://www.aprajitaretails.in/api/Reports";
export async function GetReport(FinReportDto) {
  
  await axios
    .post(`${API_URL}/FinReport`, FinReportDto, {
      method: "POST",
      responseType: "blob", //Force to receive data in a Blob Format
      headers: { "Content-Type": "application/json; charset=utf-8" },
    })
    .then((response) => {
      
      //Create a Blob from the PDF Stream
      const file = new Blob([response.data], { type: "application/pdf" });
      //Build a URL from the file
      const fileURL = URL.createObjectURL(file);
      //Open the URL on new Window
      window.open(fileURL);
    })
    .catch((error) => {
      console.log(error);
    });
}
