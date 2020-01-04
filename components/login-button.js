import { View, Text } from 'native-base';
import React, { Component } from 'react';
import {Image, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class LoginButton extends Component {
  state = {  }
  render() { 
    const { iconUrl, text, color, marginTop } = this.props;
    return (  
      <TouchableOpacity {...this.props}>
        <View style={[styles.buttonWrapper, {borderColor: color, marginTop: marginTop || 0}]}>
          <Image 
            source={iconUrl}
            resizeMode="contain"
            style={styles.icon}
          />
          <Text style={{color}}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonWrapper: {
    width: 300,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth: 2,
    marginTop: 42,
    borderRadius: 5,
    paddingLeft: 25
  },
  icon: {
    width: 25,
    marginRight: 12
  }
});
 
export default LoginButton;