import {Text, View} from 'native-base';
import React, {Component} from 'react';
import {Image, StatusBar, StyleSheet} from 'react-native';
import LoginButton from '../../components/login-button';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import Dialog, {
  DialogFooter,
  DialogButton,
  DialogContent,
} from 'react-native-popup-dialog';

class LoginScreen extends Component {
  state = {isSuccessDialogVisible: false, userData: null};

  componentDidMount = () => {};

  _login = () => {
    this.setState({ isSuccessDialogVisible: false }, () => {
      const {navigation} = this.props;
      navigation.replace('TabNavigator');
    })
  };

  handleFacebookLogin = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      result => {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          // Login successfull
          AccessToken.getCurrentAccessToken().then((data) => {
            this.setState({
              isSuccessDialogVisible: true,
              userData: JSON.stringify(data),
            });
          })
        }
      },
      function(error) {
        console.log('Login fail with error: ' + error);
      },
    );
  };

  render() {
    const {isSuccessDialogVisible, userData} = this.state;
    return (
      <React.Fragment>
        <View style={styles.pageWrapper}>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <View style={styles.contentWrapper}>
            <Image
              source={require('../../assets/images/zhhca-dark-logo.png')}
              style={styles.logoImage}
              resizeMode="contain"
            />
             <Image
              source={require('../../assets/images/separator.png')}
              style={styles.seperatorImage}
              resizeMode="contain"
            />
            <LoginButton
              marginTop={2}
              iconUrl={require('../../assets/images/facebook_icon.png')}
              text="CONTINUE WITH FACEBOOK"
              color="#3b5998"
              style={styles.fbBtn}
              onPress={() => this.handleFacebookLogin()}
            />
            <LoginButton
              marginTop={18}
              iconUrl={require('../../assets/images/google_icon.png')}
              text="CONTINUE WITH GOOGLE"
              color="#ea3327"
              style={styles.googleBtn}
              onPress={() => this._login()}
            />
            <LoginButton
              marginTop={18}
              iconUrl={require('../../assets/images/phone_icon.png')}
              text="CONTINUE WITH PHONE"
              color="#40a448"
              style={styles.phoneBtn}
              onPress={() => this._login()}
            />
            <LoginButton
              marginTop={18}
              iconUrl={require('../../assets/images/email_icon.png')}
              text="CONTINUE WITH EMAIL"
              color="#858685"
              style={styles.emailBtn}
              onPress={() => this._login()}
            />
            <Text style={styles.termsText1}>
              If you continue you are accepting
            </Text>
            <Text style={styles.termsText2}>
              ZHHCA Terms and Conditions and Privacy Policy
            </Text>
          </View>
        </View>
        <Dialog
          visible={isSuccessDialogVisible}
          footer={
            <DialogFooter>
              <DialogButton
                text="CANCEL"
                onPress={() => this.setState({isSuccessDialogVisible: false})}
              />

              <DialogButton text="OK" onPress={() => this._login()} />
            </DialogFooter>
          }>
          <DialogContent>
            <Text>{'Hey you have successfully logged in'}</Text>
            <Text>{userData}</Text>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  pageWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  contentWrapper: {
    flex: 1,
    paddingTop: '30%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
  },
  logoImage: {
    width: 200,
    height: 169,
    alignSelf: 'center',
  },
  seperatorImage: {
    marginTop: 40,
    width: 200,
    height: 20,
    alignSelf: 'center',
  },
  fbBtn: {
    marginTop: 40,
  },
  termsText1: {
    fontSize: 15,
    marginTop: '9%',
  },
  termsText2: {
    fontSize: 15,
    borderBottomWidth: 1,
    paddingBottom: 3,
  },
});

export default LoginScreen;
