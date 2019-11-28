import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";

const SearchResults = props => {
  const [open, setOpen] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [id, setId] = React.useState("");
  const [comments, setComments] = React.useState("");
  const [cIReport, setCIReport] = React.useState(false);
  const [category, setCategory] = React.useState("");

  const handleClickOpen = (rowId, cat) => {
    setOpen(true);
    setId(rowId);
    setCategory(cat);
  };

  const handleClickOpenDelete = rowId => {
    setOpenDelete(true);
    setId(rowId);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const updatecomment = e => {
    setComments(e.target.value);
  };

  const updateCIReport = e => {
    setCIReport(e.target.value);
  };

  const handleCloseProcess = (id, comments, cIReport) => {
    setOpen(false);
    props.handleUpdateComment(id, comments, cIReport);
  };

  const handleCloseDeleteProcess = id => {
    setOpenDelete(false);
    props.deleteRow(id);
  };

  // for filtering the keyed data
  const getReqSearchData = value => {
    return (
      value.category === props.searchData.customerType &&
      value.brand === props.searchData.searchBrand
    );
  };

  const { customerType } = props.searchData;
  let requiredSearchResult = props.searchResult.filter(
    getReqSearchData,
    props.searchData
  );

  let columns = [];

  customerType === "CANDI"
    ? (columns = [
        {
          Header: "ID",
          accessor: "Id",
          style: { textAlign: "center" },
          width: 100,
          maxWidth: 100,
          minWidth: 100
        },
        {
          Header: "Category",
          accessor: "category",
          style: { textAlign: "center" },
          width: 100,
          maxWidth: 100,
          minWidth: 100
        },
        {
          Header: "Brand",
          accessor: "brand",
          style: { textAlign: "center" },
          width: 100,
          maxWidth: 100,
          minWidth: 100
        },
        {
          Header: "Is C&I Report Needed",
          accessor: "negativeStatus",
          style: { textAlign: "center" },
          width: 150,
          maxWidth: 150,
          minWidth: 100
        },
        {
          Header: "Comments",
          accessor: "comments",
          style: { textAlign: "center" },
          width: 300,
          maxWidth: 400,
          minWidth: 200
        },
        {
          Header: "Updated ID",
          accessor: "updatedId",
          style: { textAlign: "center" },
          width: 100,
          maxWidth: 100,
          minWidth: 100
        },
        {
          Header: "Actions",
          style: { textAlign: "center" },
          Cell: cellProps => {
            return (
              <div>
                <button
                  style={{
                    backgroundColor: "red",
                    color: "#fefefe",
                    cursor: "pointer"
                  }}
                  onClick={() => {
                    //props.deleteRow(cellProps.original.Id);
                    handleClickOpenDelete(cellProps.original.Id);
                  }}
                >
                  Delete
                </button>
                <button
                  style={{
                    backgroundColor: "green",
                    color: "#fefefe",
                    marginLeft: 2,
                    cursor: "pointer"
                  }}
                  onClick={() => {
                    handleClickOpen(
                      cellProps.original.Id,
                      cellProps.original.category
                    );
                  }}
                >
                  Update
                </button>
              </div>
            );
          },
          sortable: false,
          filterable: false,
          width: 200,
          maxWidth: 200,
          minWidth: 200
        }
      ])
    : (columns = [
        {
          Header: "ID",
          accessor: "Id",
          style: { textAlign: "center" },
          width: 100,
          maxWidth: 100,
          minWidth: 100
        },
        {
          Header: "Category",
          accessor: "category",
          style: { textAlign: "center" },
          width: 100,
          maxWidth: 100,
          minWidth: 100
        },
        {
          Header: "Brand",
          accessor: "brand",
          style: { textAlign: "center" },
          width: 100,
          maxWidth: 100,
          minWidth: 100
        },
        {
          Header: "Comments",
          accessor: "comments",
          style: { textAlign: "center" },
          width: 300,
          maxWidth: 400,
          minWidth: 200
        },
        {
          Header: "Updated ID",
          accessor: "updatedId",
          style: { textAlign: "center" },
          width: 100,
          maxWidth: 100,
          minWidth: 100
        },
        {
          Header: "Actions",
          style: { textAlign: "center" },
          Cell: cellProps => {
            return (
              <div>
                <button
                  style={{
                    backgroundColor: "red",
                    color: "#fefefe",
                    cursor: "pointer"
                  }}
                  onClick={() => {
                    //props.deleteRow(cellProps.original.Id);
                    handleClickOpenDelete(cellProps.original.Id);
                  }}
                >
                  Delete
                </button>
                <button
                  style={{
                    backgroundColor: "green",
                    color: "#fefefe",
                    marginLeft: 2,
                    cursor: "pointer"
                  }}
                  onClick={() => {
                    handleClickOpen(
                      cellProps.original.Id,
                      cellProps.original.category
                    );
                  }}
                >
                  Update
                </button>
              </div>
            );
          },
          sortable: false,
          filterable: false,
          width: 200,
          maxWidth: 200,
          minWidth: 200
        }
      ]);

  return (
    <React.Fragment>
      <ReactTable
        columns={columns}
        data={requiredSearchResult}
        defaultPageSize={5}
      />

      <Dialog
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you really want to Delete?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseDelete} color="primary">
            Disagree
          </Button>
          <Button
            onClick={() => {
              handleCloseDeleteProcess(id);
            }}
            color="primary"
            autoFocus
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Update Comments</DialogTitle>
        <DialogContent>
          {category === "CANDI" ? (
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Is C and I Report Needed?
              </FormLabel>
              <RadioGroup
                aria-label="status"
                name="cIReport"
                value={cIReport}
                onChange={updateCIReport}
                row
              >
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="true"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="false"
                />
              </RadioGroup>
            </FormControl>
          ) : null}
          <br />
          <br />
          <TextField
            autoFocus
            margin="dense"
            id="comments"
            label="comments"
            name="comments"
            onChange={updatecomment}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleCloseProcess(id, comments, cIReport);
            }}
            color="primary"
          >
            submit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default SearchResults;
