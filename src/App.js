import React, { Component } from 'react';
import { Header, Button, Checkbox, Form, Grid, Container } from 'semantic-ui-react'
import axios from 'axios';

/*

by the way for the UI .. i need a submit button and 6 text boxes with options 
buying, maintained, doors, persons, luggage_boot, and safety . We can finish it in next few weeks -

*/


class App extends Component {
  
  constructor(props){
    super(props)
    
    this.state = {
      inferenceURL: null
    }
    
    this.handleChange = this.handleChange.bind(this);
  }

    handleChange(event) {
      console.log(event.target.value);
        this.setState({inferenceURL: event.target.value});
      }

    handleInference(event) {
      console.log('handleInference: ', event.target.value);
      }
    
  handleInferenceOld = event => {
    event.preventDefault();

    const payload = {
        
      };
      
      console.log('handleInference', payload);

    /*
    axios.post(`https://jsonplaceholder.typicode.com/users`, { payload })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
      
       value: {this.state.inferenceURL}
       
      */
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
                name="name"
                  placeholder='Deployed model inference endpoint' 
                  onChange={this.handleChange} 
                  value={this.state.inferenceURL}
                />
              </Form.Field>
              <Form.Field>
                <label>Buying</label>
                <input placeholder='buying' />
              </Form.Field>
                    <Form.Field>
                      <label>Maintained</label>
                      <input placeholder='maintained' />
                    </Form.Field>
                    <Form.Field>
                      <label>Doors</label>
                      <input placeholder='doors' />
                    </Form.Field>
                    <Form.Field>
                      <label>Persons</label>
                      <input placeholder='persons' />
                    </Form.Field>
                    <Form.Field>
                      <label>Luggage boot</label>
                      <input placeholder='luggage boot' />
                    </Form.Field>
                    <Form.Field>
                      <label>Safety</label>
                      <input placeholder='safety' />
                    </Form.Field>
                    <Button onClick={this.handleInference}>Get inference</Button>
                  </Form>
            </Container>
            </div>
    );
  }
}

export default App;
