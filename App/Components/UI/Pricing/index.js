import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

const Pricing = ({ title, price, features, disabled }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.pricing}>{price}</Text>
      <View>
        {features.map(feature => (
          <Text style={styles.feature}>{feature}</Text>
        ))}
      </View>
      <TouchableOpacity
        disabled={disabled}
        onPress={() => { }}
        style={[styles.button, disabled ? styles.disabledButton : null]}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>Buton</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Pricing