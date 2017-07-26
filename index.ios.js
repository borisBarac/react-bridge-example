// @flow

import React, {Component} from 'react'
import {NativeModules} from 'react-native'
import {StackNavigator} from 'react-navigation'
import ReactNativeComponent from './components/ReactNativeComponent'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native'

import PropTypes from 'prop-types'

class BridgeTest extends Component {
  static navigationOptions = {
    title: 'React Bridge',
  };

  constructor() {
    super()
    this.state = {
      nativeTitle: 'Init native title',
    }
  }

  render() {
    const {navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.main}>
          This is a example of react JS-Native bridge.
        </Text>
        <Text style={styles.instructions}>
          The bridge is demonstrated in booth ways.
        </Text>
        <Button
          title="Show Native Alert"
          onPress={this._callNativeContext}
          style={styles.main}
          accessibilityLabel="NativeAlert"
        />
        <Text style={styles.main}>
          {this.state.nativeTitle}
        </Text>
        <Button
          title="React component in native view controller"
          onPress={() => navigate('NativeComponent')}
          style={styles.main}
          accessibilityLabel="reactComponentInNative"
        />
      </View>
    )
  }

  _callNativeContext = () => {
    let NativeModule = NativeModules.NativeAlertDialog

    NativeModule.showAlertWithTitle('JS Title', (objcTitle) => {
      console.log(objcTitle)
      this.setState({nativeTitle: objcTitle})
    })
  }
}

BridgeTest.propTypes = {
  navigation: PropTypes.object.isRequired,
}

const background = '#F5FCFF'
const foreGround = '#333333'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: background,
  },
  main: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: foreGround,
    marginBottom: 5,
  },
})

const SimpleApp = StackNavigator({
  Home: {screen: BridgeTest},
  NativeComponent: {screen: ReactNativeComponent},
})

AppRegistry.registerComponent('BridgeTest', () => SimpleApp)
