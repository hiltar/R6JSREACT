import React, { Component } from 'react'

class Form extends /*tähän se mitä extendataan, kun se valmis*/ */ {
  constructor(props) {
    super(props)

    this.initialState = {
      maksunSaaja: '',
      maksupvm: '',
      summa: '',
      maksaja: '',
    }

    this.state = this.initialState
  }
}

handleChange = event => {
    const { name, value } = event.target
  
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { maksunSaaja, maksupvm, summa, maksaja } = this.state;
  
    return (
      <form>
        <label>Maksun Saaja</label>
        <input
          type="text"
          name="maskunSaaja"
          value={maksunSaaja}
          onChange={this.handleChange} />
        <label>Maksettu</label>
        <input
          type="date"
          name="maksupvm"
          value={maksupvm}
          onChange={this.handleChange} />
          <label>Summa</label>
          <input
          type="double"
          name="summa"
          value={summa}
          onChange={this.handleChange} />
          <label>Maksaja</label>
          <input
          type="text"
          name="maksaja"
          value={maksaja}
          onChange={this.handleChange} />
      </form>
    );
  }
  submitForm = () => {
      this.props.handleSubmit(this.state)
      this.setState(this.initialState)
  }
  
  export default Form;