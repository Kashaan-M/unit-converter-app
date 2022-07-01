import React from 'react';
import {tC} from './Temperature';

{/************** atm converters **************/}
const paToAtm = pa => (pa  / (1.01325 * (10 ** 5)));
const barToAtm = bar => (bar / 1.01325);
const psiToAtm = psi => (psi / 14.696);
const tToAtm = t => (t / 760);
{/************* Pa converters ****************/}

const atmToPa = atm => ( atm * (1.01325 * (10 ** 5)) );
const barToPa = bar => (bar * (10 ** 5) );
const psiToPa = psi => (psi * ( (1.01325 * (10 ** 5)) / 14.696 ) );
const tToPa = t => (t * ( (1.01325 * (10 **5)) / 760) );
{/*********** bar converters ******************/}
const atmToBar = atm => (atm * 1.01325);
const paToBar = pa => (pa / (10 ** 5) );
const psiToBar = psi => (psi * (1.01325 / 14.696) );
const tToBar = t => (t * (1.01325 / 760) );
{/********** psi converters ******************/}
const atmToPsi = atm => (atm * 14.696);
const paToPsi = pa => ( pa * (14.696 / (1.01325 * (10**5))) );
const barToPsi = bar => (bar * (14.696 / 1.01325) );
const tToPsi = t => (t * (14.696 / 760) );
{/********* t converters *******************/}
const atmToTorr = atm => (atm * 760);
const paToTorr = pa => (pa * (760 / (1.01325 * (10**5))) );
const barToTorr = bar => (bar * (760 / 1.01325) );
const psiToTorr = psi => (psi * (760 / 14.696));
{/*******************************************************************/}

export default class P_p extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pressure: '', unit: 'atm'};
    this.hdAtmCg = this.hdAtmCg.bind(this);
    this.hdPaCg = this.hdPaCg.bind(this);
    this.hdBarCg = this.hdBarCg.bind(this);
    this.hdPsiCg = this.hdPsiCg.bind(this);
    this.hdTorrCg = this.hdTorrCg.bind(this);
  }

  hdAtmCg(pressure) {
    this.setState({unit: 'atm', pressure});
  }
  hdPaCg(pressure) {
    this.setState({unit:'pa', pressure});
  }
  hdBarCg(pressure) {
    this.setState({unit: 'bar', pressure});
  }
  hdPsiCg(pressure) {
    this.setState({unit:'psi', pressure});
  }
  hdTorrCg(pressure) {
    this.setState({unit: 't', pressure});
  }

  render() {
    const unit = this.state.unit;
    const pressure = this.state.pressure;
    const atm = unit === 'pa' ? tC(pressure, paToAtm): unit === 'bar' ? tC(pressure, barToAtm): unit === 'psi' ? tC(pressure, psiToAtm): unit === 't' ? tC(pressure, tToAtm): pressure;
    const pascal = unit === 'atm' ? tC(pressure, atmToPa): unit === 'bar' ? tC(pressure, barToPa): unit === 'psi' ? tC(pressure, psiToPa): unit === 't' ? tC(pressure, tToPa): pressure;
    const bar = unit === 'atm' ? tC(pressure, atmToBar): unit === 'pa' ? tC(pressure, paToBar): unit === 'psi' ? tC(pressure, psiToBar): unit === 't' ? tC(pressure, tToBar): pressure;
    const psi = unit === 'atm' ? tC(pressure, atmToPsi): unit === 'pa' ? tC(pressure, paToPsi): unit === 'bar' ? tC(pressure, barToPsi): unit === 't' ? tC(pressure, tToPsi): pressure;
    const t = unit === 'atm' ? tC(pressure, atmToTorr): unit === 'pa' ? tC(pressure, paToTorr): unit === 'bar' ? tC(pressure, barToTorr): unit === 'psi' ? tC(pressure, psiToTorr): pressure;
    return (
      <div  className = 'quantity-container'>
          <h3 className="unitHeadings">Pressure</h3>
        <P_c
          unit = "atm"
          pressure = {atm}
          onP_change = {this.hdAtmCg} />
        <P_c
          unit = "pa"
          pressure = {pascal}
          onP_change = {this.hdPaCg} />
        <P_c
          unit = "bar"
          pressure = {bar}
          onP_change = {this.hdBarCg} />
        <P_c
          unit = "psi"
          pressure = {psi}
          onP_change = {this.hdPsiCg} />
        <P_c
          unit = "t"
          pressure = {t}
          onP_change = {this.hdTorrCg} />
      </div>
    );
  }
}

const presUnits = {
'atm': <p>Standard Atmosphere(atm)</p>,
'pa': <p>Pascal ( Pa, N/m<sup>2</sup>)</p>,
'bar': <p>bar</p>,
'psi': <p>PSI (lb<sub> f</sub> / in<sup>2</sup>)</p>,
't': <p>mm of Hg (or Torr)</p>
}

class P_c extends React.Component {
  constructor(props) {
    super(props);
    this.hndChng = this.hndChng.bind(this);
  }

  hndChng(e) {
    this.props.onP_change(e.target.value);
  }
  render() {
    const unit = this.props.unit;
    const pressure = this.props.pressure;
    return (
      <div>
          <label htmlFor={presUnits[unit]} className="labels">
            {presUnits[unit]}
          </label>
          <input
            value = {pressure}
            onChange = {this.hndChng}
            id = {presUnits[unit]} />
      </div>
    );
  }
}
