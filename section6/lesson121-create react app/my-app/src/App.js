// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Component} from 'react';
import styled from 'styled-components';


const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
  a {
    display: block;
    margin: 10px 0 10px 0;
    color: ${props => props.active ? 'orange' : 'black'};
  }
  input {
    display: block;
    margin-top: 10px;
  }
`;

const Header = styled.h2`
  font-size: 22px;
`;

export const Button = styled.button`
  display: block;
  padding: 5px 15px;
  background-color: gold;
  border: 1px solid rgba(0, 0, 0, .2);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
`;

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
      <EmpItem active>
        <Button onClick={this.nextYear}>{text}</Button>
        <Header> My name is {name}, surname - {surname}, age - {years}, position - {position}</Header>
        <a href={link}>My profile</a>
        <form>
          <span style={{fontSize: 40, color: 'red'}}>Enter position</span>
          <input type="text" onChange={this.commitInputChanges} />
        </form>
      </EmpItem>
    )
  }
}

const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 auto;
`;

function App() {
  return (
    <Wrapper>
        <WhoAmI name="Pavel" surname="Pak" link="facebook.com"/>
        <WhoAmI name='John' surname='Smith' link='instagram.com'/>
        {/* <WhoAmI name={{firstName: 'Mike'}} surname="Wazowski" link="instagram.com"/>
        <WhoAmI name={() => {return 'Ralph'}} surname="Pak" link="facebook.com"/> */}
    </Wrapper>
  );
}



export default App;


