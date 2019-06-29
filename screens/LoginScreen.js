import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo';
import * as Facebook from 'expo-facebook';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  login = async () => {
    console.log('.....');
    console.log(this.props);
    try {
      const response = await Facebook.logInWithReadPermissionsAsync(
        '330573864526155',
        {
          permissions: ['public_profile']
        }
      );
      const { token } = response;
      if (token) {
        await AsyncStorage.setItem('@token', token);
        this.props.navigation.navigate('Main');
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.login}>
          <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}
          >
            <Text
              style={{
                backgroundColor: 'transparent',
                fontSize: 15,
                color: '#fff'
              }}
            >
              Sign in with Facebook
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
