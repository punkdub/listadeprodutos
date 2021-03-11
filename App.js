import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native'

import Header from './src/components/Header'
import Products from './src/components/Products'
import Footer from './src/components/Footer'

class App extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      products: [
        { id: '001', name: 'Pipoca', price: '3.00', quantity: '10', brand: 'Sinhá', disccount: '5% de Desconto', promo: 'Leve 3, Pague 2' },
        { id: '002', name: 'Sabonete', price: '1.50', quantity: '30', brand: 'Lux', disccount: '15% de Desconto', promo: 'Leve 3, Pague 2' },
        { id: '003', name: 'Condicionador', price: '8.90', quantity: '70', brand: 'Skala', disccount: '20% de Desconto', promo: 'Leve 3, Pague 2' },
        { id: '004', name: 'Cup Noodles', price: '3.50', quantity: '40', brand: 'UDON', disccount: '20% de Desconto', promo: 'Leve 5, Pague 4' },
        { id: '005', name: 'Desodorante', price: '12.80', quantity: '15', brand: 'Rexona', disccount: '50% de Desconto', promo: 'Leve 3, Pague 2' },
        { id: '006', name: 'Del Valle', price: '5.50', quantity: '40', brand: 'Coca-Cola', disccount: '10% de Desconto', promo: 'Leve 3, Pague 2' },
        { id: '007', name: 'Pão Sovado', price: '5.00', quantity: '60', brand: 'Catiara', disccount: '10% de Desconto', promo: 'Leve 6, Pague 5' },
      ]
    }
  }

  render () {
    return (
      <View>
        <ScrollView>
          <Header />
          
          <Text style={styles.title}>Lista de Produtos</Text>

          <FlatList
            data={this.state.products}
            keyExtractor={(item) => item.id}
            renderItem={({item}) =>
              <Products
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                brand={item.brand}
                id={item.id}
                disccount={item.disccount}
                promo={item.promo}
              />
            } 
          />

          <Footer 
            description="Produtos Alfa 7"
          />
      </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#F21D1D',
    margin: 10,
  }
})

export default App