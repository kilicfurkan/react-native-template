import React from 'react'
import { Platform, Text, View, SafeAreaView, ActivityIndicator, Image } from 'react-native'
import Pricing from '../../Components/UI/Pricing'

class ExampleScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Pricing
          title="Starter"
          features={features}
          price='$50'
          disabled
        />
        <Pricing
          title="Starter"
          features={features}
          price='$50'
        />
      </SafeAreaView>
    )
  }
}

const features = [
  'Bedava 1',
  'Bedava 2',
  'Bedava 3'
]

export default ExampleScreen
