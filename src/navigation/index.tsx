import React, { type FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { type RootStackParamList } from '@screens/screen-types'
import HomeScreen from '@screens/home'
import SettingsScreen from '@screens/settings'
import PaymentScreen from '@screens/payment'
import OrderScreen from '@screens/order'

const { Screen, Navigator } = createNativeStackNavigator<RootStackParamList>()
const Navigation: FC = () => {
  return (
        <NavigationContainer>
            <Navigator screenOptions={{
              headerShown: false
            }} initialRouteName={'Home'}>
                <Screen name={'Home'} component={HomeScreen} />
                <Screen name={'Settings'} component={SettingsScreen} />
                <Screen name={'Payment'} component={PaymentScreen} />
                <Screen name={'Order'} component={OrderScreen} />
            </Navigator>
        </NavigationContainer>
  )
}

export default Navigation
