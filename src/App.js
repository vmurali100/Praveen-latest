import React, { Component } from 'react';
import './App.css';
import {FormControl,Grid,Row,Col,Panel,FormGroup,Radio,Button} from 'react-bootstrap';
import Profile from './Components/Profile';
import Checkbox from './Components/Checkbox'
const items = [
  'I have a fleet',
  'I rent Trucks',
  'I drive a Truck',
  'I need financials and Reporting',
  'Other (Accounting , Administrative etc)'
];
class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state={
      checkboxError:""
    }
    this.checkForm=this.checkForm.bind(this)
  }
  
  
  
  createCheckbox = label => (
    // eslint-disable-next-line react/jsx-no-undef
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  )

  createCheckboxes = () => (
    items.map(this.createCheckbox)
  )

properties={
    title:"CREATE NEW PROFILE"
}
 
  handleSubmit(e){
    e.preventDefault()
    console.log("handleSubmit called")
  }
  handleEmail(){
    console.log("handleEmail called")
  }
  checkForm(e){
    console.log(e)
  }
  render() {
    return (
      <div className="App">
      
          <Grid>
          <Row className="show-grid">
              <Col xs={12} md={6}>
                  <Profile value={this.properties}/>
                 
              </Col>
             
            </Row>
            
          </Grid>
      </div>
    );
  }
}

export default App;





