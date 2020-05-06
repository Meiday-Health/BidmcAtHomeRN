import React from "react";
import { Input, Button } from "react-native-elements";
import { View, StyleSheet, Text } from "react-native";

class BasicForm extends React.Component {
  /**
   * Sets the state of the value typed by the user.
   */
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  /**
   * Triggers alert when submitted with the value entered.
   */
  handleSubmit = (event) => {
    alert("A value was submitted: " + this.state.value);
    event.preventDefault();
    //TODO: Clear the input box when submitted - issue #8
  };

  render() {
    return (
      /**
       * Display the entire form.
       */
      <View style={styles.basicFormContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.valueTitle}>{this.props.name}</Text>
          <Text style={styles.valueDescription}>{this.props.description}</Text>
        </View>
        <View style={styles.bottomForm}>
          <View style={styles.placeholderStyle}>
            <Input
              //TODO: add error message if submit is an empty string - issue #9
              //   errorStyle={{color: 'red'}}
              //       errorMessage='This field is required'
              //TODO: change the font of the placeholder - issue #10
              placeholder="Enter a value"
              onChange={this.handleChange}
            />
          </View>
          <View>
            <Button
              style={styles.buttonStyle}
              title={"Submit"}
              onPress={this.handleSubmit}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  /**
   * Specific elements composing top half of form style
   */
  valueTitle: {
    textAlign: "center",
    fontSize: 30,
    color: "rgba(30,144,255,1)",
    padding: 20,
    width: "100%",
    backgroundColor: "rgba(245, 245, 245,1)",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  valueDescription: {
    textAlign: "center",
    fontSize: 14,
    paddingRight: 40,
    paddingLeft: 40,
    paddingBottom: 20,
    width: "100%",
  },

  /**
   * Top half of form style
   */
  textContainer: {
    alignItems: "center",
    backgroundColor: "rgba(245, 245, 245,1)",
    //backgroundColor: "rgba(255, 0, 0,1)",
    //margin: 20,
    width: "100%",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderBottomColor: "rgba(178, 190, 195,1)",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  /**
   * Specific elements composing bottom half of form style
   */
  buttonStyle: {
    textAlign: "center",
    margin: 20,
    padding: 10,
  },
  placeholderStyle: {
    textAlign: "center",
    paddingTop: 20,
    width: "70%",
  },

  /**
   * Bottom half of form style
   */
  bottomForm: {
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 1)",
    //backgroundColor: "rgba(255, 0, 0,1)",
    width: "100%",
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    // borderColor: "rgba(0, 0, 0, 0.5)",
    // borderWidth: 20,
  },

  /**
   *
   * Entire form style
   */
  basicFormContainer: {
    alignItems: "center",
    margin: 20,
    //padding: 10,
    width: 500,
    borderStyle: "solid",
    borderRadius: 30,
    borderColor: "rgba(0, 0, 0, 0.5)",
    borderWidth: 2,
    //backgroundColor: "rgba(255,255, 255, 0.5)",
    position: "relative",
    //backgroundColor: "grey",
  },
});

export default BasicForm;
