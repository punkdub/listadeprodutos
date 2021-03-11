import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

class Footer extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={{color: '#fff'}}>{this.props.description}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#606060',
    height: 50,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  }
})

export default Footer