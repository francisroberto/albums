// Import libraries for making a registerComponent
import React from 'react';
import { Text, View } from 'react-native';


// Make a registerComponent
const Header = (prop) => {
  const { textStyle, viewStyle } = styles;

  return (
  //each of the 'styles' property, the viewStyle and
  //textStyle are loaded up on the View and Text tags
    <View style={viewStyle}>
    <Text style={textStyle}>{prop.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#A8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15

  },
  textStyle: {
    fontSize: 20
  }
};

// Make the component available to the other parts of the App
export default Header;
