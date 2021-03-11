import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Products extends Component {
  render () {
    return (
      <View style={styles.card}>
        <Text style={styles.productName}>{this.props.name}</Text>

        <View style={styles.productDetails}>
          <View>
            <Text style={styles.textBold}>Valor: <Text style={styles.normalText}>R$ {this.props.price}</Text> </Text> 

            <Text style={styles.textBold}>Quantidade: <Text style={styles.normalText}>{this.props.quantity}</Text> </Text>

            <View style={styles.disccountCard}>
              <Text style={styles.normalText}>{this.props.disccount}</Text>
            </View>
          </View>

          <View>
            <Text style={styles.textBold}>Marca: <Text style={styles.normalText}>{this.props.brand}</Text> </Text>

            <Text style={styles.textBold}>Ref: <Text style={styles.normalText}>{this.props.id}</Text> </Text>

            <View style={styles.promoCard}>
             <Text style={styles.normalText}>{this.props.promo}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: '#C2C2C2',
    width: 300,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff'
  },
  textBold: {
    color: '#fff',
    fontWeight: 'bold'
  },
  normalText: {
    color: '#fff',
    fontWeight: 'normal'
  },
  productDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8
  },
  disccountCard: {
    backgroundColor: '#72BB53',
    width: 120,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8
  },
  promoCard: {
    backgroundColor: '#FF8351',
    width: 130,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8
  }
})

export default Products