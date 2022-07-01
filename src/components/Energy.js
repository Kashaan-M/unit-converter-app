import React from 'react';
import { tC } from './Temperature';


{/********* j converters *******/}
const egToJ = ergs => (ergs / (10**7));
const dyToJ = dy => (dy / (10**7));
const kwhToJ = kwh => (kwh / (2.778 * (10**(-7) ) ));
const calToJ = cal => (cal / 0.23901);
const lbftToJ = lbft => (lbft / 0.7376);
const btuToJ = btu => (btu / (9.486 * (10**(-4) ) ) );
{/********* ergs converters ********/}
const jToEg = j => (j * (10**7) );
const dyToEg = dy => (dy);
const kwhToEg = kwh => ( (kwh * (10**7)) / (2.778 * (10**-7)) ) ;
const calToEg = cal => ( (cal * 10**7) / 0.23901);
const lbftToEg = lbft => ( (lbft * (10**7)) / 0.7376);
const btuToEg = btu => ( (btu * (10**7)) / (9.486 * (10**(-4))) );
{/********* dyne-cm converters ******/}
const jToDy = j => (j * (10**7) );
const egToDy = ergs => ergs;
const kwhToDy = kwh => ( (kwh *(10**7)) / (2.778 * (10**-7)) );
const calToDy = cal => ( (cal * (10**7)) / 0.23901 );
const lbftToDy = lbft => ((lbft * 10**7) / 0.7376);
const btuToDy = btu => ( (btu * (10**7)) / (9.486 * (10**(-4))) );
{/********* kWh converters **********/}
const jToKwh = j => (j * (2.778 * (10**(-7))) );
const egToKwh = ergs => ( (ergs * (2.778 * (10**(-7))) ) / (10**7) );
const dyToKwh = dy => ( (dy * (2.778 * (10**(-7))) ) / (10**7) );
const calToKwh = cal => ( (cal * (2.778 * (10**(-7)))) / 0.23901 );
const lbftToKwh = lbft => ( (lbft * (2.778 * (10**(-7)))) / 0.7376 );
const btuToKwh = btu => ( (btu * (2.778 * (10**(-7)))) / (9.486 * (10**(-4))));
{/********* cal converters **********/}
const jToCal = j => (j * 0.23901);
const egToCal = ergs => ( (ergs * 0.23901) / (10**7));
const dyToCal = dy => ( (dy * 0.23901) / (10**7));
const kwhToCal = kwh => ( (kwh * 0.23901) / (2.778 * (10**(-7))) );
const lbftToCal = lbft => ( (lbft * 0.23901) / 0.7376);
const btuToCal = btu => ( (btu * 0.23901) / (9.486*(10**-4)));
{/********* lbf-ft converters ********/}
const jToLbft = j => (j * 0.7376);
const egToLbft = ergs => ( (ergs * 0.7376) / (10**7));
const dyToLbft = dy => ( (dy * 0.7376) / (10**7));
const kwhToLbft = kwh => ( (kwh * 0.7376) / (2.778 * (10**(-7))) );
const calToLbft = cal => ((cal * 0.7376) / 0.23901);
const btuToLbft = btu => ( (btu * 0.7376) / (9.486 * (10**(-4))) );
{/********* Btu converters **********/}
const jToBtu = j => ( j * (9.486*(10**(-4))) );
const egToBtu = ergs => ( ( ergs * (9.486*(10**(-4))) ) / (10**7) );
const dyToBtu = dy => ( ( dy * (9.486*(10**(-4))) ) / (10**7) );
const kwhToBtu = kwh => ( ( kwh * (9.486*(10**(-4))) ) / (2.778 * (10**(-7))) );
const calToBtu = cal => ( (cal * (9.486*(10**(-4))) ) / 0.23901);
const lbftToBtu = lbft => ( (lbft * (9.486*(10**(-4)))) / 0.7376);



