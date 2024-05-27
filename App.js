import { View, Text, } from 'react-native'
import React from 'react'


import MyStack from './src/routes/routes'
import Login from './src/screen/Login'
import Home from './src/screen/Home'
import Getstarted from './src/screen/Getstarted'
import { Provider } from 'react-redux'
import { persistor, store } from './src/redux/Store'
import { PersistGate } from 'redux-persist/integration/react';
import Pt from './src/screen/Pt'
import Appointment from './src/screen/Appointment'





const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        <View style={{ flex: 1 }}>
          {/* <MyStack/> */}
          {/* <Login/> */}
          {/* <Home /> */}
          {/* <Pt/> */}
          <Appointment/>




        </View>
      </PersistGate>
    </Provider>
  )
}

export default App