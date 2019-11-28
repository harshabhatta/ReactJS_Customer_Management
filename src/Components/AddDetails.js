import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1),
    width: 200
  },
  button: {
    margin: theme.spacing(1),
    width: 100
  },
  appBar: {
    textAlign: "center"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200
  },
  textArea: {
    minWidth: 200
  }
}));

const AddDetails = props => {
  const classes = useStyles();

  const previousProcess = event => {
    event.preventDefault();
    props.prevStep();
    props.insertNewValues(form);
  };

  const previousStep = event => {
    event.preventDefault();
    props.prevStep();
  };

  const [form, setValues] = useState({
    Id: "",
    category: "",
    //typeOfData: "",
    comments: "",
    brand: "",
    negativeStatus: false,
    updatedId: "BC3505"
  });

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <React.Fragment>
      <AppBar>
        <Typography variant="h6" className={classes.appBar}>
          Add Exclude Customer/Custody Report Details
        </Typography>
      </AppBar>
      <br />
      <br />
      <TextField
        id="outlined-basic"
        className={classes.textField}
        label="Id"
        margin="normal"
        variant="outlined"
        onChange={updateField}
        defaultValue={form.Id}
        name="Id"
      />
      {/* <br />
      <FormControl className={classes.formControl}>
        <InputLabel id="label_1">Type</InputLabel>
        <Select
          labelId="label_1"
          id="demo-simple-select_1"
          value={form.category}
          onChange={updateField}
          name="category"
        >
          <MenuItem value={"Customer"}>Customer</MenuItem>
          <MenuItem value={"Custody"}>Custody</MenuItem>
        </Select>
      </FormControl> */}
      <br />
      <FormControl className={classes.formControl}>
        <InputLabel id="label_2">Category</InputLabel>
        <Select
          labelId="label_2"
          id="demo-simple-select_2"
          value={form.category}
          onChange={updateField}
          name="category"
        >
          <MenuItem value={"CANDI"}>CANDI</MenuItem>
          <MenuItem value={"EXCDEDPNR"}>EXCDEDPNR</MenuItem>
          <MenuItem value={"EXCUST"}>EXCUST</MenuItem>
        </Select>
      </FormControl>
      <br />
      <FormControl className={classes.formControl}>
        <InputLabel id="label_3">brand</InputLabel>
        <Select
          labelId="label_3"
          id="demo-simple-select_3"
          value={form.brand}
          onChange={updateField}
          name="brand"
        >
          <MenuItem value={"DB"}>DB</MenuItem>
          <MenuItem value={"FI"}>FI</MenuItem>
          <MenuItem value={"SE"}>SE</MenuItem>
          <MenuItem value={"NO"}>NO</MenuItem>
          <MenuItem value={"LU"}>LU</MenuItem>
        </Select>
      </FormControl>
      <br />
      {form.category === "CANDI" ? (
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Is C And I Report Needed?</FormLabel>
          <RadioGroup
            aria-label="status"
            name="negativeStatus"
            value={form.negativeStatus}
            onChange={updateField}
            row
          >
            <FormControlLabel value="true" control={<Radio />} label="true" />
            <FormControlLabel value="false" control={<Radio />} label="false" />
          </RadioGroup>
        </FormControl>
      ) : null}
      <br />
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="Empty"
        className={classes.textArea}
        name="comments"
        onChange={updateField}
      />
      <br />
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        onClick={previousProcess}
      >
        Submit
      </Button>
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        onClick={previousStep}
      >
        Cancel
      </Button>
    </React.Fragment>
  );
};

export default AddDetails;
