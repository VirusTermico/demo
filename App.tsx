import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth'
const App = () => {
  return (
    <SafeAreaView>
      <Text style={{color:"#fff"}}>App</Text>
      <Button title='Login' onPress={()=>{
          auth().signInAnonymously();
      }}/>
    </SafeAreaView>
  )
}

export default App