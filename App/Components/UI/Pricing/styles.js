import { StyleSheet } from 'react-native'
import { Metrics, Colors } from 'App/Theme'

export default StyleSheet.create({
  card: {
    height: Metrics.screenWidth / 1.8,
    width: Metrics.screenWidth / 2.2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  button: {
    backgroundColor: Colors.primary,
    height: 50,
    width: Metrics.screenWidth / 2.8,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  disabledButton: {
    backgroundColor: 'grey'
  },
  title: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 18
  },
  pricing: {
    fontSize: 24,
    fontWeight: '400'
  },
  feature: {
    color: 'grey'
  }
})
