import React, { Component } from 'react';
import { Image, View } from 'react-native';

class SplashScreen extends Component {
  state = {};
  componentDidMount = () => {
    // Navigate to login sceen after 2 seconds
    setTimeout(() => {
      const {navigation} = this.props;
      navigation.replace('LoginScreen');
    }, 1000); // 1 second delay
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#e83e33',
          width: '100%',
        }}>
        <Image
          source={require('../../assets/images/zhhca-white-trans-full.png')}
          style={{
            width: 200,
            height: 189,
          }}
        />
      </View>
    );
  }
}

export default SplashScreen;
