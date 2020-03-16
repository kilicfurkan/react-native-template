import React from 'react'
import { Platform, Text, SafeAreaView, Button, ActivityIndicator, Image } from 'react-native'
import Header from '../../Components/UI/Header'

/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu.',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu.',
})

class ExampleScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isPressedProfile: false,
      backgroundColor: 'green'
    }
  }

  onPressLeftIcon = () => {
    this.setState({ isPressedProfile: !this.state.isPressedProfile })
  }
  
  onPressRightIcon = () => {
    this.setState({ backgroundColor: 'purple' })
  }
  
  render() {
    const { backgroundColor } = this.state

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor }}>
        <Header
          style={{  }}
          title="Deneme"
          leftIcon="Profil"
          rightIcon="Ayarlar"
          onPressLeftIcon={() => [this.onPressLeftIcon(), this.onPressRightIcon()]}
          onPressRightIcon={() => this.onPressRightIcon()}
        />
        {this.state.isPressedProfile ? <Text>Profil</Text> : null}
      </SafeAreaView>
    )
  }
}

export default ExampleScreen
