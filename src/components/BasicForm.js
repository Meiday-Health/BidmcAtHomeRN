import React from 'react'
import { Input, Button } from 'react-native-elements'
import {View } from 'react-native'

class BasicForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ' '};

        this.name = "Name";
        this.description = "description of the name";
        
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A value was submitted: ' + this.state.value);
        event.preventDefault();
      }

      render() {
          return (
                <View>
                  <Input 
                  label= {this.name + "\n" + this.description }
                  errorStyle={{color: 'red'}}
                      errorMessage='This field is required'
                      onChange= {this.handleChange}
                  />
                  <Button
                  title={'Submit'}
                  onPress={this.handleSubmit}
                  />
                </View>
          )
      }
}

export default BasicForm;