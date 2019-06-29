import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  AsyncStorage,
  Text,
  StyleSheet,
  Alert
} from 'react-native';
import { LinearGradient } from 'expo';

export default class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout = async () => {
    Alert.alert('Alert', 'Are you sure to logout ?', [
      {
        text: 'yes',
        onPress: async () => {
          await AsyncStorage.removeItem('@token');
          this.props.navigation.navigate('Login');
        }
      },
      {
        text: 'no',
        onPress: null
      }
    ]);
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.logout}>
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
              Logout
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
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
