import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { TextField } from "@mui/material";
import axios from "axios";
import Box from "@mui/material/Box";

const VISIBLE_FIELDS = ["id", "sshPort", "ipAddress", "workerName", "username"];

const columns = [
  { field: "id", headerName: "ID", flex: 12.5 },
  {
    field: "name",
    headerName: "Name",
    flex: 12.5,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    flex: 12.5,
    editable: true,
  },
  {
    field: "foodType",
    headerName: "Food Type",
    flex: 12.5,
    editable: true,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    flex: 12.5,
    editable: true,
  },
  {
    field: "pickupLocation",
    headerName: "Pickup Location",
    flex: 12.5,
    editable: true,
  },
  {
    field: "pickupDate",
    headerName: "Pickup Date",
    flex: 12.5,
    editable: true,
  },
  {
    field: "mobileNo",
    headerName: "Mobile No",
    flex: 12.5,
    editable: true,
  },
];

export default function DataGridDemo() {
  const { data: demoData } = useDemoData({
    visibleFields: VISIBLE_FIELDS,
    rowLength: 10,
  });

  const [data, setData] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://dizzy-goat-pea-coat.cyclic.app/food/details")
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearch = (event) => {
    const keyword = event.target.value;
    const results = data.filter((row) =>
      Object.values(row).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(keyword.toLowerCase())
      )
    );
    setFilteredData(results);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TextField label="Search" variant="outlined" onChange={handleSearch} />
      <DataGrid
        rows={filteredData}
        autoHeight
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        slots={{ toolbar: GridToolbar }}
        style={{ marginTop: "16px" }}
      />
    </Box>
  );
}
