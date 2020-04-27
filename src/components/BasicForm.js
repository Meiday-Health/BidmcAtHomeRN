import React from 'react'
import { Input, Button } from 'react-native-elements'
import {View, StyleSheet, Text } from 'react-native'

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
          
            <View style={styles.basicFormContainer}>
                <View style={styles.textContainer}>
              <Text style={styles.valueTitle}>
                {"\n" + this.name + "\n"}
              </Text>
              <Text style={styles.valueDescription}>
                  {this.description + "\n" + "\n"}
              </Text>
              </View>
              <Input 
              //TODO: add error message if submit is an empty string
              //   errorStyle={{color: 'red'}}
              //       errorMessage='This field is required'
              //TODO: change the font of the placeholder
              placeholder= "Enter a value" 
              
              onChange= {this.handleChange}
              />
              <Text>
                  {"\n"}
              </Text>
              <View style={[{  }]}>
              <Button
              style={styles.buttonStyle}
              title={'Submit'}
              onPress={this.handleSubmit}
              //TODO: Clear the input box when submitted 
              />
              </View>
         </View>
       
          )
      }

      
}

const styles = StyleSheet.create({
    valueTitle: {
        textAlign: 'center',
        fontSize: 20,
        color: 'rgba(30,144,255,1)',
    },
    valueDescription: {
        textAlign: 'center',
        fontSize: 14,
    },
    basicFormContainer: {
        alignItems: 'center',
        width: 200,
        marginTop: 10,
        marginBottom: 20,
    },
    textContainer: {
        alignItems: 'center',
        width: 200,
        backgroundColor: 'rgba(178, 190, 195,0.5)',
    },
    buttonStyle: {
        textAlign: 'center', 
        margin: 10
    },
    });

export default BasicForm;