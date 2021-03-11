import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'

class Header extends Component {
  render () {
    const imgUrl = 'https://www.iconsdb.com/icons/preview/white/cart-78-xxl.png'

    return (
      <View style={styles.container}>
        <Image 
          source={{ uri: imgUrl }} 
          style={styles.cartIcon}
        >
        </Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3D8AF7',
    paddingTop: 20
  },
  cartIcon: {
    width: 40,
    height: 40,
    margin: 10
  }
})

export default Header