import React from 'react';
import T_p from './components/Temperature';
import P_p from './components/Pressure';
import L_p from './components/Length';
import M_p from './components/mass';
import E_p from './components/Energy';

let arrUn = [];

class Conv extends React.Component {
  constructor(props) {
    super(props);
    this.ChSt = this.ChSt.bind(this);
    this.state = {
      actvUn: arrUn,
    }
  }
  ChSt(e) {
    
    if(e.target.value === 'length') {
      arrUn.push('l');
      this.setState({actvUn: arrUn});
  }
    else if(e.target.value === 'pressure') {
      arrUn.push('p');
      this.setState({actvUn: arrUn});
  } 
    else if(e.target.value === 'temperature') {
      arrUn.push('t');
      this.setState({actvUn: arrUn});
  } 
    else if(e.target.value === 'mass') {
      arrUn.push('m');
      this.setState({actvUn: arrUn});
  }
    else if(e.target.value === 'energy') {
      arrUn.push('e');
      this.setState({actvUn: arrUn});
    }

  }
  render() {
    const actvUn = this.state.actvUn;
    return (
      <div className ='container'>
        <Units status ={this.state.actvUn} selected = {this.ChSt} />
        <div className='units-wrapper'>
          {actvUn.includes('l') && <L_p />}
          {actvUn.includes('p') && <P_p />}
          {actvUn.includes('t') && <T_p />}
          {actvUn.includes('m') && <M_p />}
          {actvUn.includes('e') && <E_p />}
        </div>
      </div>
      
    )
  }
}
class Units extends React.Component {
  constructor(props) {
    super(props);
    this.SelUn = this.SelUn.bind(this);
  }

  SelUn(e) {
    this.props.selected(e)
  }
  render() {
    return (
      <div className='properties-wrapper'>
      <p><strong>Select Properties</strong></p>
      <select className = "dropdown" multiple="true">
        <option value="length" onClick={this.SelUn}>Length</option>
        <option value="pressure" onClick={this.SelUn}>Pressure</option>
        <option value="temperature" onClick={this.SelUn}>Temperature</option>
        <option value="mass" onClick={this.SelUn}>Mass</option>
        <option value="energy" onClick={this.SelUn}>Energy</option>
      </select>
      </div>
    );
  }
}

{/********************************************************************** */}

export {Conv}
