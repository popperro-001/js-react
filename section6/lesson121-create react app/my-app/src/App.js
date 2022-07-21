// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Component, Fragment} from 'react';


class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: 'xxx',
      position: ''
    }
  }

  nextYear = () => {
    console.log('+++');
    this.setState(state => ({
      years: state.years + 1
    }))
  }

  commitInputChanges = (e) => {
    this.setState({
      position: e.target.value
    })
  }

  render() {
    const {name, surname, link} = this.props;
    const {position, years, text} = this.state;
    return (      
      <Fragment>
        <button onClick={this.nextYear}>{text}</button>
        <h1> My name is {name}, surname - {surname}, age - {years}, position - {position}</h1>
        <a href={link}>My profile</a>
        <form>
          <span style={{fontSize: 40, color: 'red'}}>Enter position</span>
          <input type="text" onChange={this.commitInputChanges} />
        </form>
      </Fragment>
    )
  }
}

function App() {
  return (
    <div className="App">
        <WhoAmI name="Pavel" surname="Pak" link="facebook.com"/>
        <WhoAmI name='John' surname='Smith' link='instagram.com'/>
        {/* <WhoAmI name={{firstName: 'Mike'}} surname="Wazowski" link="instagram.com"/>
        <WhoAmI name={() => {return 'Ralph'}} surname="Pak" link="facebook.com"/> */}
    </div>
  );
}



export default App;


