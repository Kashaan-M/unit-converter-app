import React from 'react';
import { tC } from './Temperature';

{/*********** kg converters *************/}
const mtonToKg = mton => (mton / 0.001);
const lbmToKg = lbm => (lbm / 2.20462);
const ozToKg = oz => (oz / 35.27392);
const ustonToKg = uston => (uston * 907.185);
{/*********** mton converters *************/}
const kgToMton = kg => (kg * 0.001);
const lbmToMton = lbm => ( (lbm * 0.001) / 2.20462);
const ozToMton = oz => ( (oz * 0.001)/ 35.27392);
const ustonToMton = uston => (uston * 0.907185819);  // 1 US Ton = 0.907185819 M Ton 
{/*********** Lbm converters *************/}
const kgToLbm = kg => (kg * 2.20462);
const mtonToLbm = mton => ( (mton * 2.20462)/ 0.001);
const ozToLbm = oz => ( (oz * 2.20462)/ 35.27392);
const ustonToLbm = uston => (uston * 2000);
{/*********** oz converters *************/}
const kgToOz = kg => (kg * 35.27392);
const mtonToOz = mton => ( (mton * 35.27392)/ 0.001);
const lbmToOz = lbm => ( (lbm * 35.27392)/ 2.20462);
const ustonToOz = uston => (uston * 32000);
{/*********** US Ton converters *************/}
const kgToUston = kg => (kg / 907.185);
const mtonToUston = mton => (mton / 0.907185819);        // 1 US Ton = 0.907185819 M Ton
const lbmToUston = lbm => (lbm / 2000);
const ozToUston = oz => (oz / 32000);            // 1 US Ton = 32000 oz


export default class M_p extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mass: '', unit: 'kg'};
    this.hdKgCg = this.hdKgCg.bind(this);
    this.hdMtnCg = this.hdMtnCg.bind(this);
    this.hdLbmCg = this.hdLbmCg.bind(this);
    this.hdOzCg = this.hdOzCg.bind(this);
    this.hdUtnCg = this.hdUtnCg.bind(this);
  }
  hdKgCg(mass) {
    this.setState({unit: 'kg', mass});
  }
  hdMtnCg(mass) {
    this.setState({unit: 'mton', mass});
  }
  hdLbmCg(mass) {
    this.setState({unit: 'lbm', mass});
  }
  hdOzCg(mass) {
    this.setState({unit: 'oz', mass});
  }
  hdUtnCg(mass) {
    this.setState({unit: 'uston', mass});
  }
  
  render() {
    const unit = this.state.unit;
    const mass = this.state.mass;
    const kilogram = unit === 'mton' ? tC(mass, mtonToKg): unit === 'lbm' ? tC(mass, lbmToKg): unit === 'oz' ? tC(mass, ozToKg): unit === 'uston' ? tC(mass, ustonToKg): mass;
    const mton = unit === 'kg' ? tC(mass, kgToMton): unit === 'lbm' ? tC(mass, lbmToMton): unit === 'oz' ? tC(mass, ozToMton): unit === 'uston' ? tC(mass, ustonToMton): mass;
    const poundMass = unit === 'kg' ? tC(mass, kgToLbm): unit === 'mton' ? tC(mass, mtonToLbm): unit === 'oz' ? tC(mass, ozToLbm): unit === 'uston' ? tC(mass, ustonToLbm): mass;
    const oz = unit === 'kg' ? tC(mass, kgToOz): unit === 'mton' ? tC(mass, mtonToOz): unit === 'lbm' ? tC(mass, lbmToOz): unit === 'uston' ? tC(mass, ustonToOz): mass; 
    const uston = unit === 'kg' ? tC(mass, kgToUston): unit === 'mton' ? tC(mass, mtonToUston): unit === 'lbm' ? tC(mass, lbmToUston): unit === 'oz' ? tC(mass, ozToUston): mass; 
    return (
      <div className = 'quantity-container' >
        <h3 className='unitHeading'>Mass</h3>
          <M_c
            unit = "kg"
            mass = {kilogram}
            onM_change = {this.hdKgCg} />
          <M_c
            unit = "mton"
            mass = {mton}
            onM_change = {this.hdMtnCg} />
          <M_c
            unit = "lbm"
            mass = {poundMass}
            onM_change = {this.hdLbmCg} />
          <M_c
            unit = "oz"
            mass = {oz}
            onM_change = {this.hdOzCg} />
          <M_c
            unit = "uston"
            mass = {uston}
            onM_change = {this.hdUtnCg} />
      </div>
    );
  }
}
const msUs = {
  kg: <p>Kilogram</p>,
  mton: <p>Metric Ton (tonne)</p>,
  lbm: <p>Pound Mass (lb <sub>m</sub>)</p>,
  oz : <p>Ounce (oz)</p>,
  uston: <p>US Ton</p>
}

class M_c extends React.Component {
  constructor(props) {
    super(props);
    this.hdCg = this.hdCg.bind(this);
  }
  hdCg(e) {
    this.props.onM_change(e.target.value);
  }
  
  render() {
    const mass = this.props.mass;
    const unit = this.props.unit;
    return (
      <div>
        <label htmlFor={msUs[unit]} className="labels">
          {msUs[unit]}
        </label>
        <input 
          value={mass}
          onChange={this.hdCg}
          id={msUs[unit]}/>
      </div>

    );
  }
}

