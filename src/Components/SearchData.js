import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  themer: {
    marginLeft: theme.spacing(5)
  },
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
  }
}));

const SearchData = props => {
  const classes = useStyles();

  const nextProcess = event => {
    event.preventDefault();
    props.nextStep();
  };

  return (
    <React.Fragment>
      <AppBar>
        <Typography variant="h6" className={classes.appBar}>
          Search Exclude Customer/Custody Report Details
        </Typography>
      </AppBar>
      <br />
      <br />
      <FormControl className={classes.formControl}>
        <InputLabel id="label_1">brand</InputLabel>
        <Select
          labelId="label_1"
          id="demo-simple-select_1"
          defaultValue=""
          onChange={props.handleChange("searchBrand")}
        >
          <MenuItem value={"DB"}>DB</MenuItem>
          <MenuItem value={"FI"}>FI</MenuItem>
          <MenuItem value={"SE"}>SE</MenuItem>
          <MenuItem value={"NO"}>NO</MenuItem>
          <MenuItem value={"LU"}>LU</MenuItem>
        </Select>
      </FormControl>
      <br />
      <FormControl className={classes.formControl}>
        <InputLabel id="label2">Category</InputLabel>
        <Select
          labelId="label2"
          id="demo-simple-select2"
          defaultValue=""
          onChange={props.handleChange("customerType")}
        >
          <MenuItem value={"CANDI"}>CANDI</MenuItem>
          <MenuItem value={"EXCDEDPNR"}>EXCDEDPNR</MenuItem>
          <MenuItem value={"EXCUST"}>EXCUST</MenuItem>
        </Select>
      </FormControl>
      <br />
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        onClick={props.tableDisplay}
      >
        Search
      </Button>
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        onClick={nextProcess}
      >
        Add
      </Button>
    </React.Fragment>
  );
};

export default SearchData;