export default class E_p extends React.Component {
  constructor(props) {
    super(props);
    this.state = {en: '',u: 'j'};
    this.hdJCg = this.hdJCg.bind(this);
    this.hdEgCg = this.hdEgCg.bind(this);
    this.hdDycmCg = this.hdDycmCg.bind(this);
    this.hdKwCg = this.hdKwCg.bind(this);
    this.hdCaCg = this.hdCaCg.bind(this);
    this.hdlbftCg = this.hdlbftCg.bind(this);
    this.hdBCg = this.hdBCg.bind(this);
  }
  hdJCg(en) {
    this.setState({u:'j',en});
  }
  hdEgCg(en) {
    this.setState({u:'ergs',en});
  }
  hdDycmCg(en) {
    this.setState({u:'dyne-cm',en});
  }
  hdKwCg(en) {
    this.setState({u:'kWh',en});
  }
  hdCaCg(en) {
    this.setState({u:'cal',en});
  }
  hdlbftCg(en) {
    this.setState({u: 'lbf-ft', en});
  }
  hdBCg(en) {
    this.setState({u:'Btu', en});
  }
  render() {
    const u = this.state.u;
    const en = this.state.en;
    const j = u === 'ergs' ? tC(en, egToJ): u === 'dyne-cm' ? tC(en, dyToJ): u === 'kWh' ? tC(en, kwhToJ): u === 'cal' ? tC(en, calToJ): u === 'lbf-ft' ? tC(en, lbftToJ): u === 'Btu' ? tC(en, btuToJ): en;
    const ergs = u === 'j' ? tC(en, jToEg): u === 'dyne-cm'? tC(en, dyToEg): u === 'kWh'?tC(en,kwhToEg): u === 'cal'? tC(en,calToEg): u === 'lbf-ft'? tC(en,lbftToEg): u === 'Btu'? tC(en, btuToEg): en;
    const dy = u === 'j' ? tC(en, jToDy): u === 'ergs' ? tC(en, egToDy): u === 'kWh'? tC(en,kwhToDy): u === 'cal'? tC(en, calToDy): u === 'lbf-ft'? tC(en, lbftToDy): u === 'Btu'? tC(en, btuToDy): en;
    const kwh = u === 'j'? tC(en, jToKwh): u === 'ergs'? tC(en, egToKwh): u === 'dyne-cm'? tC(en, dyToKwh): u === 'cal'? tC(en, calToKwh): u === 'lbf-ft'? tC(en, lbftToKwh): u === 'Btu'? tC(en, btuToKwh): en;
    const cal = u === 'j'? tC(en,jToCal): u === 'ergs'? tC(en, egToCal): u === 'dyne-cm'? tC(en, dyToCal): u === 'kWh'? tC(en,kwhToCal): u === 'lbf-ft'? tC(en,lbftToCal): u === 'Btu'? tC(en, btuToCal): en;
    const lbft = u === 'j' ?tC(en, jToLbft): u === 'ergs'? tC(en, egToLbft): u === 'dyne-cm'? tC(en, dyToLbft): u === 'kWh'? tC(en, kwhToLbft): u === 'cal'? tC(en, calToLbft): u === 'Btu'? tC(en, btuToLbft): en;
    const btu = u === 'j' ? tC(en,jToBtu): u === 'ergs'? tC(en,egToBtu):u === 'dyne-cm'? tC(en,dyToBtu): u === 'kWh'? tC(en,kwhToBtu): u === 'cal'? tC(en, calToBtu): u === 'lbf-ft'? tC(en, lbftToBtu):en;
    return(
     <div className = 'quantity-container'>
       <h3 className='uHeading'>Energy</h3>
       <E_c
        u = "j"
        en = {j}
        onE_change = {this.hdJCg} />
       <E_c
        u = "ergs"
        en = {ergs}
        onE_change = {this.hdEgCg} />
       <E_c
        u = "dyne-cm"
        en = {dy}
        onE_change = {this.hdDycmCg} />
       <E_c
        u = "kWh"
        en = {kwh}
        onE_change = {this.hdKwCg} />
       <E_c
        u = "cal"
        en = {cal}
        onE_change = {this.hdCaCg} />
       <E_c
        u = "lbf-ft"
        en = {lbft}
        onE_change = {this.hdlbftCg} />
       <E_c
        u = "Btu"
        en = {btu}
        onE_change = {this.hdBCg} />
        
     </div> 
    );
  }
}
const enU = {
  "j" : <p>Joule(s)</p>,
  "ergs" : <p>Erg (CGS system)</p>,
  "dyne-cm": <p>Dyne Centimeter(CGS system)</p>,
  'kWh': <p>Kilowatt-hour</p>,
  'cal': <p>Calorie(s)</p>,
  'lbf-ft': <p>Pound-foot (English Engineering Units)</p>,
  'Btu': <p>British Thermal Unit</p>
}

class E_c extends React.Component {
  constructor(props) {
    super(props);
    this.hdCg = this.hdCg.bind(this);
  }
  hdCg(e) {
    this.props.onE_change(e.target.value);
  }
  render() {
    const en = this.props.en;
    const u = this.props.u;
    return (
      <div>
        <label htmlFor={enU[u]} className= "labels">
          {enU[u]}
        </label>
        <input
          value = {en}
          onChange = {this.hdCg}
          id = {enU[u]} />
      </div>

    );
  }
}
