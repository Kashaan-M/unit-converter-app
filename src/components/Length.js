import React from 'react';
import {tC} from "./Temperature";

{/************** meter converters *************/}
const mmToM = mm => (mm / (10**3));
const iToM = i => (i / 39.3708);
const fToM = f => (f / 3.2808);
const yToM = y => (y/1.0936);
const miToM = mi => (mi / 0.0006214);
const kmToM = km => (km * 1000);
{/************** mm converters ********/}
const mToMm = meter => (meter * (10**3));
const iToMm = i => ( (i *1000) / 39.3708);
const fToMm = f => ( (f * (10**3))/ (3.2808 ));
const yToMm = y => ( (y * (10**3)) / 1.0936);
const miToMm = mi => ( (mi * 1000) / 0.0006214);
const kmToMm = km => (km * 1000000);
{/************** i converters ********/}
const mToI = meter => (meter * 39.3708);
const mmToI = mm => ((mm * 39.3708) / 1000);
const fToI = f => (f * 12.0);
const yToI = y => ( (y * 39.3708)/ 1.0936);
const miToI = mi => ( (mi * 39.3708) / 0.0006214);
const kmToI = km => (km * 39370.8);
{/************** f converters ********/}
const mToF = meter => (meter * 3.2808);
const mmToF = mm => ( (mm * 3.2808) / (10**3));
const iToF = i => (i / 12.0);;
const yToF = y => ( (y * 3.2808) / 1.0936);
const miToF = mi => ( (mi * 3.2808) / 0.0006214);
const kmToF = km => (km * 3280.8);
{/************** y converters *********/}
const mToY = meter => (meter * 1.0936);
const mmToY = mm => ( (mm * 1.0936)/(10**3) ) ;
const iToY = i => ( (i * 1.0936) / 39.3708);
const fToY = f => ( (f * 1.0936) / 3.2808);
const miToY = mi => ( (mi * 1.0936) / 0.0006214)
const kmToY = km => (km * 1093.6);
{/************** mi converters **********/}
const mToMi = meter => (meter * 0.0006214);
const mmToMi = mm => ( (mm * 0.0006214) / 1000);
const iToMi = i => ( (i * 0.0006214) / 39.3708);
const fToMi = f => ( (f * 0.0006214) / 3.2808);
const yToMi = y => ( (y * 0.0006214) / 1.0936);
const kmToMi = km => (km * 0.6214);
{/************** km converters ******/} 
const mToKm = meter => (meter / 1000);
const mmToKm = mm => ( (mm * 0.001) / 1000);
const iToKm = i => ( (i * 0.001) / 39.3708);
const fToKm = f => ( (f * 0.001) / 3.2808);
const yToKm = y => ( (y * 0.001) / 1.0936);
const miToKm = mi => (mi / 0.0006214);


export default class L_p extends React.Component {
  constructor(props) {
  super(props);
  this.state = {l: '', u: 'm'};
  this.hdMCg = this.hdMCg.bind(this);
  this.hdMmCg = this.hdMmCg.bind(this);
  this.hdICg = this.hdICg.bind(this);
  this.hdFCg = this.hdFCg.bind(this);
  this.hdYCg = this.hdYCg.bind(this);
  this.hdMiCg = this.hdMiCg.bind(this);
  this.hdKmCg = this.hdKmCg.bind(this);
}
  hdMCg(l) {this.setState({u:'m', l})};
  hdMmCg(l) {this.setState({u:'mm', l})};
  hdICg(l) {this.setState({u: 'in', l})};
  hdFCg(l) {this.setState({u:'ft', l})};
  hdYCg(l) {this.setState({u:'yd', l})};
  hdMiCg(l) {this.setState({u: 'mi', l})};
  hdKmCg(l) {this.setState({u:'km', l})};

  render() {
    const u = this.state.u;
    const l = this.state.l;
    const meter = u === 'mm' ? tC(l, mmToM):u === 'in' ? tC(l,iToM):u === 'ft' ? tC(l, fToM): u === 'yd' ? tC(l, yToM): u === 'mi' ? tC(l, miToM): u === 'km' ? tC(l, kmToM):l;
    const milliM = u === 'm' ? tC(l, mToMm):u ==='in'? tC(l, iToMm):u ==='ft' ? tC(l, fToMm): u === 'yd' ? tC(l, yToMm): u === 'mi' ? tC(l, miToMm): u === 'km' ? tC(l, kmToMm): l;
    const i = u === 'm' ? tC(l, mToI):u === 'mm' ? tC(l, mmToI):u === 'ft' ? tC(l, fToI): u === 'yd' ? tC(l, yToI): u === 'mi' ? tC(l, miToI): u === 'km' ? tC(l, kmToI): l;
    const f = u === 'm' ? tC(l, mToF): u === 'mm' ? tC(l, mmToF): u === 'in' ? tC(l, iToF): u === 'yd' ? tC(l, yToF): u === 'mi' ? tC(l, miToF): u === 'km' ? tC(l, kmToF): l;
    const y = u === 'm' ? tC(l, mToY): u === 'mm' ? tC(l, mmToY): u === 'in' ? tC(l, iToY): u === 'ft'? tC(l, fToY): u === 'mi' ? tC(l, miToY): u === 'km' ? tC(l, kmToY): l;
    const mi = u === 'm' ? tC(l, mToMi): u === 'mm' ? tC(l, mmToMi): u === 'in' ? tC(l, iToMi): u === 'ft' ? tC(l, fToMi): u === 'yd' ? tC(l, yToMi): u === 'km' ? tC(l, kmToMi): l;
    const km =  u === 'm' ? tC(l, mToKm): u === 'mm' ? tC(l, mmToKm): u === 'in' ? tC(l, iToKm): u === 'ft' ? tC(l, fToKm): u === 'yd' ? tC(l, yToKm): u === 'mi' ? tC(l, miToKm): l;
    return (
      <div  className = 'quantity-container'>
          <h3 className='uHeading'>Length</h3>
          <L_c
            u = "m"
            l = {meter}
            onL_change = {this.hdMCg} />
          <L_c
            u = "mm"
            l = {milliM}
            onL_change = {this.hdMmCg} />
          <L_c
            u = "in"
            l = {i}
            onL_change = {this.hdICg} />
          <L_c
            u = "ft"
            l = {f}
            onL_change = {this.hdFCg} />
          <L_c
            u = "yd"
            l = {y}
            onL_change = {this.hdYCg} />
          <L_c
            u = "mi"
            l = {mi}
            onL_change = {this.hdMiCg} />
          <L_c
            u = "km"
            l = {km}
            onL_change = {this.hdKmCg} /> 
      </div>
    );
  }
}
const unNm = {
  'm' : 'Meter(s)',
  'mm': 'Millimeter(s)',
  'in': 'Inch(es)',
  'ft': 'Foot/(feet)',
  'yd': 'Yard(s)',
  'mi': 'Mile(s)',
  'km': 'Kilometer(s)'
}

class L_c extends React.Component {
  constructor(props) {
    super(props);
    this.hdCg = this.hdCg.bind(this);
  }

  hdCg(e) {
    this.props.onL_change(e.target.value);
  }
  render() {
    const l = this.props.l;
    const u = this.props.u;
    return (
      <div>
          <label htmlFor={unNm[u]} className="labels">
            {unNm[u]}
            </label>
          <input
            value={l}
            onChange = {this.hdCg}
            id = {unNm[u]} />
      </div>
    );
  }
}
