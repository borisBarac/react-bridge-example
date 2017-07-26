import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  requireNativeComponent,
} from 'react-native'

export default class ReactNativeComponent extends Component {
  static navigationOptions = {
    title: 'React Bridge',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>
          The view bellow is native
        </Text>
         <NativeView/>
      </View>
    )
  }
}

const background = '#ecf0f1'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: background,
  },
})

let NativeView = requireNativeComponent('NativeView', NativeView)
