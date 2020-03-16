import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Header = (props) => {
  return (
    <View style={[props.style, { height: 50, flexDirection: 'row' }]}>
      <TouchableOpacity
        onPress={props.onPressLeftIcon}
        style={{ flex: 1, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}
      >
        <Text>{props.leftIcon}</Text>
      </TouchableOpacity>
      <View style={{ flex: 2, backgroundColor: 'grey', alignItems: 'center', justifyContent: 'center' }}>
        <Text>{props.title}</Text>
      </View>
      <TouchableOpacity
        onPress={props.onPressRightIcon}
        style={{ flex: 1, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center' }}
      >
        <Text>{props.rightIcon}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Header