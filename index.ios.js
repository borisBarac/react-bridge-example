// @flow

import React, {Component} from 'react'
import {NativeModules} from 'react-native'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native'

export default class BridgeTest extends Component {
  constructor() {
      super()
      this.state = {
         nativeTitle: 'Init native title',
      }
   }
  render() {
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
          accessibilityLabel = "NativeAlert"
        />
        <Text style={styles.main}>
          {this.state.nativeTitle}
        </Text>
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

AppRegistry.registerComponent('BridgeTest', () => BridgeTest)
