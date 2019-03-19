import React, { Component } from "react";
import DatePicker from "react-datepicker";
import Select from 'react-select'
import eidi_oximaton from './../constants/eidiOximaton'
import ypiresies from './../constants/ypiresies'

import "react-datepicker/dist/react-datepicker.css";

class CreateNew extends Component {

  state = {
    prothema: '',
    arithmos: '',
    eidos: null,
    ypiresia: null,
    imerominia_protis_adeias: new Date(),
    neo_kteo: new Date()
  }

  handleProtiAdeia = (date) => {
    this.setState({
      imerominia_protis_adeias: date
    });
  }

  handle_kteo_neo = (date) => {
    this.setState({
      neo_kteo: date
    });
  }

  handleTextChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleYpiresia = (selectedOption) => {
    console.log(selectedOption.value)
    this.setState({ ypiresia: selectedOption.value })
    console.log(this.state)
  }

  handleSelectEidos = (selectedOption) => {
    console.log(selectedOption.value)
    this.setState({ eidos: selectedOption.value })
    console.log(this.state)
  }

  testMe = (e) => {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    const { selectedOption } = this.state
    const optionsEidi = eidi_oximaton
    return (
      <div>
        <h4>Δημιουργία Οχήματος</h4>
        <form>
          <div className="col m6">
            <div className="row">
              <div className="input-field col m6">
                <input type="text" name="prothema" onChange={this.handleTextChange} />
                <label htmlFor="prothema">Πρόθεμα</label>
              </div>
              <div className="input-field col m6">
                <input type="text" name="arithmos" onChange={this.handleTextChange} />
                <label htmlFor="arithmos">Αριθμός</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col m6">
                <label>Είδος Οχήματος</label><br /><br />
                <Select
                  value={selectedOption}
                  onChange={this.handleSelectEidos}
                  options={optionsEidi}
                />
              </div>
              <div className="input-field col m6">
                <label>Υπηρεσία που ανήκει</label><br /><br />
                <Select
                  value={selectedOption}
                  onChange={this.handleYpiresia}
                  options={ypiresies}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col m6">
                <label>Ημερομηνία Πρώτης Άδειας</label><br />
                <DatePicker name="proti_adeia" selected={this.state.imerominia_protis_adeias} dateFormat="MMMM d, yyyy" onSelect={this.handleProtiAdeia} />
              </div>
              <div className="input-field col m6">
                <label>Νέο ΚΤΕΟ</label><br />
                <DatePicker name="neo_kteo" selected={this.state.neo_kteo} dateFormat="MMMM d, yyyy" onSelect={this.handle_kteo_neo} />
              </div>
            </div>
          </div>
          <button type="submit" onClick={this.testMe}>Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateNew;
