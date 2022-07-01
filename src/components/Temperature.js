import React from 'react';


const celToFahr = cel => (cel * 9 / 5) + 32;
const kelvToFahr = klv => ( (klv - 273.16) * (9 / 5) ) + 32;
const rankToFahr = rkn => (rkn - 460);
const celToKelv = cel => (cel + 273.16);
const fahrToKelv = fhr => ( (fhr - 32) * (5 / 9) ) + 273.16;
const rankToKelv = rkn => (rkn / 1.8);
const fahrToCel = fhr => (fhr - 32) * 5 / 9;
const kelvToCel = klv => (klv - 273.16);
const rankToCel = rkn => (rkn - 492) * (5 / 9);
const kelvToRank = klv => (klv * 1.8);
const celToRank = cel => (cel + 273.16) * 1.8;
const fahrToRank = (fhr) => (fhr + 460);
{/* tC takes a temperature string and a convert func and returns a temp string */}

export function tC(quantity,convert) {
  const input = parseFloat(quantity);
  if(Number.isNaN(input)) {
    return ''; // if Not a number return ''
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000000) / 1000000;
  return rounded.toString();
}

export default class T_p extends React.Component {
  constructor(props) {
    super(props);
    this.hdCelCg = this.hdCelCg.bind(this);
    this.hdFhrCg = this.hdFhrCg.bind(this);
    this.hdKlvCg = this.hdKlvCg.bind(this);
    this.hdRknCg = this.hdRknCg.bind(this);
    this.state = {temperature:'',scale: 'c'};
  }

  hdCelCg(temperature) {
    this.setState({scale: 'c', temperature});
  }

  hdFhrCg(temperature) {
    this.setState({scale: 'f', temperature});
  }

  hdKlvCg(temperature) {
    this.setState({scale: 'k',temperature});
  }

  hdRknCg(temperature) {
    this.setState({scale: 'r', temperature});
  }
  
    render() {
      const scale = this.state.scale;
      const temperature = this.state.temperature;
      const cel = scale === 'f' ? tC(temperature, fahrToCel): scale ==='k'? tC(temperature, kelvToCel): scale === 'r' ? tC(temperature,rankToCel):temperature;
      const fhr = scale === 'c' ? tC(temperature, celToFahr):scale === 'k' ? tC(temperature,kelvToFahr):scale === 'r' ? tC(temperature,rankToFahr) :temperature;
      const klv = scale === 'c' ? tC(temperature,celToKelv): scale === 'f' ? tC(temperature,fahrToKelv): scale === 'r' ? tC(temperature, rankToKelv): temperature;
      const rkn = scale === 'c' ? tC(temperature,celToRank): scale === 'f' ? tC(temperature,fahrToRank): scale === 'k' ? tC(temperature,kelvToRank): temperature;
      return (
        <div  className = 'quantity-container'>
          <h3 className="unitHeading">Temperature</h3>
          <T_c
            scale = "c"
            temperature = {cel}
            onT_change = {this.hdCelCg} />
          <T_c
            scale = "f"
            temperature = {fhr}
            onT_change = {this.hdFhrCg} />
          <T_c
            scale = "k"
            temperature = {klv}
            onT_change = {this.hdKlvCg} />
          <T_c
            scale = "r"
            temperature = {rkn}
            onT_change = {this.hdRknCg} />
        </div>
        );
    }
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
  k: 'Kelvin',
  r: 'Rankine'
};

class T_c extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onT_change(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <div>
          <label htmlFor={scaleNames[scale]} className="labels">
            {scaleNames[scale]}
          </label>
          <input
            value={temperature}
            onChange={this.handleChange}
            id={scaleNames[scale]}
             />
      </div>
    );
  }
}
