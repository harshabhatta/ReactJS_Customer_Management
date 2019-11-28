import React, { Component } from "react";
import "./App.css";
import SearchData from "./Components/SearchData";
import AddDetails from "./Components/AddDetails";
import SearchResults from "./Components/SearchResults";

export class App extends Component {
  state = {
    step: 1,
    showTable: false,
    searchBrand: "",
    customerType: "",
    searchResult: [
      {
        Id: "0123456789",
        category: "CANDI",
        //typeOfData: "CANDI",
        brand: "DB",
        comments: "this is for testing purpose - customer",
        negativeStatus: true,
        updatedId: "BC3505"
      }
    ]
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleNewData = form => {
    const newSearchData = this.state.searchResult.slice();
    newSearchData.push(form);
    this.setState({
      searchResult: newSearchData,
      showTable: false
    });
  };

  deleteResultsRow = rowID => {
    const index = this.state.searchResult.findIndex(data => {
      return data.Id === rowID;
    });
    let copyRows = [...this.state.searchResult];
    copyRows.splice(index, 1);
    this.setState({
      searchResult: copyRows
    });
  };

  updateComments = (rowID, comment, cIReport) => {
    const index = this.state.searchResult.findIndex(data => {
      return data.Id === rowID;
    });
    let copyRows = [...this.state.searchResult];
    copyRows[index].comments = comment;
    copyRows[index].negativeStatus = cIReport;
    this.setState({
      searchResult: copyRows
    });
  };

  handleChange = input => event =>
    this.setState({ [input]: event.target.value });

  displayTable = () => {
    this.setState({
      showTable: true
    });
  };

  render() {
    const { step } = this.state;
    const { searchBrand, customerType } = this.state;
    const searchdata = { searchBrand, customerType };

    switch (step) {
      case 1:
        return (
          <div>
            <SearchData
              searchData={searchdata}
              handleChange={this.handleChange}
              nextStep={this.nextStep}
              tableDisplay={this.displayTable}
            />
            <br />
            <br />
            {this.state.showTable === true ? (
              <SearchResults
                searchResult={this.state.searchResult}
                searchData={searchdata}
                deleteRow={this.deleteResultsRow}
                handleUpdateComment={this.updateComments}
              />
            ) : null}
          </div>
        );
      case 2:
        return (
          <AddDetails
            onclick={this.handleDataUpdate}
            prevStep={this.prevStep}
            insertNewValues={this.handleNewData}
          />
        );
      default:
        return null;
    }
  }
}

export default App;
