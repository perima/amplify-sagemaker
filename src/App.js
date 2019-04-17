import React, { Component } from 'react';
import { Header, Button, Checkbox, Form, Grid, Container } from 'semantic-ui-react';
import axios from 'axios';
import { Segment } from 'semantic-ui-react';

import Amplify, { API } from 'aws-amplify';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);


class App extends Component {
  
  constructor(props){
    super(props)
    
    this.state = {
      inferenceURL: null,
      inferenceResult: '',
      buying: 'low',
      maintained: 'high',
      doors: 5,
      persons: 5,
      boot: 'big',
      safety: 'high'
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleInference = this.handleInference.bind(this);
  }

    handleChangeOld(event) {
        this.setState({inferenceURL: event.target.value});
    }
    
    
    handleChange(event){
      var key = event.target.name
      var val = event.target.value
      var obj  = {}
      obj[key] = val
      this.setState(obj)
    }
    
      

    handleInference(event) {
        console.log('handleInference: ', this.state);
        let payload = {
          buying: this.state.buying,
          maintained: this.state.maintained,
          doors: this.state.doors,
          persons: this.state.persons,
          boot: this.state.boot,
          safety: this.state.safety
        };
        let myInit = {
            body: {
              inferenceURL: this.state.inferenceURL,
              payload: payload
            } 
        };
        console.log('myInit', myInit);
        
        API.post('sagemaker', 'items/', myInit).then(response => {
            // Add your code here
        }).catch(error => {
            console.log('API post error', error.response);
            this.setState({
              inferenceResult: 'error:' + error.response
            })
        });  
    }
      
  render() {
    return (
      <div>
        <Container text>
          <Header as='h1'>From Inception to Inference</Header>
            <Form>
              <Form.Field>
                <label>Inference URL</label>
                <input
                  name="inferenceURL"
                  placeholder='Deployed model inference endpoint' 
                  onChange={this.handleChange} 
                  value={this.state.inferenceURL}
                />
              </Form.Field>
              <Form.Field>
                <label>Buying</label>
                <input 
                  name="buying"
                  placeholder='buying'
                  onChange={this.handleChange} 
                  value={this.state.buying}
                />
              </Form.Field>
                    <Form.Field>
                      <label>Maintained</label>
                      <input 
                          placeholder='maintained'
                          name="maintained"
                          onChange={this.handleChange} 
                          value={this.state.maintained}
                          />
                    </Form.Field>
                    <Form.Field>
                      <label>Doors</label>
                      <input 
                          placeholder='doors'
                          name="doors"
                          onChange={this.handleChange} 
                          value={this.state.doors}
                          />
                    </Form.Field>
                    <Form.Field>
                      <label>Persons</label>
                      <input 
                          placeholder='persons'
                          name="persons"
                          onChange={this.handleChange} 
                          value={this.state.persons}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Luggage boot</label>
                      <input 
                          placeholder='luggage boot'
                          name="boot"
                          onChange={this.handleChange} 
                          value={this.state.boot}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Safety</label>
                      <input 
                          placeholder='safety'
                           name="safety"
                            onChange={this.handleChange} 
                            value={this.state.safety}
                          />
                    </Form.Field>
                    <Button onClick={this.handleInference}>Get inference</Button>
                  </Form>
                  
                   <Segment>Inference result: {this.state.inferenceResult}</Segment>
            </Container>
            </div>
    );
  }
}

export default App;
