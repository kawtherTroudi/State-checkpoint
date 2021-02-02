
import './App.css';
import React from 'react'
import Soraka from './Soraka.png'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {person : {fullName : "Kawther Troudi", bio :"This is Kawther", imgSrc: Soraka,  profession : "Support" }, show: false, counter : 0};
  }

  showPerson = () =>(
    
      this.setState({show : !this.state.show}) 
   
);

componentDidMount(){
  setInterval(() => { this.setState({counter : this.state.counter +1})
    
  }, 1000);
}

/*secondsToTime(counter){
  let hours = Math.floor(counter / (60 * 60));

  let divisor_for_minutes = counter % (60 * 60);
  let minutes = Math.floor(divisor_for_minutes / 60);

  let divisor_for_seconds = divisor_for_minutes % 60;
  let seconds = Math.ceil(divisor_for_seconds);

  let time = {
      "h": hours,
      "m": minutes,
      "s": seconds
  };
  return time;
};
*/
  render(){
  return (
    <div className="App">
    {this.state.show?  <>
    <img src = {this.state.person.imgSrc} alt =""></img>
    <h1 >{this.state.person.fullName}</h1>
     <h1 >{this.state.person.bio}</h1>
     <h1 >{this.state.person.profession}</h1>
     <h1>{this.state.counter}</h1></>: <></>}
     <button onClick = {this.showPerson}>Click me</button>
    </div>
  );
}
}
export default App;
