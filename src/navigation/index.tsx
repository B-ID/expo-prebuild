import React, { type FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { type RootStackParamList } from '@screens/screen-types'
import HomeScreen from '@screens/home'
import SettingsScreen from '@screens/settings'
import PaymentScreen from '@screens/payment'
import OrderScreen from '@screens/order'

// @ts-expect-error RootStackParamList does not extend type ParamListBase
const { Screen, Navigator } = createNativeStackNavigator<RootStackParamList>()
const Navigation: FC = () => {
  return (
        <NavigationContainer>
            <Navigator screenOptions={{
              headerShown: false
            }} initialRouteName={'home'}>
                <Screen name={'home'} component={HomeScreen} />
                <Screen name={'settings'} component={SettingsScreen} />
                <Screen name={'payment'} component={PaymentScreen} />
                <Screen name={'order'} component={OrderScreen} />
            </Navigator>
        </NavigationContainer>
  )
}

export default Navigation
