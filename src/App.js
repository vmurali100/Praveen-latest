import React, { Component } from 'react';
import './App.css';
import {FormControl,Grid,Row,Col,Panel,Checkbox,FormGroup,Radio,Button} from 'react-bootstrap'
class App extends Component {
  render() {
    return (
      <div className="App">
      
          <Grid>
          <Row className="show-grid">
              <Col xs={12} md={6}>
              <Panel bsStyle="danger">
                <Panel.Heading>
                  <Panel.Title componentClass="h3">CREATE NEW PROFILE</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                <form>
                  <FormControl type="text" placeholder="Email Address"/>
                  <FormControl type="text" placeholder="First Name"/>
                  <FormControl type="text" placeholder="Last Name"/>
                  <FormControl type="text" placeholder="Phone"/>
                  <FormControl componentClass="select" placeholder="select">
                    <option value="select">Mobile</option>
                    <option value="other">...</option>
                  </FormControl>
                  <FormControl type="text" placeholder="Business Name"/>
                  <FormControl type="text" placeholder="Business Zip Code"/>
                </form>
                </Panel.Body>
              </Panel>
                 <Panel bsStyle="danger">
                  <Panel.Heading>
                    <Panel.Title componentClass="h3">TELL US ABOUT YOURSELF</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>
                    Telling us about yourlself will help us tailor the app to your needs
                    <Checkbox >
                      I have a fleet
                    </Checkbox>
                    <Checkbox  >
                      I rent Trucks
                    </Checkbox>
                    <Checkbox >
                      I drive a Truck
                    </Checkbox>
                    <Checkbox >
                      I need financials and Reporting
                    </Checkbox>
                    <Checkbox >
                      Other (Accounting , Administrative etc)
                    </Checkbox>
                    <h6>Do you rent or Lease from Ryder</h6>
                    <FormGroup>
                      <Radio name="radioGroup" inline>
                        Yes
                      </Radio>{' '}
                      <Radio name="radioGroup" inline>
                        No
                      </Radio>{' '}
                      
                    </FormGroup>
                    <h6>Account Numbers</h6>
                    <FormControl type="text" placeholder="1234"/>
                    <FormControl type="text" placeholder="Enter Lessie or Account Number"/>

                    <p>Your Password Must be between 8 and 15 characters long and contain at least one nubers , one uppercase letter , one lowercase letter and one special character</p>
                    <FormControl type="text" placeholder="Password"/>
                    <FormControl type="text" placeholder="Confirm Password"/>
                    <Button bsStyle="danger" block>Next</Button>

                    </Panel.Body>
                 </Panel>
              </Col>
             
            </Row>
            
          </Grid>
      </div>
    );
  }
}

export default App;
